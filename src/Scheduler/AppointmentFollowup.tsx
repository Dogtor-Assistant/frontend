import type { ActivityLevel, Gender } from '../Signup/__generated__/PatientUserCreateMutation.graphql';
import type { AppointmentFollowupMutation } from './__generated__/AppointmentFollowupMutation.graphql';

import React, { useState } from 'react';
// import DatePicker from 'react-custom-date-picker';
import {
    Box,
    Button,
    Divider,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    FormControl,
    FormHelperText,
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

import DatePicker from '../DatePicker/DatePickerComponent';
import DatePickerComponent from '../DatePicker/DatePickerComponent';
import LoadingIndicator from '../LoadingIndicator';

// import 'react-datepicker/dist/react-datepicker.css';

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

    const [startDate, setStartDate] = useState(new Date());
    const [notes, setNotes] = useState('');
    const [serviceSelected, setServiceSelected] = useState('');
    const [servicesAdded, setServicesAdded] = useState(['']);
    const [services, setServices] = useState(['service1', 'service2']);
    const [commit, isInFlight] = useMutation<AppointmentFollowupMutation>(graphql`
    mutation AppointmentFollowupMutation($followupInput: FollowupInput!){
        assignFollowup(followupInput: $followupInput)
        }
    `);
    
    console.log(startDate.toISOString());
    const handleFollowupClick = (): void => {
        const result = confirm('Confirm to assign a follow up!');
        if (result) {
            commit({
                onCompleted({ assignFollowup }) {
                    if(assignFollowup && onClose && onCloseFollowupModal) {
                        
                        toast({
                            description: 'A followup has been saved.',
                            duration: 9000,
                            isClosable: true,
                            status: 'success',
                            title: 'Successfully.',
                        });
                        onClose();
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
                        doctorNotes: notes, //done
                        /** here goes the input */
                        doctorRef: '',
                        patientRef: event.patient.id, //done
                        services: [{
                            serviceId:'',
                            serviceName: '',
                        }],
                        suggestedDate: startDate.toISOString(),
                    },
                },
            });
        }
    };

    const handleAddService = () => {
        if (serviceSelected === '') {
            return;
        }
        const newServicesAdded = [...servicesAdded.filter(s => s), serviceSelected && serviceSelected];
        setServicesAdded(newServicesAdded);
        setServiceSelected('');
    };

    const handleRemoveService = (i: number) => {
        const removedArr = [...servicesAdded].filter(s => servicesAdded.indexOf(s) !== i);
        setServicesAdded(removedArr);
    };
    return (
        isInFlight ? <LoadingIndicator /> :
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create new followup</DrawerHeader>
                <DrawerBody>
                    <Stack spacing='24px'>

                        <Box>
                            <FormLabel htmlFor='doctor'>Select Doctor</FormLabel>
                            <Select defaultValue='segun' id='doctor'>
                                <option value='segun'>Segun Adebayo</option>
                                <option value='kola'>Kola Tioluwani</option>
                            </Select>
                        </Box>
                        <Spacer/>

                        {servicesAdded[0] !== '' && servicesAdded.map((s, i) => {
                            return (
                                <Flex alignItems={'center'} key={i} mt={6} pl={4}>
                                    <Text>{s}</Text>
                                    <Spacer />
                                    <IconButton
                                        aria-label="Delete Service"
                                        colorScheme="blue"
                                        icon={<DeleteIcon />}
                                        marginEnd="0"
                                        onClick={() => handleRemoveService(i)}
                                        textAlign="center"
                                        variant="solid"
                                    >
                                    </IconButton>
                                </Flex>
                            );
                        })}
                        <FormLabel>Provided Services</FormLabel>

                        <Select
                            id='services'
                            onChange={event => {
                                if (!event.target.value) setServiceSelected('');
                                else setServiceSelected(event.target.value);
                            }}
                            placeholder="Service" >
                            {services.map((service, idx) => <option key={idx} value={service}>{service}</option>)}
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

