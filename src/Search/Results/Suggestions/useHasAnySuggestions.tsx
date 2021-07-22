import type { useHasAnySuggestions_suggestions$key } from './__generated__/useHasAnySuggestions_suggestions.graphql';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

function useHasAnySuggestions(suggestions: useHasAnySuggestions_suggestions$key) {
    const {
        cities,
        specialities,
        minRating,
        nearby,
    } = useFragment(
        graphql`
            fragment useHasAnySuggestions_suggestions on SearchSuggestions {
                cities
                specialities
                minRating
                nearby {
                    __typename
                }
            }
        `,
        suggestions,
    );
     
    return cities != null || specialities != null || minRating != null || nearby != null;
}

export default useHasAnySuggestions;
