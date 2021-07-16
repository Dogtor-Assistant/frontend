import type { ActivityLevel, PatientUserCreateMutation } from './__generated__/PatientUserCreateMutation.graphql';
import type { Gender, Insurance } from './__generated__/PatientUserCreateMutation.graphql';
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

import { useMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import LoadingIndicator from 'LoadingIndicator';
import StepFourForm from './Forms/StepFourFormPat';
import StepOneForm from './Forms/StepOneForm';
import StepThreeForm from './Forms/StepThreeFormPat';
import StepTwoForm from './Forms/StepTwoFormPat';
import Nav from './Nav';

import axios from 'axios';
import { GEOLOC_KEY } from 'utils/constants';

const Patient: FC = (): ReactElement => {
    const history = useHistory();
    
    const [validFormOne, setValidFormOne] = useState(false);
    const [validFormTwo, setValidFormTwo] = useState(false);
    const [validFormThree, setValidFormThree] = useState(false);

    const [alertEmail, setAlertEmail] = useState(false);
    const [alertPhone, setAlertPhone] = useState(false);

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
    const [activityLvl, setActivityLvl] = useState(-1);
    const [smoker, setSmoker] = useState(false);

    const emptyStrArray: string[] = [];
    const [allergies, setAllergies] = useState(emptyStrArray);
    const [medConditions, setMedConditions] = useState(emptyStrArray);
    const [medications, setMedications] = useState(emptyStrArray);
    const [surgeries, setSurgeries] = useState(emptyStrArray);

    const activityLvlArr: ActivityLevel[] = ['VeryLow', 'Low', 'Medium', 'High', 'VeryHigh'];
    const genderArr: Gender[] = ['Female', 'Male', 'TransgenderFemale', 'TransgenderMale', 'NonBinary'];
    const insuranceArr: Insurance[] = ['Public', 'Private'];

    const [commit, isInFlight] = useMutation<PatientUserCreateMutation>(graphql`
    mutation PatientUserCreateMutation($input: UserPatientInput!){
        createUserPatient(input: $input) {
            id
        }
    }
    `);

    if (isInFlight) {
        return <LoadingIndicator />;
    }

    const next = (): void => {
        setStep(prevStep => prevStep + 1);
    };
        
    const back = (): void => {
        setStep(prevStep => prevStep - 1);
    };

    const handleError = (err: PayloadError[]) => {
        // Check for duplicate key errors
        if (err[0].message.includes('email')) setAlertEmail(true);
        else if (err[0].message.includes('phoneNumber')) setAlertPhone(true);
        else setStep(-1);
    };

    const submit = (): void => {
        setAlertEmail(false);
        setAlertPhone(false);

        // Get lat & lon from given address
        const url = `http://open.mapquestapi.com/geocoding/v1/address?key=${GEOLOC_KEY}`;
        let lat = 0;
        let lon = 0;

        axios.post(url, {
            'location': `${streetNumber} ${streetName}, ${city}`,
            'options': {
                'thumbMaps': false,
            },
        }).
            then(function(response) {
                lat = response.data.results[0].locations[0].latLng.lat;
                lon = response.data.results[0].locations[0].latLng.lng;

                commit({
                    onCompleted(data, err) {
                        if (err) handleError(err);
                        else history.push('/signup/success');
                    },
                    variables: {
                        'input': {
                            'activityLvl': activityLvlArr[activityLvl],
                            'address': {
                                'city': city,
                                'lat': lat,
                                'lon': lon,
                                'streetName': streetName,
                                'streetNumber': streetNumber,
                                'zipCode': zipCode,
                            },
                            'allergies': allergies,
                            'birthDate': birthDate.toISOString(),
                            'email': email,
                            'firstName': firstName,
                            'gender': genderArr[gender],
                            'height': height,
                            'insurance': insuranceArr[insurance],
                            'lastName': lastName,
                            'medConditions': medConditions,
                            'medications': medications,
                            'password': password,
                            'phoneNumber': phoneNumber,
                            'smoker': smoker,
                            'surgeries': surgeries,
                            'weight': weight,
                        },
                    },
                });
            }).
            catch(() => setStep(-1));
        
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
                        setValidForm={setValidFormOne}
                    />
                    <Nav back={back} lim={4} next={next} step={step} submit={submit} valid={validFormOne}/>
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
                        setValidForm={setValidFormTwo} setZipCode={setZipCode}
                        streetName={streetName} streetNumber={streetNumber}
                        zipCode={zipCode}
                    />
                    <Nav back={back} lim={4} next={next} step={step} submit={submit} valid={validFormTwo}/>
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
                        setValidForm={setValidFormThree} setWeight={setWeight} smoker={smoker}
                        weight={weight}
                    />
                    <Nav back={back} lim={4} next={next} step={step} submit={submit} valid={validFormThree}/>
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
                    <Nav back={back} lim={4} next={next} step={step} submit={submit} valid={true}/>
                    { alertEmail &&
                    <Alert status="error">
                        <AlertIcon />
                        The email you entered is taken!
                    </Alert>
                    }
                    { alertPhone &&
                    <Alert status="error">
                        <AlertIcon />
                        The phone number you entered is taken!
                    </Alert>
                    }
                </VStack>
            </Center>
        );

    default:
        return (
            <Center>
                <VStack>
                    <Heading>Patient Registration</Heading>
                    <Text>Error 500 - Sorry something went wrong</Text>
                    <Text>Please try again later!</Text>
                </VStack>
            </Center>
        );
    }
};

export default Patient;
