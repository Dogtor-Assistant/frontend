import type { FC, ReactElement } from 'react';

import { useState } from 'react';
import React from 'react';
import { useEffect } from 'react';
import {
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
} from '@chakra-ui/react';

import validator from 'validator';

type stepOneFormProps = {
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setFirstName: React.Dispatch<React.SetStateAction<string>>,
    setLastName: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    setValidForm: React.Dispatch<React.SetStateAction<boolean>>,
}
const StepOneForm: FC<stepOneFormProps> =
({
    email, firstName, lastName, password,
    setEmail, setFirstName, setLastName, setPassword, setValidForm,
}): ReactElement => {
    const [emailError, setEmailError] = useState(false);
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    
    useEffect(() => {
        setValidForm(validator.isEmail(email) &&
            !(firstName === '') &&
            !(lastName === '') &&
            validator.isStrongPassword(password,
                {
                    minLength: 6,
                    minLowercase: 0,
                    minNumbers: 0,
                    minSymbols: 0,
                    minUppercase: 0,
                }));
    }, [email, firstName, lastName, password, setValidForm]);

    return (
        <div>
            <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    autoFocus={true}
                    onBlur={() => {
                        setEmailError(!validator.isEmail(email));
                    }}
                    onChange={event => {
                        setEmail(event.target.value);
                    }}
                    type="text"
                    value={email}
                />
                { emailError &&
                <FormHelperText color="red.200">Please enter a valid email</FormHelperText>
                }
            </FormControl>
            <FormControl isRequired mt={6}>
                <FormLabel>First Name</FormLabel>
                <Input
                    onBlur={() => {
                        setFirstNameError(firstName === '');
                    }}
                    onChange={event => {
                        setFirstName(event.target.value);
                    }}
                    type="text"
                    value={firstName}
                />
                { firstNameError &&
                <FormHelperText color="red.200">This field is required</FormHelperText>
                }
            </FormControl>
            <FormControl isRequired mt={6}>
                <FormLabel>Last Name</FormLabel>
                <Input
                    onBlur={() => {
                        setLastNameError(lastName === '');
                    }}
                    onChange={event => {
                        setLastName(event.target.value);
                    }}
                    type="text"
                    value={lastName}
                />
                { lastNameError &&
                <FormHelperText color="red.200">This field is required</FormHelperText>
                }
            </FormControl>
            <FormControl isRequired my={6}>
                <FormLabel>Password</FormLabel>
                <Input
                    onBlur={() => {
                        setPasswordError(!validator.isStrongPassword(password,
                            {
                                minLength: 6,
                                minLowercase: 0,
                                minNumbers: 0,
                                minSymbols: 0,
                                minUppercase: 0,
                            }));
                    }}
                    onChange={event => {
                        setPassword(event.target.value);
                    }}
                    type="password"
                    value={password}
                />
                { passwordError &&
                <FormHelperText color="red.200">Password must be at least 6 characters</FormHelperText>
                }
            </FormControl>
        </div>
    );
};

export default StepOneForm;
