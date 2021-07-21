import React from 'react';
import { Center, Text } from '@chakra-ui/react';

import useAreSearchArgumentsEmpty from '../useAreSearchArgumentsEmpty';

import { useShouldShowBarValue } from '../context';

function Empty() {
    const areArgumentsEmpty = useAreSearchArgumentsEmpty();
    useShouldShowBarValue(true);

    if (areArgumentsEmpty) {
        return null;
    }

    return (
        <Center>
            <Text
                fontSize="xl"
                fontWeight="semibold"
            >
                No Results!
            </Text>
        </Center>
    );
}

export default Empty;
