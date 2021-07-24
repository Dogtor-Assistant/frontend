import type { Suggestions_search$key } from './__generated__/Suggestions_search.graphql';

import React from 'react';
import {
    Button,
    Center,
    Container,
    Text,
    VStack,
} from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import {
    EMPTY_SEARCH_ARGUMENTS,
    useAppliedSearchArguments,
    useShouldShowBarValue,
    useUpdate,
} from 'Search/context';
import CitiesSuggestions from './CitiesSuggestions';
import NearbySuggestions from './NearbySuggestions';
import SpecialitiesSuggestions from './SpecialitiesSuggestions';

type Props = {
    search: Suggestions_search$key,
}

function Suggestions(props: Props) {
    useShouldShowBarValue(false);

    const search = useFragment(
        graphql`
            fragment Suggestions_search on Search {
                suggestions {
                    ...SpecialitiesSuggestions_suggestions
                    ...CitiesSuggestions_suggestions
                    ...NearbySuggestions_suggestions
                }
            }
        `,
        props.search,
    );

    const { query } = useAppliedSearchArguments();
    const update = useUpdate();

    return (
        <Container>
            <VStack align="left" w="80%">
                <Text fontSize="3xl">
                    Hmmm...
                </Text>
                <Text fontSize="xl">
                    Sorry, we could not find any doctors by searching for &quot;{query}&quot;.
                    Please let us help with that. Here are a couple of things we can help you with:
                </Text>
                <SpecialitiesSuggestions suggestions={search.suggestions} />
                <CitiesSuggestions suggestions={search.suggestions} />
                <NearbySuggestions suggestions={search.suggestions} />
                <Button
                    onClick={() => {
                        update({ query: null }, true);
                    }}
                >
                    Search
                </Button>
                <Center>
                    <Button
                        onClick={() => {
                            update(EMPTY_SEARCH_ARGUMENTS, true);
                        }}
                        variant="ghost"
                    >
                        Reset
                    </Button>
                </Center>
            </VStack>
        </Container>
    );
}

export default Suggestions;
