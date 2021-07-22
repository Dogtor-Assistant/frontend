import type { CitySuggestions_suggestions$key } from './__generated__/CitySuggestions_suggestions.graphql';

import React from 'react';
import { Button } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { useCity } from 'Search/context';

type SuggestionProp = {
    city: string,
}

type Props = {
    suggestions: CitySuggestions_suggestions$key,
}

function CitySuggestion({ city }: SuggestionProp) {
    const [selected, setSelected] = useCity(city);
    
    return (
        <Button
            onClick={() => setSelected(!selected, 300)}
            size="sm"
            variant={selected ? 'solid' : 'outline'}
        >
            City: {city}
        </Button>
    );
}

function CitySuggestions(props: Props) {
    const suggestions = useFragment(
        graphql`
            fragment CitySuggestions_suggestions on SearchSuggestions {
                cities
            }
        `,
        props.suggestions,
    );

    if (suggestions.cities == null) {
        return null;
    }

    return (
        <>
            {
                suggestions.cities.map(city => <CitySuggestion city={city} key={city} />)
            }
        </>
    );
}

export default CitySuggestions;
