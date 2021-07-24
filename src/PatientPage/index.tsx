import React, { useState } from 'react';
import {
    Box,
    Divider,
    Heading,
    VStack,
} from '@chakra-ui/react';

import { Search } from 'Home';
import CheckupNot from './CheckupNot';
import PastApp from './PastApp';
import ProfileSuggestion from './ProfileSuggestion';
import UpcomingApp from './UpcomingApp';

function PatientPage() {
    const [showSuggestion, setShowSuggestion] = useState(true);

    return (
        <div>
            <Box my={4}>
                <Search />
            </Box>
            <VStack
                align="stretch"
                spacing={4}
            >
                { showSuggestion &&
                <ProfileSuggestion
                    setShowSuggestion={setShowSuggestion}
                    showSuggestion={showSuggestion}
                />
                }
                { !showSuggestion &&
                    <CheckupNot />
                }
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
