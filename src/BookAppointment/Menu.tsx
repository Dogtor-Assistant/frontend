import type { Menu_doctor$key } from './__generated__/Menu_doctor.graphql';
import type { MenuMutation } from'./__generated__/MenuMutation.graphql';
import type { PayloadError } from 'relay-runtime';

import React, { useState } from 'react';
import { render } from 'react-dom';
import { Redirect } from 'react-router-dom';
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

import { useIsPatient, usePatientInsurance } from 'user';

export type Insurance = 'Private' | 'Public';
type Props = { Doctor:Menu_doctor$key };

export type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'

function Menu(this: any, props:Props) {
    const insuranceArr: Insurance[] = ['Public', 'Private'];
    const dayArr: Day[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const history = useHistory();
    
    const [validSelectDate, setValidSelectDate] = useState(false);
    const [validSelectService, setValidSelectService] = useState(false);
    const [validAgreement, setValidAgreement] = useState(false);
    const [validAO, setValidAO] = useState(false);

    const [alertServicesInsurance, setAlertServicesInsurance] = useState(false);

    const [expectedDuration, setExpectedDuration] = useState(0);
    const [expectedTime, setExpectedTime] = useState(new Date());
    const [insurance, setInsurance] = useState(insuranceArr[0]);
    const [patientNotes, setPatientNotes] = useState('');
    const [selectedServices, setSelectedServices] = useState(new Array<{
        readonly id: string,
        readonly description: string | null,
        readonly estimatedDuration: number | null,
        readonly name: string,
        readonly privateCovered: boolean | null,
        readonly publicCovered: boolean | null,
    }>());
    const [selectedServicesID, setSelectedServicesID] = useState(new Array<string>());
    const [shareData, setShareData] = useState(false);
    
    const [step, setStep] = useState(1);
    const userLoggedIn = useIsPatient();
    const userInsurance = usePatientInsurance();

    const doctor=useFragment(
        graphql`
            fragment Menu_doctor on Doctor {
                firstname
                lastname
                offeredSlots{
                    day
                    start
                    end
                }
                services{
                    id
                    description
                    estimatedDuration
                    name
                    privateCovered
                    publicCovered
                }
                appointments{
                    isDone 
                    expectedTime{
                        duration
                        start
                    }
                }
            }
        `,
        props.Doctor,
    );

    const [commit, isInFlight] = useMutation<MenuMutation>(graphql`
    mutation MenuMutation ($input: AppointmentInput!){
        createAppointment(input: $input) {
            id
        }
    }
    `);

    /*if (userInsurance !== undefined) {
        if(userInsurance === 'Private' || userInsurance === 'Public') {
            setInsurance(userInsurance);
        }
    }

    /*if (userLoggedIn === false) {
        throw Error ('not logged In');
    }*/

    if (isInFlight) {
        return <LoadingIndicator />;
    }

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
                    'doctorId': doctor.lastname,
                    'expectedDuration' : expectedDuration,
                    'expectedTime' : expectedTime.toDateString(),
                    'insurance' : insurance,
                    'patientNotes': patientNotes,
                    'selectedServices' : selectedServicesID,
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
                        possibleServices={doctor.services} selectedServices={selectedServices}
                        setExpectedDuration={setExpectedDuration} setSelectedServices={setSelectedServices}
                        setSelectedServicesID={setSelectedServicesID} setValidForm={setValidSelectService}
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
                        blockedAppointments={doctor.appointments} currentDate={new Date()}
                        doctorHours={doctor.offeredSlots} expectedDuration={expectedDuration}
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
                        blockedAppointments={doctor.appointments} currentTime={expectedTime}
                        doctorHours={doctor.offeredSlots}
                        doctorName={`Dr. ${ doctor.firstname } ${ doctor.lastname}`} expectedDuration={expectedDuration}
                        expectedTime={expectedTime} insurance={insurance} patientNotes={patientNotes}
                        possibleServices={doctor.services} selectedServices={selectedServices}
                        setExpectedDuration={setExpectedDuration} setExpectedTime={setExpectedTime}
                        setInsurance={setInsurance} setPatientNotes={setPatientNotes}
                        setSelectedServices={setSelectedServices} setSelectedServicesID={setSelectedServicesID}
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
}

export default Menu;
