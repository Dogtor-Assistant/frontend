import React from 'react';
import { Container, VStack } from '@chakra-ui/react';

import { useShouldShowBar } from 'Search/context';
import CityPicker from './Filters/Common/CityPicker';
import SpecialityPicker from './Filters/Common/SpecialityPicker';

function Bar() {
    const [shouldShowBar] = useShouldShowBar();

    if (!shouldShowBar) {
        return null;
    }

    // TODO: Add everything
    return (
        <Container maxW="container.lg">
            <VStack>
                <CityPicker />
                <SpecialityPicker />
            </VStack>
        </Container>
    );
}

export default Bar;
