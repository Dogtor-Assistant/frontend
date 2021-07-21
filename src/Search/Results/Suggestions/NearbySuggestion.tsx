/* eslint-disable relay/unused-fields */
import type { NearbySuggestion_suggestions$key } from './__generated__/NearbySuggestion_suggestions.graphql';

import React from 'react';
import { Button } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { useCurrentSearchArguments, useUpdate } from 'Search/context';

type Props = {
    suggestions: NearbySuggestion_suggestions$key,
}

function NearbySuggestion(props: Props) {
    const suggestions = useFragment(
        graphql`
            fragment NearbySuggestion_suggestions on SearchSuggestions {
                nearby {
                    label
                    maximumDistanceInMeters
                    coordinates {
                        latitude
                        longitude
                    }
                }
            }
        `,
        props.suggestions,
    );
    const { nearby: current } = useCurrentSearchArguments();
    const update = useUpdate();

    if (suggestions.nearby == null) {
        return null;
    }

    return (
        <Button
            onClick={
                () => update(
                    {
                        nearby: suggestions.nearby,
                    },
                    300,
                )
            }
            size="sm"
            variant={current?.label === suggestions.nearby.label ? 'solid' : 'outline'}
        >
            Nearby: {suggestions.nearby.label}
        </Button>
    );
}

export default NearbySuggestion;
