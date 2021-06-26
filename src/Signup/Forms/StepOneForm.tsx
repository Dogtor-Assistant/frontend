import type { FC, ReactElement } from 'react';

import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

type stepOneFormProps = {
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setFirstName: React.Dispatch<React.SetStateAction<string>>,
    setLastName: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
}
const StepOneForm: FC<stepOneFormProps> =
({
    email, firstName, lastName, password,
    setEmail, setFirstName, setLastName, setPassword,
}): ReactElement => {
    return (
        <div>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                    onChange={event => {
                        setEmail(event.target.value);
                    }}
                    type="text"
                    value={email}
                />
            </FormControl>
            <FormControl mt={6}>
                <FormLabel>First Name</FormLabel>
                <Input
                    onChange={event => {
                        setFirstName(event.target.value);
                    }}
                    type="text"
                    value={firstName}
                />
            </FormControl>
            <FormControl mt={6}>
                <FormLabel>Last Name</FormLabel>
                <Input
                    onChange={event => {
                        setLastName(event.target.value);
                    }}
                    type="text"
                    value={lastName}
                />
            </FormControl>
            <FormControl my={6}>
                <FormLabel>Password</FormLabel>
                <Input
                    onChange={event => {
                        setPassword(event.target.value);
                    }}
                    type="password"
                    value={password}
                />
            </FormControl>
        </div>
    );
};

export default StepOneForm;
