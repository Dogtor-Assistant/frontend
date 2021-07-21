
import React, { useMemo, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import SearchFromId from './SearchFromId';
import SearchRoot from './SearchRoot';

function Search() {
    const history = useHistory();
    const { search } = useLocation();
    const previousHistoryLength = useRef<number | null>();
    const previousParams = useRef<URLSearchParams | null>(null);
    const params = useMemo(() => {
        if (
            previousParams.current != null &&
            previousHistoryLength.current != null &&
            previousHistoryLength.current === history.length
        ) {
            return previousParams.current;
        }

        const params = new URLSearchParams(search);
        previousParams.current = params;
        previousHistoryLength.current = history.length;
        return params;
    }, [history.length, search]);

    const searchId = params.get('id');
    if (searchId != null) {
        return <SearchFromId searchId={searchId} />;
    }

    const query = params.get('query');
    return (
        <SearchRoot
            initial={{
                cities: null,
                query,
                specialities: null,
            }}
        />
    );
}

export default Search;
