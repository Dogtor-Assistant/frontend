import type { AppointmentDoneMutation } from './__generated__/AppointmentDoneMutation.graphql';

import React from 'react';
import { useToast } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import { CheckIcon } from '@chakra-ui/icons';

import { useMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type AppointmentType = {
    event: {
        id:string,
        title: string,
        start: string | number | Date | number[],
        end: string | number | Date | number[],
        lastName: string,
    },
    onClose: ()=>void,
}

const AppointmentDone = ({ event, onClose }:AppointmentType) => {
    const toast = useToast();

    const [commit] = useMutation<AppointmentDoneMutation>(graphql`
    mutation AppointmentDoneMutation($id: ID!){
        makeAppointmentAsDone(id: $id)
        }
    `);

    const handleDoneClick = (): void => {

        const result = confirm('Are you sure you want to mark this appointment as done?');
        if (result) {
            commit({
                onCompleted({ makeAppointmentAsDone }) {
                    if(makeAppointmentAsDone && onClose) {
                        toast({
                            description: 'Appointment marked as Done and been saved.',
                            duration: 9000,
                            isClosable: true,
                            status: 'success',
                            title: 'Appointment marked as Done.',
                        });
                        onClose();
                    }else{
                        toast({
                            description: 'Appointment could not be marked as Done.',
                            duration: 9000,
                            isClosable: true,
                            status: 'error',
                            title: 'Failure',
                        });
                    }
                },
                variables: {
                    'id': event.id,
                },
            });
        }
    };
    return (
        <Button
            colorScheme='green'
            leftIcon={<CheckIcon />}
            mr={3}
            onClick={handleDoneClick}
        >
        Done
        </Button>
    );

};

export default AppointmentDone;

