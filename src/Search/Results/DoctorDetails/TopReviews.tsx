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
                topReviews {
                    id
                    ...DoctorReviewCard_review
                }
            }
        `,
        props.doctor,
    );

    if (doctor.topReviews.length < 1) {
        return null;
    }

    return (
        <VStack align="start">
            <Text
                fontSize="md"
                fontWeight="semibold"
            >
                Top Reviews
            </Text>
            <HStack>
                {
                    doctor.topReviews.map(review => {
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
