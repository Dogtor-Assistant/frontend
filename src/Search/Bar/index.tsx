import React from 'react';
import { Container, VStack } from '@chakra-ui/react';

import HorizonalScrollview from 'HorizonalScrollview';
import { useShouldShowBar } from 'Search/context';
import Applied from './Filters/Applied';
import SearchQueryBar from './SearchQueryBar';

function Bar() {
    const [shouldShowBar] = useShouldShowBar();

    if (!shouldShowBar) {
        return null;
    }

    return (
        <Container maxW="container.lg">
            <VStack>
                <SearchQueryBar />
                <HorizonalScrollview w="100%">
                    <Applied />
                </HorizonalScrollview>
            </VStack>
        </Container>
    );
}

export default Bar;
