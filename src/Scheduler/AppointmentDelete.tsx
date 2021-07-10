import type { ActivityLevel, Gender } from '../Signup/__generated__/PatientUserCreateMutation.graphql';
import type { AppointmentDeleteMutation } from './__generated__/AppointmentDeleteMutation.graphql';

import React, { useState } from 'react';
import { Button } from '@chakra-ui/button';
import { DeleteIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/toast';

import { useMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import LoadingIndicator from '../LoadingIndicator';

type AppointmentType = {
    event:{
        id:string,
        title: string,
        start: string | number | Date | number[],
        end: string | number | Date | number[],
        lastName: string,
        firstName: string,
        patient: {
            activityLevel: ActivityLevel,
            address: {
                city: string,
                streetName: string,
                streetNumber: number,
                zipCode: number,
            },
            firstname: string,
            gender: Gender,
            height: number,
            id: string,
            isSmoker: boolean,
            lastname: string,
            surgeries: [string],
            weight: number,
        },

    },
    onClose: ()=>void,
}

const AppointmentDelete = ({ event, onClose }:AppointmentType) => {
    
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
                    'id': event.id,
                },
            });
        }
        
    };
    return (
        
        <Button
            colorScheme='red'
            leftIcon={<DeleteIcon />}
            mr={3}
            onClick={handleDeleteClick}
        >
        
        Delete
        </Button>
    );

};

export default AppointmentDelete;
