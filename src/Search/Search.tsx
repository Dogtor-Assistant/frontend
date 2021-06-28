import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import SearchFromId from './SearchFromId';
import SearchRoot from './SearchRoot';

function Search() {
    const { search } = useLocation();
    const params = useMemo(() => new URLSearchParams(search), [search]);

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
