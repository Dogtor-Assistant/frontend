import type { Suggestions_search$key } from './__generated__/Suggestions_search.graphql';

import React from 'react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
    search: Suggestions_search$key,
}

function Suggestions(props: Props) {
    const search = useFragment(
        graphql`
            fragment Suggestions_search on Search {
                suggestions {
                    cities
                    specialities
                }
            }
        `,
        props.search,
    );

    return (
        <p>
            Suggestions:
            {search.suggestions.specialities?.join(', ') ?? 'No Suggested Speciality'}
            {search.suggestions.cities?.join(', ') ?? 'No Suggested City'}
        </p>
    );
}

export default Suggestions;
