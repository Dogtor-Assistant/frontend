import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Center,
    Heading,
    Text,
    VStack,
} from '@chakra-ui/react';

import LoadingIndicator from 'LoadingIndicator';

function SignupSuccess() {
    const history = useHistory();
    const isFirstRun = useRef(true);
    
    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            setTimeout(() => { history.push('/login'); }, 3000);
        }
    });

    return (
        <div>
            <Center>
                <VStack>
                    <Heading>Sign up was successful</Heading>
                    <Text>You will shortly be redirected to the Login page!</Text>
                    <LoadingIndicator />
                </VStack>
            </Center>
        </div>
    );
}

export default SignupSuccess;
