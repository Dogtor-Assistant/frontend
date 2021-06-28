import type { FC, ReactElement } from 'react';

import { useEffect, useState } from 'react';
import React from 'react';
import {
    FormControl,
    FormHelperText,
    FormLabel,
    HStack,
    Input,
    Radio,
    RadioGroup,
} from '@chakra-ui/react';

import validator from 'validator';

type stepTwoFormProps = {
    city: string,
    phoneNumber: string,
    setCity: React.Dispatch<React.SetStateAction<string>>,
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>,
    setStreetName: React.Dispatch<React.SetStateAction<string>>,
    setStreetNumber: React.Dispatch<React.SetStateAction<number>>,
    setInsurance: React.Dispatch<React.SetStateAction<number>>,
    setZipCode: React.Dispatch<React.SetStateAction<number>>,
    setValidForm: React.Dispatch<React.SetStateAction<boolean>>,
    streetName: string,
    streetNumber: number,
    insurance: number,
    zipCode: number,
};

const StepTwoForm: FC<stepTwoFormProps> =
({
    city, phoneNumber, setCity, setPhoneNumber, setStreetName,
    setStreetNumber, setInsurance, setZipCode, setValidForm,
    streetName, streetNumber, insurance, zipCode,
}): ReactElement => {
    const [streetNameError, setStreetNameError] = useState(false);
    const [streetNumberError, setStreetNumberError] = useState(false);
    const [zipCodeError, setZipCodeError] = useState(false);
    const [cityError, setCityError] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    
    useEffect(() => {
        setValidForm(!(streetName === '') &&
            !isNaN(streetNumber) &&
            !isNaN(zipCode) &&
            !(city === '') &&
            validator.isMobilePhone(phoneNumber, 'any', { strictMode: true }),
        );
    }, [city, phoneNumber, setValidForm, streetName, streetNumber, zipCode]);

    return (
        <div>
            <FormControl isRequired>
                <FormLabel>Street Name</FormLabel>
                <Input
                    autoFocus={true}
                    onBlur={() => {
                        setStreetNameError(streetName === '');
                    }}
                    onChange={event => {
                        setStreetName(event.target.value);
                    }}
                    type="text"
                    value={streetName}
                />
                { streetNameError &&
                <FormHelperText color="red.200">This field is required</FormHelperText>
                }
            </FormControl>
            <FormControl isRequired mt={6}>
                <FormLabel>Street Number</FormLabel>
                <Input
                    onBlur={() => {
                        setStreetNumberError(isNaN(streetNumber));
                    }}
                    onChange={event => {
                        setStreetNumber(parseInt(event.target.value));
                    }}
                    type="number"
                    value={streetNumber}
                />
                { streetNumberError &&
                <FormHelperText color="red.200">This field is required</FormHelperText>
                }
            </FormControl>
            <FormControl isRequired mt={6}>
                <FormLabel>ZIP Code</FormLabel>
                <Input
                    onBlur={() => {
                        setZipCodeError(isNaN(zipCode));
                    }}
                    onChange={event => {
                        setZipCode(parseInt(event.target.value));
                    }}
                    type="number"
                    value={zipCode}
                />
                { zipCodeError &&
                <FormHelperText color="red.200">This field is required</FormHelperText>
                }
            </FormControl>
            <FormControl isRequired my={6}>
                <FormLabel>City</FormLabel>
                <Input
                    onBlur={() => {
                        setCityError(city === '');
                    }}
                    onChange={event => {
                        setCity(event.target.value);
                    }}
                    type="text"
                    value={city}
                />
                { cityError &&
                <FormHelperText color="red.200">This field is required</FormHelperText>
                }
            </FormControl>
            <FormControl isRequired my={6}>
                <FormLabel>Phone Number</FormLabel>
                <Input
                    onBlur={() => {
                        setPhoneNumberError(!validator.isMobilePhone(phoneNumber, 'any', { strictMode: true }));
                    }}
                    onChange={event => {
                        setPhoneNumber(event.target.value);
                    }}
                    type="text"
                    value={phoneNumber}
                />
                { phoneNumberError &&
                <FormHelperText color="red.200">This field should start with + (e.g. +49)</FormHelperText>
                }
            </FormControl>
            <FormControl isRequired my={6}>
                <FormLabel>Insurance</FormLabel>
                <RadioGroup
                    onChange={event => {
                        setInsurance(parseInt(event));
                    }}
                    value={insurance.toString()}
                >
                    <HStack spacing="24px">
                        <Radio value="0">Public</Radio>
                        <Radio value="1">Private</Radio>
                    </HStack>
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default StepTwoForm;
