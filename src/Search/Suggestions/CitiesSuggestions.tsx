import type { CitiesSuggestions_suggestions$key } from './__generated__/CitiesSuggestions_suggestions.graphql';

import React from 'react';
import { Button, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import HorizonalScrollviewWrapper from 'HorizonalScrollview';
import { useCity } from 'Search/context';

type SuggestionProp = {
    city: string,
}

type Props = {
    suggestions: CitiesSuggestions_suggestions$key,
}

function CitySuggestion({ city }: SuggestionProp) {
    const [selected, setSelected] = useCity(city);
    
    return (
        <Button
            onClick={() => setSelected(!selected)}
            variant={selected ? 'solid' : 'outline'}
        >
            {city}
        </Button>
    );
}

function CitiesSuggestions(props: Props) {
    const suggestions = useFragment(
        graphql`
            fragment CitiesSuggestions_suggestions on SearchSuggestions {
                cities
            }
        `,
        props.suggestions,
    );

    if (suggestions.cities == null) {
        return null;
    }

    return (
        <VStack align="left">
            <Text>
                Cities
            </Text>
            <HorizonalScrollviewWrapper w="100%">
                {
                    suggestions.cities.map(city => <CitySuggestion city={city} key={city} />)
                }
            </HorizonalScrollviewWrapper>
        </VStack>
    );
}

export default CitiesSuggestions;
