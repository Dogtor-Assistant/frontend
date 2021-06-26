import type { FC, ReactElement } from 'react';

import React, { useState } from 'react';
import {
    Center,
    Heading,
    Text,
    VStack,
} from '@chakra-ui/react';

import { graphql } from 'relay-runtime';
import { useMutation } from 'react-relay';

import StepFourForm from './Forms/StepFourFormDoc';
import StepOneForm from './Forms/StepOneForm';
import StepThreeForm from './Forms/StepThreeFormPat';
import StepTwoForm from './Forms/StepTwoFormPat';
import Nav from './Nav';

const Patient: FC = (): ReactElement => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [step, setStep] = useState(1);

    const [city, setCity] = useState('');
    const [streetName, setStreetName] = useState('');
    const [streetNumber, setStreetNumber] = useState(NaN);
    const [zipCode, setZipCode] = useState(NaN);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [insurance, setInsurance] = useState(0);

    const [birthDate, setBirthDate] = useState(new Date());
    const [height, setHeight] = useState(NaN);
    const [weight, setWeight] = useState(NaN);
    const [gender, setGender] = useState(-1);
    const [activityLvl, setActivityLvl] = useState(2);
    const [smoker, setSmoker] = useState(false);

    const emptyStrArray: string[] = [];
    const [allergies, setAllergies] = useState(emptyStrArray);
    const [medConditions, setMedConditions] = useState(emptyStrArray);
    const [medications, setMedications] = useState(emptyStrArray);
    const [surgeries, setSurgeries] = useState(emptyStrArray);

    /*const [commit] = useMutation<DoctorUserCreateMutation>(graphql`
    mutation DoctorUserCreateMutation($input: UserDoctorInput!){
        createUserDoctor(input: $input) {
            id
        }
    }
    `);*/

    const next = (): void => {
        setStep(prevStep => prevStep + 1);
    };
        
    const back = (): void => {
        setStep(prevStep => prevStep - 1);
    };

    const submit = (): void => {
        /*commit({
            onCompleted(data) {
                // TODO: Redirect user to landing user page + token
                console.log(data);
            },
            onError(error) {
                // TODO: Handle error function to return proper error help
                console.log(error);
            },
            variables: {
                'input': {
                    'address': {
                        'city': city,
                        'streetName': streetName,
                        'streetNumber': streetNumber,
                        'zipCode': zipCode,
                    },
                    'email': email,
                    'firstName': firstName,
                    'lastName': lastName,
                    'offeredSlots': slots,
                    'password': password,
                    'phoneNumber': phoneNumber,
                    'specialities': specialities,
                    'webpage': webpage,
                },
            },
        });*/
    };

    switch (step) {
    case 1:
        return (
            <Center>
                <VStack>
                    <Heading>Patient Registration</Heading>
                    <Heading size="md">Step 1</Heading>
                    <StepOneForm
                        email={email} firstName={firstName}
                        lastName={lastName} password={password}
                        setEmail={setEmail} setFirstName={setFirstName}
                        setLastName={setLastName} setPassword={setPassword}

                    />
                    <Nav back={back} lim={4} next={next} step={step} submit={submit}/>
                </VStack>
            </Center>
        );
        
    case 2:
        return (
            <Center>
                <VStack>
                    <Heading>Patient Registration</Heading>
                    <Heading size="md">Step 2</Heading>
                    <StepTwoForm
                        city={city} insurance={insurance}
                        phoneNumber={phoneNumber} setCity={setCity}
                        setInsurance={setInsurance} setPhoneNumber={setPhoneNumber}
                        setStreetName={setStreetName} setStreetNumber={setStreetNumber}
                        setZipCode={setZipCode} streetName={streetName}
                        streetNumber={streetNumber} zipCode={zipCode}

                    />
                    <Nav back={back} lim={4} next={next} step={step} submit={submit}/>
                </VStack>
            </Center>
        );
            
    case 3:
        return (
            <Center>
                <VStack>
                    <Heading>Patient Registration</Heading>
                    <Heading size="md">Step 3</Heading>
                    <StepThreeForm
                        activityLvl={activityLvl}
                        gender={gender} height={height}
                        setActivityLvl={setActivityLvl} setBirthDate={setBirthDate}
                        setGender={setGender} setHeight={setHeight} setSmoker={setSmoker}
                        setWeight={setWeight} smoker={smoker} weight={weight}
                    />
                    <Nav back={back} lim={4} next={next} step={step} submit={submit}/>
                </VStack>
            </Center>
        );
    
    case 4:
        return (
            <Center>
                <VStack>
                    <Heading>Patient Registration</Heading>
                    <Heading size="md">Step 4</Heading>
                    <StepFourForm
                        allergies={allergies} medConditions={medConditions}
                        medications={medications} setAllergies={setAllergies}
                        setMedConditions={setMedConditions} setMedications={setMedications}
                        setSurgeries={setSurgeries} surgeries={surgeries}
                    />
                    <Nav back={back} lim={4} next={next} step={step} submit={submit}/>
                </VStack>
            </Center>
        );

    default:
        return (
            <Center>
                <Heading>Patient Registration</Heading>
                <Text>Error 500</Text>
            </Center>
        );
    }
};

export default Patient;
