import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import {
    Alert,
    AlertIcon,
    Box,
    Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
} from '@chakra-ui/react';

import { useIsLoggedIn, useIsLoggingIn, useLogin } from 'authentication';
import { useIsDoctor } from 'user';

function Login() {
    const isDoctor = useIsDoctor();
    const isLoggedIn = useIsLoggedIn();
    const isLoggingIn = useIsLoggingIn();
    const loginImpl = useLogin();
    const history = useHistory();

    const [isWrong, setIsWrong] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = useCallback(async () => {
        try {
            await loginImpl(username, password);
            setUsername('');
            setPassword('');
        } catch {
            setIsWrong(true);
        }
    }, [loginImpl, username, password]);

    useEffect(() => {
        if (isLoggedIn) {
            
            if(isDoctor) {
                history.push('/doctor');
            }else{
                history.push('/');
            }
        }
        
    }, [isLoggedIn, history, isDoctor]);

    return (
        <Center>
            <Flex align="center" justifyContent="center" width="full">
                <Box p={2}>
                    <Box textAlign="center">
                        <Heading>Login</Heading>
                    </Box>
                    {
                        isWrong && (
                            <Alert status="error">
                                <AlertIcon />
                                Wrong combination of username and password
                            </Alert>
                        )
                    }
                    <Box my={4} textAlign="left">
                        <form onSubmit={event => {
                            event.preventDefault();
                            login();
                        }}>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    onChange={event => {
                                        setUsername(event.target.value);
                                        setIsWrong(false);
                                    }}
                                    type="text"
                                    value={username}
                                />
                            </FormControl>
                            <FormControl mt={6}>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    onChange={event => {
                                        setPassword(event.target.value);
                                        setIsWrong(false);
                                    }}
                                    type="password"
                                    value={password}
                                />
                            </FormControl>
                            <Button
                                isLoading={isLoggingIn}
                                loadingText="Loggin you in"
                                mt={4}
                                type="submit"
                                width="full"
                            >
                                Sign In
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Flex>
        </Center>
    );
}

export default Login;
