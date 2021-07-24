import type { SearchArguments } from './context';

import React from 'react';
import { VStack } from '@chakra-ui/react';

import Bar from './Bar';
import SearchRenderer from './SearchRenderer';

import { SearchContextProvider } from './context';

type Props = {
    initial: SearchArguments,
}

function SearchRoot({ initial }: Props) {
    return (
        <SearchContextProvider initial={initial}>
            <VStack>
                <Bar />
                <SearchRenderer />
            </VStack>
        </SearchContextProvider>
    );
}

export default SearchRoot;
