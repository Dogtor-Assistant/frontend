import React from 'react';
import { HStack } from '@chakra-ui/react';

import { useCities, useSpecialities } from 'Search/context';
import CityPicker from '../Common/CityPicker';
import SpecialityPicker from '../Common/SpecialityPicker';

function Applied() {
    const [cities] = useCities();
    const [specialities] = useSpecialities();

    return (
        <HStack overflow="visible">
            {cities != null && <CityPicker />}
            {specialities != null && <SpecialityPicker />}
        </HStack>
    );
}

export default Applied;
