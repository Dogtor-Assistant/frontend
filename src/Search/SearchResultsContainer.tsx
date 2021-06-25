import type { SearchResultsContainer_search$key } from './__generated__/SearchResultsContainer_search.graphql';

import React from 'react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import SearchResultsList from './SearchResultsList';

import useResultMode from './useResultMode';

type Props = {
    search: SearchResultsContainer_search$key,
}

function SearchResultsContainer(props: Props) {
    const search = useFragment(
        graphql`
            fragment SearchResultsContainer_search on Search {
                ...useResultMode_search
                ...SearchResultsList_search
            }
        `,
        props.search,
    );

    const mode = useResultMode(search);

    switch (mode) {
    case 'empty':
        return <p>Empty Results</p>;
    case 'suggestions':
        return <p>Here go the suggestions</p>;
    case 'results':
        return <SearchResultsList search={search}/>;
    }
}

export default SearchResultsContainer;
