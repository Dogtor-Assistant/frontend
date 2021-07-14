import type { AppointmentDoneMutation } from './__generated__/AppointmentDoneMutation.graphql';

import React from 'react';
import { useToast } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import { CheckIcon } from '@chakra-ui/icons';

import { useMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type AppointmentType = {
    eventId:string,
    onClose: ()=>void,
}

const AppointmentDone = ({ eventId, onClose }:AppointmentType) => {
    
    const toast = useToast();

    const [commit, isInFlight] = useMutation<AppointmentDoneMutation>(graphql`
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
                    'id': eventId,
                },
            });
        }
    };
    return (
        <Button
            colorScheme='green'
            isLoading={isInFlight}
            leftIcon={<CheckIcon />}
            mr={3}
            onClick={handleDoneClick}
        >
        Done
        </Button>
    );

};

export default AppointmentDone;
