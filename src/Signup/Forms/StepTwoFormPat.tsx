import type { FC, ReactElement } from 'react';

import React from 'react';
import {
    FormControl,
    FormLabel,
    HStack,
    Input,
    Radio,
    RadioGroup,
} from '@chakra-ui/react';

type stepTwoFormProps = {
    city: string,
    phoneNumber: string,
    setCity: React.Dispatch<React.SetStateAction<string>>,
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>,
    setStreetName: React.Dispatch<React.SetStateAction<string>>,
    setStreetNumber: React.Dispatch<React.SetStateAction<number>>,
    setInsurance: React.Dispatch<React.SetStateAction<number>>,
    setZipCode: React.Dispatch<React.SetStateAction<number>>,
    streetName: string,
    streetNumber: number,
    insurance: number,
    zipCode: number,
};

const StepTwoForm: FC<stepTwoFormProps> =
({
    city, phoneNumber, setCity, setPhoneNumber, setStreetName,
    setStreetNumber, setInsurance, setZipCode, streetName,
    streetNumber, insurance, zipCode,
}): ReactElement => {
    return (
        <div>
            <FormControl>
                <FormLabel>Street Name</FormLabel>
                <Input
                    onChange={event => {
                        setStreetName(event.target.value);
                    }}
                    type="text"
                    value={streetName}
                />
            </FormControl>
            <FormControl mt={6}>
                <FormLabel>Street Number</FormLabel>
                <Input
                    onChange={event => {
                        setStreetNumber(parseInt(event.target.value));
                    }}
                    type="number"
                    value={streetNumber}
                />
            </FormControl>
            <FormControl mt={6}>
                <FormLabel>ZIP Code</FormLabel>
                <Input
                    onChange={event => {
                        setZipCode(parseInt(event.target.value));
                    }}
                    type="number"
                    value={zipCode}
                />
            </FormControl>
            <FormControl my={6}>
                <FormLabel>City</FormLabel>
                <Input
                    onChange={event => {
                        setCity(event.target.value);
                    }}
                    type="text"
                    value={city}
                />
            </FormControl>
            <FormControl my={6}>
                <FormLabel>Phone Number</FormLabel>
                <Input
                    onChange={event => {
                        setPhoneNumber(event.target.value);
                    }}
                    type="text"
                    value={phoneNumber}
                />
            </FormControl>
            <FormControl my={6}>
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
