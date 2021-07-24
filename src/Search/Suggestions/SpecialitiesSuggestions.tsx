// eslint-disable-next-line import-newlines/enforce
import type {
    SpecialitiesSuggestions_suggestions$key,
} from './__generated__/SpecialitiesSuggestions_suggestions.graphql';

import React from 'react';
import { Button, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import HorizonalScrollviewWrapper from 'HorizonalScrollview';
import { useSpeciality } from 'Search/context';

type SuggestionProp = {
    speciality: string,
}

type Props = {
    suggestions: SpecialitiesSuggestions_suggestions$key,
}

function SpecialitySuggestion({ speciality }: SuggestionProp) {
    const [selected, setSelected] = useSpeciality(speciality);
    
    return (
        <Button
            onClick={() => setSelected(!selected)}
            variant={selected ? 'solid' : 'outline'}
        >
            {speciality}
        </Button>
    );
}

function SpecialitiesSuggestions(props: Props) {
    const suggestions = useFragment(
        graphql`
            fragment SpecialitiesSuggestions_suggestions on SearchSuggestions {
                specialities
            }
        `,
        props.suggestions,
    );

    if (suggestions.specialities == null) {
        return null;
    }

    return (
        <VStack align="left">
            <Text>
                Specialities
            </Text>
            <HorizonalScrollviewWrapper w="100%">
                {
                    suggestions.specialities.map(
                        speciality => {
                            return (
                                <SpecialitySuggestion key={speciality} speciality={speciality} />
                            );
                        },
                    )
                }
            </HorizonalScrollviewWrapper>
        </VStack>
    );
}

export default SpecialitiesSuggestions;
