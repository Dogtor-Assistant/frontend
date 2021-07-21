import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import {
    Box,
    Divider,
    Heading,
    VStack,
} from '@chakra-ui/react';

import { Search } from 'Home';
import PastApp from './PastApp';
import UpcomingApp from './UpcomingApp';

import { useIsLoggedIn } from 'authentication';

function PatientPage() {
    const history = useHistory();
    const isLoggedIn = useIsLoggedIn();

    useEffect(() => {
        if (!isLoggedIn) {
            history.push('/login');
        }
    }, [isLoggedIn, history]);

    return (
        <div>
            <Box my={4}>
                <Search />
            </Box>
            <VStack
                align="stretch"
                spacing={4}
            >
                <Heading alignSelf="center" my={4} size="md">Upcoming Appointments</Heading>
                <UpcomingApp />

                <Divider py={4}/>
                
                <Heading alignSelf="center" my={4} size="md">Past Appointments</Heading>
                <PastApp />
            </VStack>
        </div>
    );
}

export default PatientPage;
