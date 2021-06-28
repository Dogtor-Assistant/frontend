import type { Results_search$key } from './__generated__/Results_search.graphql';

import React from 'react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import SearchResultsList from './SearchResultsList';

type Props = {
    search: Results_search$key,
}

function Results(props: Props) {
    const search = useFragment(
        graphql`
            fragment Results_search on Search {
                ...SearchResultsList_search
            }
        `,
        props.search,
    );

    return (
        <SearchResultsList search={search} />
    );
}

export default Results;
