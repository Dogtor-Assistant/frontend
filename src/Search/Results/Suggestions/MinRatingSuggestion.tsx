import type { MinRatingSuggestion_suggestions$key } from './__generated__/MinRatingSuggestion_suggestions.graphql';

import React from 'react';
import { Button } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { useCurrentSearchArguments, useUpdate } from 'Search/context';

type Props = {
    suggestions: MinRatingSuggestion_suggestions$key,
}

function MinRatingSuggestion(props: Props) {
    const suggestions = useFragment(
        graphql`
            fragment MinRatingSuggestion_suggestions on SearchSuggestions {
                minRating
            }
        `,
        props.suggestions,
    );
    const { minRating: current } = useCurrentSearchArguments();
    const update = useUpdate();

    if (suggestions.minRating == null) {
        return null;
    }

    return (
        <Button
            onClick={() => update({ minRating: suggestions.minRating }, 300)}
            size="sm"
            variant={current != null ? 'solid' : 'outline'}
        >
            Rating: {suggestions.minRating}+
        </Button>
    );
}

export default MinRatingSuggestion;
