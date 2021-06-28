import type { SearchArguments } from './context';

import React from 'react';

import SearchRenderer from './SearchRenderer';

import { SearchContextProvider } from './context';

type Props = {
    initial: SearchArguments,
}

function SearchRoot({ initial }: Props) {
    return (
        <SearchContextProvider initial={initial}>
            <SearchRenderer />
        </SearchContextProvider>
    );
}

export default SearchRoot;
