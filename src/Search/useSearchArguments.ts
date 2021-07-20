import type { useSearchArguments_search$key } from './__generated__/useSearchArguments_search.graphql';
import type { SearchArguments } from './context';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

function useSearchArguments(search: useSearchArguments_search$key): SearchArguments {
    const decoded = useFragment(
        graphql`
            fragment useSearchArguments_search on Search {
                scope {
                    cities
                    query
                    specialities
                    minRating
                }
            }
        `,
        search,
    );

    return {
        cities: decoded.scope.cities,
        minRating: decoded.scope.minRating,
        query: decoded.scope.query,
        specialities: decoded.scope.specialities,
    };
}

export default useSearchArguments;
