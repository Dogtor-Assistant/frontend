import React from 'react';

import useAreSearchArgumentsEmpty from '../useAreSearchArgumentsEmpty';

import { useShouldShowBarValue } from '../context';

function Empty() {
    const areArgumentsEmpty = useAreSearchArgumentsEmpty();
    useShouldShowBarValue(true);

    if (areArgumentsEmpty) {
        return null;
    }

    return (
        <p>No Results</p>
    );
}

export default Empty;
