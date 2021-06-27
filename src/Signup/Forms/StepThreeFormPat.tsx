import type { FC, ReactElement } from 'react';

import React from 'react';
import { useState } from 'react';
import {
    FormControl,
    FormHelperText,
    FormLabel,
    HStack,
    Input,
    Radio,
    RadioGroup,
    Select,
    Switch,
} from '@chakra-ui/react';

type stepThreeFormProps = {
    setBirthDate: React.Dispatch<React.SetStateAction<Date>>,
    setHeight: React.Dispatch<React.SetStateAction<number>>,
    setWeight: React.Dispatch<React.SetStateAction<number>>,
    setGender: React.Dispatch<React.SetStateAction<number>>,
    setActivityLvl: React.Dispatch<React.SetStateAction<number>>,
    setSmoker: React.Dispatch<React.SetStateAction<boolean>>,
    height: number,
    weight: number,
    gender: number,
    activityLvl: number,
    smoker: boolean,
}

const StepThreeForm: FC<stepThreeFormProps> =
({
    setBirthDate, setHeight, setWeight, setGender, setActivityLvl, setSmoker,
    height, weight, gender, activityLvl, smoker,
}): ReactElement => {

    const [birthDateTemp, setBirthDateTemp] = useState('');

    const stringToDate = (date: string): Date => {
        const values = date.split('.');
        return new Date(parseInt(values[2]), parseInt(values[1])-1, parseInt(values[0]));
    };

    return (
        <div>
            <FormControl>
                <FormLabel>Date of Birth</FormLabel>
                <Input
                    onBlur={() => {
                        setBirthDate(stringToDate(birthDateTemp));
                    }}
                    onChange={event => {
                        setBirthDateTemp(event.target.value);
                    }}
                    placeholder="dd.mm.yyyy"
                    type="text"
                    value={birthDateTemp}
                />
                <FormHelperText>Please enter your date of birth in the specified format dd.mm.yyyy</FormHelperText>
            </FormControl>
            <FormControl mt={6}>
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
            <FormControl mt={6}>
                <FormLabel>Height (cm)</FormLabel>
                <Input
                    onChange={event => {
                        setHeight(parseInt(event.target.value));
                    }}
                    type="number"
                    value={height}
                />
            </FormControl>
            <FormControl mt={6}>
                <FormLabel>Weight (kg)</FormLabel>
                <Input
                    onChange={event => {
                        setWeight(parseInt(event.target.value));
                    }}
                    type="number"
                    value={weight}
                />
            </FormControl>
            <FormControl my={6}>
                <FormLabel>Activity Level</FormLabel>
                <RadioGroup
                    onChange={event => {
                        setActivityLvl(parseInt(event));
                    }}
                    value={activityLvl.toString()}
                >
                    <HStack spacing="24px">
                        <Radio value="0">Very Low</Radio>
                        <Radio value="1">Low</Radio>
                        <Radio value="2">Medium</Radio>
                        <Radio value="3">High</Radio>
                        <Radio value="4">Very High</Radio>
                    </HStack>
                </RadioGroup>
            </FormControl>
            <FormControl my={6}>
                <FormLabel>Smoker</FormLabel>
                <Switch
                    checked={smoker}
                    onChange={event => {
                        setSmoker(event.target.checked);
                    }}
                />
            </FormControl>
        </div>
    );
};

export default StepThreeForm;
