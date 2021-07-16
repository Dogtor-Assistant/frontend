import type { Menu_doctor$key } from './__generated__/Menu_doctor.graphql';
import type { FC, ReactElement } from 'react';
import type { PayloadError } from 'relay-runtime';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Alert,
    AlertIcon,
    Center,
    Heading,
    Text,
    VStack,
} from '@chakra-ui/react';

import { useFragment, useMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import LoadingIndicator from 'LoadingIndicator';
import Agreement from './Forms/Agreement';
import AppointmentOverview from './Forms/AppointmentOverview/MainOverview';
import SelectDate from './Forms/SelectDate';
import SelectServices from './Forms/SelectServices';
import Nav from './Nav';

export type Insurance = 'Private' | 'Public';
type Props = { Doctor:Menu_doctor$key };

export type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'

const Patient: FC = (props:Props): ReactElement => {
    const history = useHistory();
    
    const [validSelectDate, setValidSelectDate] = useState(false);
    const [validSelectService, setValidSelectService] = useState(false);
    const [validAgreement, setValidAgreement] = useState(false);
    const [validAO, setValidAO] = useState(false);

    const [alertServicesInsurance, setAlertServicesInsurance] = useState(false);

    const [doctorId] = useState('');
    const [doctorName] = useState('');
    const [expectedDuration, setExpectedDuration] = useState(0);
    const [expectedTime, setExpectedTime] = useState(new Date());
    const [insurance, setInsurance] = useState(0);
    const [patientNotes, setPatientNotes] = useState('');
    const [selectedServices, setSelectedServices] = useState(['']);
    const [shareData, setShareData] = useState(false);
    
    const [step, setStep] = useState(1);

    const [possibleServices] = useState(new Array<string>());
    const [serviceInsurance] = useState([0]);
    const [serviceDuration] = useState([0]);
    const [doctorHours] = useState(new Array<{day: Day, slotStart: number, slotStop: number}>());
    const [blockedAppointments] = useState([]);

    const insuranceArr: Insurance[] = ['Public', 'Private'];
    const dayArr: Day[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const doctor=useFragment(
        graphql`
            fragment Menu_doctor on Doctor {
                firstname
                topServices{
                    id
                }
            }
        `,
        props.Doctor,
    );

    /*const [commit, isInFlight] = useMutation<AppointmentQuery>(graphql`
    mutation MenuAppointmentQuery ($input: UserPatientInput!){
        createAppointment(input: $input) {
            id
        }
    }
    `);

    if (isInFlight) {
        return <LoadingIndicator />;
    }*/

    const next = (): void => {
        setStep(prevStep => prevStep + 1);
    };
        
    const back = (): void => {
        setStep(prevStep => prevStep - 1);
    };

    const overview = (): void => {
        setStep(prevStep => prevStep + 1);
    };

    const handleError = (err: PayloadError[]) => {
        // Check for services that are not covered by insurance
        if (err[0].message.includes('services')) setAlertServicesInsurance(true);
        else setStep(-1);
    };

    const submit = (): void => {
        setAlertServicesInsurance(false);
        commit({
            onCompleted(data, err) {
                if (err) handleError(err);
                else history.push('/bookappointment/confirmation');
            },
            variables: {
                'input': {
                    'blockedAppointments': blockedAppointments,
                    'doctorHours': doctorHours,
                    'doctorRef': {
                        'doctorId': doctorId,
                        'doctorName': doctorName,
                    },
                    'expectedDuration' : expectedDuration,
                    'expectedTime' : expectedTime,
                    'insurance' : insurance,
                    'patientNotes': patientNotes,
                    'possibleServices': possibleServices,
                    'selectedServices' : selectedServices,
                    'serviceDuration': serviceDuration,
                    'serviceInsurance': serviceInsurance,
                    'shareData': shareData,
                },
            },
        });
    };

    switch (step) {
    case 1:
        return (
            <Center>
                <VStack>
                    <Heading>Book Appointment</Heading>
                    <Heading size="md">Select the services</Heading>
                    <SelectServices
                        expectedDuration={expectedDuration} insurance={insurance}
                        possibleServices={possibleServices} selectedServices={selectedServices}
                        serviceDuration={serviceDuration} serviceInsurance={serviceInsurance}
                        setExpectedDuration={setExpectedDuration} setSelectedServices={setSelectedServices}
                        setValidForm={setValidSelectService}
                    />
                    <Nav
                        back={back}
                        lim={4}
                        next={next}
                        overview={overview}
                        step={step}
                        submit={submit}
                        valid={validSelectService}
                    />
                </VStack>
            </Center>
        );
        
    case 2:
        return (
            <Center>
                <VStack>
                    <Heading>Book Appointment</Heading>
                    <Heading size="md">Select a Date</Heading>
                    <SelectDate
                        blockedAppointments={blockedAppointments} doctorHours={doctorHours}
                        expectedDuration={expectedDuration}
                        expectedTime={expectedTime} setExpectedTime={setExpectedTime}
                        setValidForm={setValidSelectDate}
                    />
                    <Nav
                        back={back}
                        lim={4}
                        next={next}
                        overview={overview}
                        step={step}
                        submit={submit}
                        valid={validSelectDate}
                    />
                    { alertServicesInsurance &&
                    <Alert status="error">
                        <AlertIcon />
                        The services you selected are not covered by your insurance!
                    </Alert>
                    }
                </VStack>
            </Center>
        );
            
    case 3:
        return (
            <Center>
                <VStack>
                    <Heading>Book Appointment</Heading>
                    <Heading size="md">Agreement to share your Information</Heading>
                    <Agreement
                        setPatientNotes={setPatientNotes} setShareData={setShareData}
                        setValidForm={setValidAgreement} shareData={shareData}
                    />
                    <Nav
                        back={back}
                        lim={4}
                        next={next}
                        overview={overview}
                        step={step}
                        submit={submit}
                        valid={validAgreement}
                    />
                </VStack>
            </Center>
        );
    
    case 4:
        return (
            <Center>
                <VStack>
                    <Heading>Book Appointment</Heading>
                    <Heading size="md">Appointment Overview</Heading>
                    <AppointmentOverview
                        blockedAppointments={blockedAppointments} doctorHours={doctorHours}
                        doctorName={doctorName} expectedDuration={expectedDuration}
                        expectedTime={expectedTime} insurance={insurance}
                        patientNotes={patientNotes} possibleServices={possibleServices}
                        selectedServices={selectedServices} serviceDuration={serviceDuration}
                        serviceInsurance={serviceInsurance} setExpectedDuration={setExpectedDuration}
                        setExpectedTime={setExpectedTime} setInsurance={setInsurance}
                        setPatientNotes={setPatientNotes} setSelectedServices={setSelectedServices}
                        setShareData={setShareData} setValidForm={setValidAO}
                        shareData={shareData}
                    />
                    <Nav
                        back={back}
                        lim={4}
                        next={next}
                        overview={overview}
                        step={step}
                        submit={submit}
                        valid={validAO}
                    />
                </VStack>
            </Center>
        );

    default:
        return (
            <Center>
                <VStack>
                    <Heading>Book Appointment</Heading>
                    <Text>Error 500 - Sorry something went wrong</Text>
                    <Text>Please try again later!</Text>
                </VStack>
            </Center>
        );
    }
};

export default Patient;
