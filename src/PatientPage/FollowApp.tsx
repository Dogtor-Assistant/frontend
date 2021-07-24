import type { FollowAppUnreadQuery as FollowAppUnreadQueryType } from './__generated__/FollowAppUnreadQuery.graphql';
import type { ErrorBoundary } from 'react-error-boundary';
import type { PreloadedQuery } from 'react-relay';

import FollowAppUnreadQuery from './__generated__/FollowAppUnreadQuery.graphql';

import React, { useEffect, useRef } from 'react';
import { Center, Grid, Text } from '@chakra-ui/react';

import { useQueryLoader } from 'react-relay';
import { usePreloadedQuery } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Suspense from 'Suspense';

type LoadedProps = {
  data: PreloadedQuery<FollowAppUnreadQueryType>,
  setShowFollowup: React.Dispatch<React.SetStateAction<boolean>>,
}

function LoadedFollowApp(props: LoadedProps) {
    const data = usePreloadedQuery(
        graphql`
        query FollowAppUnreadQuery {
          me {
            firstname
            lastname
            patientProfile {
                unreadFollowups {
                    id
                    doctor {
                        firstname
                        lastname
                    }
                    services {
                        serviceId
                        serviceName
                    }
                }
              }
          }
      }
      `,
        props.data,
    );
    useEffect(() => {
        if (data.me?.patientProfile?.unreadFollowups !== undefined &&
            data.me?.patientProfile?.unreadFollowups.length > 0)
            props.setShowFollowup(true);
        else props.setShowFollowup(false);
    }, [data.me?.patientProfile?.unreadFollowups, props]);

    return (
        <Center>
            <Grid gap={6} w={600}>
                { data.me?.patientProfile?.unreadFollowups !== undefined &&
                data.me?.patientProfile?.unreadFollowups.length > 0 &&
                data.me?.patientProfile?.unreadFollowups.map(followup => {
                    return (
                        <Text key={followup.id}>
                            hi
                            {followup.doctor.firstname} {followup.doctor.lastname}
                            {followup.services[0].serviceId} {followup.services[0].serviceName}
                        </Text>
                        
                    /*<FollBox
                            key={followup.id}
                            keyV={followup.id}
                            name={`${data.me?.firstname} ${data.me?.lastname}`}
                            service={checkup.services[0]}
                        />*/
                    );
                })
                }
            </Grid>
        </Center>
    );
}

type Props = {
    setShowFollowup: React.Dispatch<React.SetStateAction<boolean>>,
}

function FollowApp(props: Props) {
    const [
        data,
        loadQuery,
        dispose,
    ] = useQueryLoader<FollowAppUnreadQueryType>(FollowAppUnreadQuery);

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
            {data != null && <LoadedFollowApp data={data} setShowFollowup={props.setShowFollowup}/>}
        </Suspense>
    );
}

export default FollowApp;
