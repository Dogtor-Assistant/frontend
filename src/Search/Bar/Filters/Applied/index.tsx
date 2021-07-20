import React from 'react';
import { HStack } from '@chakra-ui/react';

import { useCurrentFilterTypes } from 'Search/context';
import FilterPicker from '../Common/FilterPicker';
import Filter from './Filter';

function Applied() {
    const filters = useCurrentFilterTypes();

    return (
        <HStack overflow="visible">
            {
                filters.map(type => {
                    return (
                        <Filter
                            key={type}
                            type={type}
                        />
                    );
                })
            }
            <FilterPicker />
        </HStack>
    );
}

export default Applied;
