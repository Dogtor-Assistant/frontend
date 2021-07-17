import React from 'react';

import { useShouldShowBarValue } from 'Search/context';

function Empty() {
    useShouldShowBarValue(true);

    return (
        <p>No Results</p>
    );
}

export default Empty;
