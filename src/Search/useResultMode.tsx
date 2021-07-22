import type { useResultMode_search$key } from './__generated__/useResultMode_search.graphql';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Mode = 'results' | 'suggestions' | 'empty'

function useResultMode(search: useResultMode_search$key): Mode {
    const decoded = useFragment(
        graphql`
            fragment useResultMode_search on Search {
                suggestions {
                    specialities
                    cities
                }
                firstResult: results(first: 1) {
                    edges {
                        __typename
                    }
                }
            }
        `,
        search,
    );

    const numberOfResults = decoded.firstResult.edges?.length ?? 0;
    const isEmpty = numberOfResults < 1;
    if (!isEmpty) {
        return 'results';
    }

    if (decoded.suggestions.cities != null) {
        return 'suggestions';
    }

    if (decoded.suggestions.specialities != null) {
        return 'suggestions';
    }

    return 'empty';
}

export default useResultMode;
