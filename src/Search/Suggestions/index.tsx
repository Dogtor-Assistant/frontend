import type { Suggestions_search$key } from './__generated__/Suggestions_search.graphql';

import React from 'react';
import {
    Button,
    Container,
    Text,
    VStack,
} from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { useForcedUpdate } from 'Search/context';
import CitiesSuggestions from './CitiesSuggestions';
import SpecialitiesSuggestions from './SpecialitiesSuggestions';

type Props = {
    search: Suggestions_search$key,
}

function Suggestions(props: Props) {
    const search = useFragment(
        graphql`
            fragment Suggestions_search on Search {
                suggestions {
                    ...SpecialitiesSuggestions_suggestions
                    ...CitiesSuggestions_suggestions
                }
            }
        `,
        props.search,
    );

    const update = useForcedUpdate();

    return (
        <Container>
            <VStack align="left" w="80%">
                <Text>
                    Suggestions
                </Text>
                <SpecialitiesSuggestions suggestions={search.suggestions} />
                <CitiesSuggestions suggestions={search.suggestions} />
                <Button
                    onClick={() => {
                        update({ query: null });
                    }}
                >
                    Search
                </Button>
            </VStack>
        </Container>
    );
}

export default Suggestions;
