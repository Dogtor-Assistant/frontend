import type { ReviewQuery as ReviewQueryType } from './__generated__/ReviewQuery.graphql';
import type { ErrorBoundary } from 'react-error-boundary';
import type { PreloadedQuery } from 'react-relay';

import ReviewQuery from './__generated__/ReviewQuery.graphql';

import React, { useEffect, useRef } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Badge, Box } from '@chakra-ui/layout';
=======
import { Box } from '@chakra-ui/layout';
>>>>>>> adding reviews (not finished) && adding Rating for stars
=======
import { Badge, Box } from '@chakra-ui/layout';
>>>>>>> impl of review box

import { usePreloadedQuery, useQueryLoader } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Rating from 'Rating';
import Suspense from '../Suspense';

type LoadedProps = {
    data: PreloadedQuery<ReviewQueryType>
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
type Props = {
     
}

>>>>>>> adding reviews (not finished) && adding Rating for stars
=======
>>>>>>> removing unused-vars
function LoadedReview(props: LoadedProps) {
    const data = usePreloadedQuery(
        graphql`
            query ReviewQuery {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> impl of review box
                 latestReviews{
                     id
                     rating
                     content
                     doctor{
                         firstname
                         lastname
                     }
                     patient{
                         firstname
                         lastname
                     }
                 }
<<<<<<< HEAD
=======
                 greeting
>>>>>>> adding reviews (not finished) && adding Rating for stars
=======
>>>>>>> impl of review box
            }
        `,
        props.data,
    );

    return (<>
<<<<<<< HEAD
<<<<<<< HEAD
        {
            data.latestReviews.map(review => (
                <Box key={review.id} p="2">
                        
                    <Box borderRadius="lg" borderWidth="1px" maxW="sm" overflow="hidden">
                        
                        <Box p="6">
                            <Box alignItems="baseline" d="flex">
                                <Badge borderRadius="full" colorScheme="teal" px="2">
                                    New
                                </Badge>
                                <Box
                                    color="gray.500"
                                    fontSize="xs"
                                    fontWeight="semibold"
                                    letterSpacing="wide"
                                    ml="2"
                                    textTransform="uppercase"
                                >
                                    Dr. {review.doctor.firstname} &bull; {review.doctor.lastname}
                                </Box>
                            </Box>

                            <Box
                                as="h4"
                                fontWeight="semibold"
                                isTruncated
                                lineHeight="tight"
                                mt="1"
                            >
                                {review.content}
                            </Box>

                            <Box alignItems="center" d="flex" mt="2">
                                <Rating value={data.latestReviews ? review.rating : 2.5} />
                            </Box>
                            <Box
                                color="gray.500"
                                fontSize="xs"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                ml="1"
                                textTransform="uppercase"
                            >
                                   Review from: {review.patient.firstname} &bull; {review.patient.lastname}
                            </Box>
                            
                        </Box>
                    </Box>
                </Box>
            ))
        }
=======
        <p>{data.greeting}</p>
        <Box p="6">
=======
        {
            data.latestReviews.map(review => (
                <Box key={review.id} p="2">
>>>>>>> impl of review box
                        
                    <Box borderRadius="lg" borderWidth="1px" maxW="sm" overflow="hidden">
                        
                        <Box p="6">
                            <Box alignItems="baseline" d="flex">
                                <Badge borderRadius="full" colorScheme="teal" px="2">
                                    New
                                </Badge>
                                <Box
                                    color="gray.500"
                                    fontSize="xs"
                                    fontWeight="semibold"
                                    letterSpacing="wide"
                                    ml="2"
                                    textTransform="uppercase"
                                >
                                    Dr. {review.doctor.firstname} &bull; {review.doctor.lastname}
                                </Box>
                            </Box>

                            <Box
                                as="h4"
                                fontWeight="semibold"
                                isTruncated
                                lineHeight="tight"
                                mt="1"
                            >
                                {review.content}
                            </Box>

<<<<<<< HEAD
        </Box>
>>>>>>> adding reviews (not finished) && adding Rating for stars
=======
                            <Box alignItems="center" d="flex" mt="2">
                                <Rating value={data.latestReviews ? review.rating : 2.5} />
                            </Box>
                            <Box
                                color="gray.500"
                                fontSize="xs"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                ml="1"
                                textTransform="uppercase"
                            >
                                   Review from: {review.patient.firstname} &bull; {review.patient.lastname}
                            </Box>
                            
                        </Box>
                    </Box>
                </Box>
            ))
        }
>>>>>>> impl of review box
        
    </>
    );
}

function Review() {
    const [
        data,
        loadQuery,
        dispose,
    ] = useQueryLoader<ReviewQueryType>(ReviewQuery);

    const error = useRef<ErrorBoundary>(null);
    useEffect(() => {
        error.current?.reset();
        loadQuery({ });
        return () => {
            dispose();
        };
    }, [dispose, loadQuery]);

    return (
        <Suspense boundaryRef={error}>
<<<<<<< HEAD
<<<<<<< HEAD
            {data != null && <LoadedReview data={data} />}
=======
            {data != null && <LoadedReview data={data}/>}
>>>>>>> adding reviews (not finished) && adding Rating for stars
=======
            {data != null && <LoadedReview data={data} />}
>>>>>>> impl of review box
        </Suspense>
    );
}

export default Review;
