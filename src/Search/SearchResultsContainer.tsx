import type { SearchResultsContainer_search$key } from './__generated__/SearchResultsContainer_search.graphql';

import React from 'react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Empty from './Empty';
import Results from './Results';
import Suggestions from './Suggestions';

import useResultMode from './useResultMode';

type Props = {
    search: SearchResultsContainer_search$key,
}

function SearchResultsContainer(props: Props) {
    const search = useFragment(
        graphql`
            fragment SearchResultsContainer_search on Search {
                ...useResultMode_search
                ...Results_search
                ...Suggestions_search
            }
        `,
        props.search,
    );

    const mode = useResultMode(search);

    switch (mode) {
    case 'empty':
        return <Empty />;
    case 'suggestions':
        return <Suggestions search={search} />;
    case 'results':
        return <Results search={search} />;
    }
}

export default SearchResultsContainer;
