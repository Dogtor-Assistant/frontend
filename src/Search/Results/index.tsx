import type { Results_search$key } from './__generated__/Results_search.graphql';

import React from 'react';
import { Box, Container } from '@chakra-ui/react';

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
            <Box
                paddingBottom={4}
                paddingTop={4}
                w="100%"
            >
                <SearchResultsList search={search} />
            </Box>
        </Container>
    );
}

export default Results;
