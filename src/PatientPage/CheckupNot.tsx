import type { CheckupNotUnreadQuery as CheckupNotUnreadQueryType } from './__generated__/CheckupNotUnreadQuery.graphql';
import type { ErrorBoundary } from 'react-error-boundary';
import type { PreloadedQuery } from 'react-relay';

import CheckupNotUnreadQuery from './__generated__/CheckupNotUnreadQuery.graphql';

import React, { useEffect, useRef } from 'react';
import { Center, Grid } from '@chakra-ui/react';

import { useQueryLoader } from 'react-relay';
import { usePreloadedQuery } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Suspense from 'Suspense';
import NotBox from './NotBox';

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
    const [
        data,
        loadQuery,
        dispose,
    ] = useQueryLoader<CheckupNotUnreadQueryType>(CheckupNotUnreadQuery);

    const error = useRef<ErrorBoundary>(null);
    useEffect(() => {
        error.current?.reset();
        loadQuery({ });
        return () => {
            dispose();
        };
    }, [dispose, loadQuery]);

    return (
        <Suspense boundaryRef={error}>
            {data != null && <LoadedCheckupNot data={data} />}
        </Suspense>
    );
}

export default CheckupNot;
