import type { Suggestions_suggestions$key } from './__generated__/Suggestions_suggestions.graphql';

import React from 'react';
import { HStack, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import CitySuggestions from './CitySuggestions';
import MinRatingSuggestion from './MinRatingSuggestion';
import SpecialitySuggestions from './SpecialitySuggestions';

import useHasAnySuggestions from './useHasAnySuggestions';

type Props = {
    suggestions: Suggestions_suggestions$key,
}

function Suggestions(props: Props) {
    const suggestions = useFragment(
        graphql`
            fragment Suggestions_suggestions on SearchSuggestions {
                ...useHasAnySuggestions_suggestions
                ...CitySuggestions_suggestions
                ...SpecialitySuggestions_suggestions
                ...MinRatingSuggestion_suggestions
            }
        `,
        props.suggestions,
    );

    const hasAnySuggestions = useHasAnySuggestions(suggestions);
    if (!hasAnySuggestions) {
        return null;
    }

    return (
        <VStack align="start">
            <Text
                fontSize="md"
                fontWeight="semibold"
            >
                Suggestions
            </Text>
            <HStack>
                <CitySuggestions suggestions={suggestions} />
                <SpecialitySuggestions suggestions={suggestions} />
                <MinRatingSuggestion suggestions={suggestions} />
            </HStack>
        </VStack>
    );
}

export default Suggestions;
