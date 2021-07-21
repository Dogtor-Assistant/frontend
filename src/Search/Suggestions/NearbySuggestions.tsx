/* eslint-disable relay/unused-fields */
import type { NearbySuggestions_suggestions$key } from './__generated__/NearbySuggestions_suggestions.graphql';

import React from 'react';
import { Button, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import HorizonalScrollview from 'HorizonalScrollview';
import { useNearbyLabel, useUpdate } from 'Search/context';

type Props = {
    suggestions: NearbySuggestions_suggestions$key,
}

function NearbySuggestions(props: Props) {
    const suggestions = useFragment(
        graphql`
            fragment NearbySuggestions_suggestions on SearchSuggestions {
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

    const currentLabel = useNearbyLabel();
    const update = useUpdate();

    if (suggestions.nearby == null) {
        return null;
    }

    return (
        <VStack align="left">
            <Text>
                Nearby
            </Text>
            <HorizonalScrollview w="100%">
                <Button
                    onClick={
                        () => update(
                            {
                                nearby: suggestions.nearby,
                            },
                        )
                    }
                    variant={currentLabel === suggestions.nearby.label ? 'solid' : 'outline'}
                >
                    {suggestions.nearby.label}
                </Button>
            </HorizonalScrollview>
        </VStack>
    );
}

export default NearbySuggestions;
