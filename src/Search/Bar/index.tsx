import React from 'react';
import { Container, Text, VStack } from '@chakra-ui/react';

import HorizonalScrollview from 'HorizonalScrollview';
import { useShouldShowBar } from 'Search/context';
import Applied from './Filters/Applied';
import FilterPicker from './Filters/Common/FilterPicker';
import SearchQueryBar from './SearchQueryBar';

function Bar() {
    const [shouldShowBar] = useShouldShowBar();

    if (!shouldShowBar) {
        return null;
    }

    return (
        <Container maxW="container.lg">
            <VStack align="start">
                <SearchQueryBar />
                <Text
                    fontSize="md"
                    fontWeight="semibold"
                >
                    Filters
                </Text>
                <HorizonalScrollview w="100%">
                    <Applied />
                    <FilterPicker />
                </HorizonalScrollview>
            </VStack>
        </Container>
    );
}

export default Bar;
