import type { CheckupNotUnreadQuery as CheckupNotUnreadQueryType } from './__generated__/CheckupNotUnreadQuery.graphql';
import type { ErrorBoundary } from 'react-error-boundary';
import type { PreloadedQuery } from 'react-relay';

import CheckupNotUnreadQuery from './__generated__/CheckupNotUnreadQuery.graphql';

import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { Center, Grid } from '@chakra-ui/react';

import { useQueryLoader } from 'react-relay';
import { usePreloadedQuery } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Suspense from 'Suspense';
import NotBox from './NotBox';

import { useAuthenticatedToken } from 'authentication';
import { useBackendURL } from 'config';
import { usePatientId } from 'user';

type LoadedProps = {
  data: PreloadedQuery<CheckupNotUnreadQueryType>,
}

function LoadedCheckupNot(props: LoadedProps) {
    const data = usePreloadedQuery(
        graphql`
        query CheckupNotUnreadQuery {
          me {
            firstname
            lastname
            patientProfile {
                address {
                    city
                }
                unreadCheckups {
                  id
                  services
                }
              }
          }
      }
      `,
        props.data,
    );
    
    return (
        <Center>
            <Grid gap={6} w={600}>
                { data.me?.patientProfile?.unreadCheckups !== undefined &&
                data.me?.patientProfile?.unreadCheckups.length > 0 &&
                data.me?.patientProfile?.unreadCheckups.map(checkup => {
                    return (
                        <NotBox
                            city={data.me?.patientProfile?.address?.city !== undefined ?
                                data.me?.patientProfile?.address?.city : ''}
                            key={checkup.id}
                            keyV={checkup.id}
                            name={`${data.me?.firstname} ${data.me?.lastname}`}
                            service={checkup.services[0]}
                        />
                    );
                })
                }
            </Grid>
        </Center>
    );
}

function CheckupNot() {
    const url = useBackendURL('graphql');
    const accessToken = useAuthenticatedToken();
    const patientId = usePatientId();

    const [refreshCheckups, setRefreshCheckups] = useState(true);
    
    const fetchRec = useCallback(
        async () => {
            const token = await accessToken();
            const authorizationHeader = token != null ? {
                authorization: `Bearer ${token}`,
            } : undefined;

            const response = await fetch(url, {
                body: JSON.stringify({
                    query: `query CheckupNotRecommendationsQuery {
                                me {
                                    patientProfile {
                                        checkupRecommendations {
                                            service
                                            kind
                                            periodInDays
                                        }
                                    }
                                }
                            }`,
                }),
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json',
                    ...authorizationHeader,
                },
                method: 'POST',
                mode: 'cors',
            });
            return response.json();
        },
        [url, accessToken],
    );
    
    const genCheck = useCallback(
        async rec => {
            const token = await accessToken();
            const authorizationHeader = token != null ? {
                authorization: `Bearer ${token}`,
            } : undefined;

            const variables = { 'id': patientId, 'recommendations': rec };
            const response = await fetch(url, {
                body: JSON.stringify({
                    query: `mutation generatePatientCheckup($input: CheckupsGenInput!){
                                generateCheckups(input: $input) {
                                    services 
                                    suggestedDate
                                    isRead
                                }
                            }`,
                    variables: {
                        input: variables,
                    },
                }),
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json',
                    ...authorizationHeader,
                },
                method: 'POST',
                mode: 'cors',
            });
            return response.json();
        },
        [accessToken, patientId, url],
    );

    const [
        data,
        loadQuery,
        dispose,
    ] = useQueryLoader<CheckupNotUnreadQueryType>(CheckupNotUnreadQuery);

    const error = useRef<ErrorBoundary>(null);
    useEffect(() => {
        if (refreshCheckups) {
            let rec: Array<{ 'service': string, 'kind': string, 'periodInDays': number }> = [];
            setRefreshCheckups(false);
            fetchRec().then(res => {
                rec = res.data.me.patientProfile.checkupRecommendations;
            }).then(() => {
                genCheck(rec).then(() => {
                    loadQuery({ }, { fetchPolicy: 'network-only' });
                });
            });
            
        }

        error.current?.reset();
        loadQuery({ });
        return () => {
            dispose();
        };
    }, [dispose, fetchRec, genCheck, loadQuery, refreshCheckups, url]);

    return (
        <Suspense boundaryRef={error}>
            {data != null && <LoadedCheckupNot data={data} />}
        </Suspense>
    );
}

export default CheckupNot;
