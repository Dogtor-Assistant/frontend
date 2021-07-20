import type { Results_search$key } from './__generated__/Results_search.graphql';

import React from 'react';
import { Container } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { useShouldShowBarValue } from 'Search/context';
import SearchResultsList from './SearchResultsList';
import Suggestions from './Suggestions';

type Props = {
    search: Results_search$key,
}

function Results(props: Props) {
    useShouldShowBarValue(true);
    
    const search = useFragment(
        graphql`
            fragment Results_search on Search {
                ...SearchResultsList_search
                suggestions {
                    ...Suggestions_suggestions
                }
            }
        `,
        props.search,
    );

    return (
        <Container maxW="container.lg">
            <Suggestions suggestions={search.suggestions}/>
            <SearchResultsList search={search} />
        </Container>
    );
}

export default Results;
