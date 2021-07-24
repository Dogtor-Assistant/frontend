import type { DoctorReviewCard_review$key } from './__generated__/DoctorReviewCard_review.graphql';

import React from 'react';
import {
    Badge,
    Box,
    Text,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Rating from 'Rating';

type Props = {
    review: DoctorReviewCard_review$key,
}

function DoctorReviewCard(props: Props) {
    const review = useFragment(
        graphql`
            fragment DoctorReviewCard_review on Review {
                rating
                content
                patient {
                    firstname
                    lastname
                }
            }
        `,
        props.review,
    );

    const ratingColor = useColorModeValue('dark', 'gray.800');

    return (
        <Box
            borderRadius="lg"
            borderWidth="1px"
            overflow="hidden"
            w="xs"
        >
            <VStack
                align="start"
                p={4}
                w="100%"
            >
                <Box alignItems="baseline" d="flex">
                    <Badge borderRadius="full" colorScheme="teal" px="2">
                        Review
                    </Badge>
                </Box>

                <Text
                    fontWeight="semibold"
                    isTruncated
                    lineHeight="tight"
                >
                    {review.content}
                </Text>

                <Rating color={ratingColor} value={review.rating}/>
                <Text
                    fontSize="xs"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    textTransform="uppercase"
                >
                    Review from: {review.patient.firstname} {review.patient.lastname}
                </Text>
            </VStack>
        </Box>
    );
}

export default DoctorReviewCard;
