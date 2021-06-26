import type { DoctorUserCreateMutation, Weekday } from './__generated__/DoctorUserCreateMutation.graphql';
import type { FC, ReactElement } from 'react';

import React from 'react';
import { useState } from 'react';
import {
    Button,
    Center,
    Heading,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

import { useMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import StepOneForm from './Forms/StepOneFormDoc';
import StepThreeForm from './Forms/StepThreeFormDoc';
import StepTwoForm from './Forms/StepTwoFormDoc';

const Doctor: FC = (): ReactElement => {
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
    const [webpage, setWebpage] = useState('');

    const emptySlots: { day: Weekday, slotStart: string, slotStop: string }[] = [];
    const [slots, setSlots] = useState(emptySlots);
    const emptySpecial: string[] = [];
    const [specialities, setSpecialities] = useState(emptySpecial);

    const [commit] = useMutation<DoctorUserCreateMutation>(graphql`
    mutation DoctorUserCreateMutation($input: UserDoctorInput!){
        createUserDoctor(input: $input) {
            id
        }
    }
    `);

    const next = (): void => {
        setStep(prevStep => prevStep + 1);
    };
      
    const back = (): void => {
        setStep(prevStep => prevStep - 1);
    };

    const submit = (): void => {
        commit({
            onCompleted(data) {
                console.log(data);
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
        });
    };

    switch (step) {
    case 1:
        return (
            <Center>
                <VStack>
                    <Heading>Doctor Registration</Heading>
                    <Heading size="md">Step 1</Heading>
                    <StepOneForm
                        email={email} firstName={firstName}
                        lastName={lastName} password={password}
                        setEmail={setEmail} setFirstName={setFirstName}
                        setLastName={setLastName} setPassword={setPassword}

                    />
                    <Nav back={back} next={next} step={step} submit={submit}/>
                </VStack>
            </Center>
        );
        
    case 2:
        return (
            <Center>
                <VStack>
                    <Heading>Doctor Registration</Heading>
                    <Heading size="md">Step 2</Heading>
                    <StepTwoForm
                        city={city} phoneNumber={phoneNumber}
                        setCity={setCity} setPhoneNumber={setPhoneNumber}
                        setStreetName={setStreetName} setStreetNumber={setStreetNumber}
                        setWebpage={setWebpage} setZipCode={setZipCode}
                        streetName={streetName} streetNumber={streetNumber}
                        webpage={webpage} zipCode={zipCode}

                    />
                    <Nav back={back} next={next} step={step} submit={submit}/>
                </VStack>
            </Center>
        );
          
    case 3:
        return (
            <Center>
                <VStack>
                    <Heading>Doctor Registration</Heading>
                    <Heading size="md">Step 3</Heading>
                    <StepThreeForm
                        setSlots={setSlots} setSpecialities={setSpecialities}
                        slots={slots} specialities={specialities}
                    />
                    <Nav back={back} next={next} step={step} submit={submit}/>
                </VStack>
            </Center>
        );

    default:
        return (
            <Center>
                <Heading>Doctor Registration</Heading>
                <Text>Error 500</Text>
            </Center>
        );
    }
};

const Nav: FC<{ back: () => void, next: () => void, step: number, submit: () => void }> =
({ back, next, step, submit }): ReactElement => {
    return (
        <Stack direction="row" spacing={4}>
            { step > 1 &&
            <Button
                colorScheme="blue"
                leftIcon={<ChevronLeftIcon />}
                onClick={back}
                variant="outline"
            >
                Back
            </Button>
            }
            { step < 3 &&
            <Button
                colorScheme="blue"
                onClick={next}
                rightIcon={<ChevronRightIcon />}
                variant="outline">
                Next
            </Button>
            }
            {step === 3 &&
            <Button
                colorScheme="blue"
                onClick={submit}
                variant="solid">
                Submit
            </Button>
            }
        </Stack>
    );
};

export default Doctor;
