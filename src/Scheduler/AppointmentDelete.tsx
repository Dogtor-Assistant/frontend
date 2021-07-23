import type { AppointmentDeleteMutation } from './__generated__/AppointmentDeleteMutation.graphql';

import React from 'react';
import { Button } from '@chakra-ui/button';
import { DeleteIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/toast';

import { useMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type AppointmentType = {
    eventId:string,
    onClose: ()=>void,
}

const AppointmentDelete = ({ eventId, onClose }:AppointmentType) => {
    
    const toast = useToast();
    const [commit, isInFlight] = useMutation<AppointmentDeleteMutation>(graphql`
    mutation AppointmentDeleteMutation($id: ID!){
        deleteAppointmentById(id: $id)
    }
    `);

    const handleDeleteClick = (): void => {
        const result = confirm('Are you sure you want to delete?');
        if (result) {
            commit({
                onCompleted({ deleteAppointmentById }) {
                    if(deleteAppointmentById && onClose) {
                        
                        toast({
                            description: 'Appointment deleted successfully.',
                            duration: 9000,
                            isClosable: true,
                            status: 'success',
                            title: 'Appointment Deleted.',
                        });
                        onClose();
                        
                    }else{
                        toast({
                            description: 'Appointment could not be deleted.',
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
            colorScheme='red'
            isLoading={isInFlight}
            leftIcon={<DeleteIcon />}
            mr={3}
            onClick={handleDeleteClick}
        >
        Delete
        </Button>
    );

};

export default AppointmentDelete;
