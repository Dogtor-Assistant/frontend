import type { PastApp_data$key } from './__generated__/PastApp_data.graphql';

import React from 'react';
import { Center, Grid, Text } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import AppBox from './AppBox';

type Props = {
    data: PastApp_data$key,
    refreshQuery: () => void,
}

function PastApp(props: Props) {
    const data = useFragment(
        graphql`
            fragment PastApp_data on Query
            @argumentDefinitions(
                patientID: { type: "ID!" }
            ) {
                patientPreviousAppointments(id: $patientID) {
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
                    data.patientPreviousAppointments.length === 0 && (
                        <Center>
                            <Text>
                                No upcoming appointments!
                            </Text>
                        </Center>
                    )
                    
                }
                {
                    data.patientPreviousAppointments.length !== 0 &&
                    data.patientPreviousAppointments.map(app => {
                        return (
                            <AppBox
                                appointment={app}
                                isPast={true}
                                key={app.id}
                                refreshQuery={props.refreshQuery}
                            />
                        );
                    },
                    )
                }
            </Grid>
        </Center>
    );
}

export default PastApp;
