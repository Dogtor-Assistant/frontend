import type { FC, ReactElement } from 'react';

import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';
import {
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
} from '@chakra-ui/react';

import validator from 'validator';

type stepTwoFormProps = {
    city: string,
    phoneNumber: string,
    setCity: React.Dispatch<React.SetStateAction<string>>,
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>,
    setStreetName: React.Dispatch<React.SetStateAction<string>>,
    setStreetNumber: React.Dispatch<React.SetStateAction<number>>,
    setValidForm: React.Dispatch<React.SetStateAction<boolean>>,
    setWebpage: React.Dispatch<React.SetStateAction<string>>,
    setZipCode: React.Dispatch<React.SetStateAction<number>>,
    streetName: string,
    streetNumber: number,
    webpage: string,
    zipCode: number,
};

const StepTwoForm: FC<stepTwoFormProps> =
({
    city, phoneNumber, setCity, setPhoneNumber, setStreetName,
    setStreetNumber, setValidForm, setWebpage, setZipCode, streetName,
    streetNumber, webpage, zipCode,
}): ReactElement => {
    const [streetNameError, setStreetNameError] = useState(false);
    const [streetNumberError, setStreetNumberError] = useState(false);
    const [zipCodeError, setZipCodeError] = useState(false);
    const [cityError, setCityError] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [webpageError, setWebpageError] = useState(false);
    
    useEffect(() => {
        setValidForm(!(streetName === '') &&
            !isNaN(streetNumber) &&
            !isNaN(zipCode) &&
            !(city === '') &&
            validator.isMobilePhone(phoneNumber, 'any', { strictMode: true }) &&
            validator.isURL(webpage, {
                protocols: ['http', 'https'],
                require_host: true,
                require_protocol: true,
            }));
    }, [city, phoneNumber, setValidForm, streetName, streetNumber, webpage, zipCode]);

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
            <FormControl my={6}>
                <FormLabel>Webpage</FormLabel>
                <Input
                    onBlur={() => {
                        setWebpageError(!validator.isURL(webpage, {
                            protocols: ['http', 'https'],
                            require_host: true,
                            require_protocol: true,
                        }));
                    }}
                    onChange={event => {
                        setWebpage(event.target.value);
                    }}
                    type="url   "
                    value={webpage}
                />
                { webpageError &&
                <FormHelperText color="red.200">This field should start with protocol (e.g. https://)</FormHelperText>
                }
            </FormControl>
        </div>
    );
};

export default StepTwoForm;
