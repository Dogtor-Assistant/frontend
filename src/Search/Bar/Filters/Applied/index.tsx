import React from 'react';
import { HStack } from '@chakra-ui/react';

import { useCurrentFilterTypes } from 'Search/context';
import Filter from './Filter';

function Applied() {
    const filters = useCurrentFilterTypes();

    return (
        <HStack>
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
        </HStack>
    );
}

export default Applied;
