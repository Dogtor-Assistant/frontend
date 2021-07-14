import type { Results_search$key } from './__generated__/Results_search.graphql';

import React from 'react';
import { Container } from '@chakra-ui/react';

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
        <Container maxW="container.lg">
            <SearchResultsList search={search} />
        </Container>
    );
}

export default Results;
