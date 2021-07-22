import type { SpecialitySuggestions_suggestions$key } from './__generated__/SpecialitySuggestions_suggestions.graphql';

import React from 'react';
import { Button } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { useSpeciality } from 'Search/context';

type SuggestionProp = {
    speciality: string,
}

type Props = {
    suggestions: SpecialitySuggestions_suggestions$key,
}

function SpecialitySuggestion({ speciality }: SuggestionProp) {
    const [selected, setSelected] = useSpeciality(speciality);
    
    return (
        <Button
            onClick={() => setSelected(!selected, 300)}
            size="sm"
            variant={selected ? 'solid' : 'outline'}
        >
            Speciality: {speciality}
        </Button>
    );
}

function SpecialitySuggestions(props: Props) {
    const suggestions = useFragment(
        graphql`
            fragment SpecialitySuggestions_suggestions on SearchSuggestions {
                specialities
            }
        `,
        props.suggestions,
    );

    if (suggestions.specialities == null) {
        return null;
    }

    return (
        <>
            {
                suggestions.specialities.map(
                    speciality => {
                        return (
                            <SpecialitySuggestion key={speciality} speciality={speciality} />
                        );
                    },
                )
            }
        </>
    );
}

export default SpecialitySuggestions;
