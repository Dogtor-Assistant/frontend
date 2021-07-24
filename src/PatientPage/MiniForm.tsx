import type { FC, ReactElement } from 'react';

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {
    FormControl,
    FormHelperText,
    FormLabel,
    HStack,
    Input,
    Radio,
    RadioGroup,
    Select,
} from '@chakra-ui/react';

import validator from 'validator';

type miniFormProps = {
    setBirthDate: React.Dispatch<React.SetStateAction<Date>>,
    setGender: React.Dispatch<React.SetStateAction<number>>,
    setInsurance: React.Dispatch<React.SetStateAction<number>>,
    setValidForm: React.Dispatch<React.SetStateAction<boolean>>,
    gender: number,
    insurance: number,
}

const MiniForm: FC<miniFormProps> =
({
    setBirthDate, setGender, setInsurance, setValidForm,
    gender, insurance,
}): ReactElement => {
    const [birthDateTemp, setBirthDateTemp] = useState('');
    const [birthDateError, setBirthDateError] = useState(false);

    useEffect(() => {
        if (birthDateTemp !== '')
            setValidForm(validator.isDate(birthDateTemp, {
                format: 'DD/MM/YYYY',
                strictMode: true,
            }) && gender !== -1);
        else setValidForm(false);
    }, [birthDateTemp, gender, setValidForm]);

    const stringToDate = (date: string): Date => {
        const values = date.split('/');
        return new Date(parseInt(values[2]), parseInt(values[1])-1, parseInt(values[0]));
    };

    return (
        <div>
            <FormControl isRequired mb={6}>
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
            <FormControl isRequired mb={6}>
                <FormLabel>Date of Birth</FormLabel>
                <Input
                    onBlur={() => {
                        if (birthDateTemp !== '')
                        {
                            setBirthDateError(!validator.isDate(birthDateTemp, {
                                format: 'DD/MM/YYYY',
                                strictMode: true,
                            }));
                            setBirthDate(stringToDate(birthDateTemp));
                        }
                    }}
                    onChange={event => {
                        setBirthDateTemp(event.target.value);
                    }}
                    placeholder="dd/mm/yyyy"
                    type="text"
                    value={birthDateTemp}
                />
                { birthDateError &&
                <FormHelperText color="red.200">
                    Please enter your date of birth in the specified format dd/mm/yyyy
                </FormHelperText>
                }
            </FormControl >
            <FormControl isRequired mb={6}>
                <FormLabel>Gender</FormLabel>
                <Select
                    onChange={event => {
                        if (!event.target.value) setGender(-1);
                        else setGender(parseInt(event.target.value));
                    }}
                    placeholder="Gender"
                    value={gender}
                >
                    <option value="0">Female</option>
                    <option value="1">Male</option>
                    <option value="2">Transgender Female</option>
                    <option value="3">Transgender Male</option>
                    <option value="4">Non Binary</option>
                </Select>
            </FormControl>
        </div>
    );
};

export default MiniForm;
