import type { UpcomingApp_data$key } from './__generated__/UpcomingApp_data.graphql';

import React from 'react';
import { Center, Grid, Text } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import AppBox from './AppBox';

type Props = {
    data: UpcomingApp_data$key,
    refreshQuery: () => void,
}

function UpcomingApp(props: Props) {
    const data = useFragment(
        graphql`
            fragment UpcomingApp_data on Query
            @argumentDefinitions(
                patientID: { type: "ID!" }
            ) {
                patientUpcomingAppointments(id: $patientID) {
                    id
                    ...AppBox_appointment
                }
            }
        `,
        props.data,
    );
    return (
        <Center>
            <Grid gap={6} w={600}>
                {
                    data.patientUpcomingAppointments.length === 0 && (
                        <Center>
                            <Text>
                                No upcoming appointments!
                            </Text>
                        </Center>
                    )
                }
                {
                    data.patientUpcomingAppointments.length !== 0 &&
                    data.patientUpcomingAppointments.map(app => {
                        return (
                            <AppBox
                                appointment={app}
                                isPast={false}
                                key={app.id}
                                refreshQuery={props.refreshQuery}
                            />
                        );
                    })
                }
            </Grid>
        </Center>
    );
}

export default UpcomingApp;
