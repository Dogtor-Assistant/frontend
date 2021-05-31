import React, { useCallback, useState } from 'react';
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
    Text,
    VStack,
} from '@chakra-ui/react';

import Greeting from './Greeting';

import { useIsLoggedIn, useIsLoggingIn, useLogin, useLogout } from 'authentication';

function Login() {
    const isLoggedIn = useIsLoggedIn();
    const isLoggingIn = useIsLoggingIn();
    const loginImpl = useLogin();
    const logout = useLogout();

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

    if (isLoggedIn) {
        return (
            <Center>
                <VStack>
                    <Text fontSize="2xl" fontWeight="semibold">
                        You are already logged in!
                    </Text>
                    
                    <Greeting />

                    <Button mt={4} onClick={() => logout()} width="full">
                        Logout
                    </Button>
                </VStack>
            </Center>
        );
    }

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
