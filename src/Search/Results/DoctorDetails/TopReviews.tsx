import type { TopReviews_doctor$key } from './__generated__/TopReviews_doctor.graphql';

import React from 'react';
import { HStack, Text, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import DoctorReviewCard from './DoctorReviewCard';

type Props = {
    doctor: TopReviews_doctor$key,
}

function TopReviews(props: Props) {
    const doctor = useFragment(
        graphql`
            fragment TopReviews_doctor on Doctor {
                reviews(last: 3) {
                    edges {
                        node {
                            id
                            ...DoctorReviewCard_review
                        }
                    }
                }
            }
        `,
        props.doctor,
    );

    const reviews = doctor.reviews.edges?.compactMap(edge => edge?.node) ?? [];

    if (reviews.length < 1) {
        return null;
    }

    return (
        <VStack align="start">
            <Text
                fontSize="md"
                fontWeight="semibold"
            >
                Latest Reviews
            </Text>
            <HStack>
                {
                    reviews.map(review => {
                        return (
                            <DoctorReviewCard key={review.id} review={review}/>
                        );
                    })
                }
            </HStack>
        </VStack>
    );
}

export default TopReviews;
