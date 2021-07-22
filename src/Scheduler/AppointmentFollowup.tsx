import type { ActivityLevel, Gender } from '../Signup/__generated__/PatientUserCreateMutation.graphql';
import type { AppointmentFollowupMutation } from './__generated__/AppointmentFollowupMutation.graphql';

import React, { useState } from 'react';
import {
    Box,
    Button,
    Divider,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    Flex,
    FormControl,
    FormLabel,
    IconButton,
    Select,
    Spacer,
    Stack,
    Text,
    Textarea,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/toast';

import { useMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import DatePickerComponent from '../DatePicker/DatePickerComponent';
import LoadingIndicator from '../LoadingIndicator';
import SearchDoctor from './SearchDoctor';

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
    onCloseFollowupModal: ()=>void,
}
type doctorType ={
    id: string, firstname: string, lastname:string,
        services: { id: string, serviceName: string }[],
}

const AppointmentFollowup = ({ event, onCloseFollowupModal }:AppointmentType) => {

    const toast = useToast();

    const [startDate, setStartDate] = useState(new Date());
    const [notes, setNotes] = useState('');
    const [serviceIdSelected, setServiceIdSelected] = useState('');
    const [servicesAdded, setServicesAdded] = useState([{ id: '', serviceName: '' }]);

    const [doctor, setDoctor] = useState<doctorType>({
        firstname: '',
        id: '',
        lastname: '',
        services: [{ id: '', serviceName: '' }],
    });
    
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
                    if(assignFollowup && onCloseFollowupModal) {
                        
                        toast({
                            description: 'A followup has been saved.',
                            duration: 9000,
                            isClosable: true,
                            status: 'success',
                            title: 'Successfully.',
                        });
                       
                        onCloseFollowupModal();
                        
                    }else{
                        toast({
                            description: 'Could not save followup.',
                            duration: 9000,
                            isClosable: true,
                            status: 'error',
                            title: 'Failure',
                        });
                    }
                },
                variables: {
                    'followupInput': {
                        doctorNotes: notes,
                        doctorRef: doctor.id,
                        patientRef: event.patient.id,
                        services: [...servicesAdded.map(service => ({
                            serviceId: service.id,
                            serviceName: service.serviceName,
                        }))],
                        suggestedDate: startDate.toISOString(),
                    },
                },
            });
        }
    };

    const handleAddService = () => {
        if (serviceIdSelected === '') {
            return;
        }

        const exist = servicesAdded.filter(s => s.id === serviceIdSelected);
        if (exist.length === 0) {
            const newServicesAdded = [...servicesAdded.filter(s => s.id),
                doctor.services.filter(s => s.id === serviceIdSelected)[0]];
            
            setServicesAdded(newServicesAdded);
        }
        
    };

    const handleRemoveService = (serviceId: string) => {
        const removedArr = [...servicesAdded].filter(s => s.id !== serviceId);
        setServicesAdded(removedArr);
    };

    return (
        isInFlight ? <LoadingIndicator /> :
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create new followup</DrawerHeader>
                <DrawerBody>
                    <Stack spacing='24px'>
                        
                        <SearchDoctor setDoctor={setDoctor} />
                            
                        {servicesAdded.map(s => {
                            return (
                                s.id !== '' && (
                                    <Flex alignItems={'center'} key={s.id} mt={6} pl={4}>
                                        <Text>{s.serviceName}</Text>
                                        <Spacer />
                                        <IconButton
                                            aria-label="Delete Service"
                                            colorScheme="blue"
                                            icon={<DeleteIcon />}
                                            marginEnd="0"
                                            onClick={() => handleRemoveService(s.id)}
                                            textAlign="center"
                                            variant="solid"
                                        >
                                        </IconButton>
                                    </Flex>)
                            );
                        })}
                        <FormLabel>Provided Services</FormLabel>

                        <Select
                            id='services'
                            onChange={event => {
                                if (!event.target.value) setServiceIdSelected('');
                                else setServiceIdSelected(event.target.value);
                            }}
                            placeholder="Service" >
                            {
                                doctor?.services?.map(service => <option key={service.id}
                                    value={service.id}>{service.serviceName}</option>)
                            }
                        </Select>

                        <Button
                            colorScheme="blue"
                            leftIcon={<AddIcon />}
                            mt={6}
                            onClick={handleAddService}
                            variant="ghost"

                        >Add Service</Button>
                        <Spacer/>
                        
                        <FormControl>
                            <FormLabel htmlFor='date'>Click to Select a Date</FormLabel>
                            <DatePickerComponent
                                pickedDate={startDate}
                                setPickedDate={setStartDate}
                            />
                        </FormControl>

                        <Box>
                            <FormLabel htmlFor='notes'>Notes</FormLabel>
                            <Textarea id='notes' onChange={e => {
                                setNotes(e.target.value);
                            }}/>
                        </Box>
                    </Stack>
                </DrawerBody>
                <Divider/>
                <DrawerFooter borderTopWidth='1px'>
                    <Button mr={3} onClick={onCloseFollowupModal} variant='outline'>
                    Cancel
                    </Button>
                
                    <Button
                        colorScheme='green'
                        isLoading={isInFlight}
                        leftIcon={<i className="fas fa-save"></i>}
                        mr={3}
                        onClick={handleFollowupClick}
                    >
                     Save Followup
                    </Button>
                </DrawerFooter>
            </DrawerContent>
    );

};

export default AppointmentFollowup;

