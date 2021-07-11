import type { ActivityLevel, Gender } from '../Signup/__generated__/PatientUserCreateMutation.graphql';
import type { AppointmentFollowupMutation } from './__generated__/AppointmentFollowupMutation.graphql';

import React from 'react';
import { Button } from '@chakra-ui/button';
import { AddIcon } from '@chakra-ui/icons';
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
    onCloseFollowupModal: ()=>void,

}

const AppointmentFollowup = ({ event, onClose, onCloseFollowupModal }:AppointmentType) => {

    const toast = useToast();

    const [commit, isInFlight] = useMutation<AppointmentFollowupMutation>(graphql`
    mutation AppointmentFollowupMutation($followupInput: FollowupInput!){
        assignFollowup(followupInput: $followupInput)
        }
    `);

    const handleFollowupClick = (): void => {
        const result = confirm('Confirm to assign a follow up!');
        if (result) {
            commit({
                onCompleted({ assignFollowup }) {
                    if(assignFollowup && onClose && onCloseFollowupModal) {
                        
                        toast({
                            description: 'Appointment marked as Done and been saved.',
                            duration: 9000,
                            isClosable: true,
                            status: 'success',
                            title: 'Appointment marked as Done.',
                        });
                        onClose();
                        onCloseFollowupModal();
                        
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
                    'followupInput': {
                        doctorNotes:'',
                        /** here goes the input */
                        doctorRef: '',
                        patientRef: '',
                        services: [{
                            serviceId:'',
                            serviceName: '',
                        }],
                        suggestedDate: '',
                    },
                },
            });
        }
    };
    return (
        isInFlight ? <LoadingIndicator /> :
            <Button
                colorScheme='green'
                leftIcon={<AddIcon />}
                mr={3}
                onClick={handleFollowupClick}
            >
            Save Followup
            </Button>
    );

};

export default AppointmentFollowup;

