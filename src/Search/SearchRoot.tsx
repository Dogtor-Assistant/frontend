import type { SearchArguments } from './context';

import React from 'react';

import { SearchContextProvider } from './context';

type Props = {
    initial: SearchArguments,
}

function SearchRoot({ initial }: Props) {
    return (
        <SearchContextProvider initial={initial}>
            <p>Hello, World!</p>
        </SearchContextProvider>
    );
}

export default SearchRoot;
