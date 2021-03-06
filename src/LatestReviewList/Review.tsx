import type { ReviewQuery as ReviewQueryType } from './__generated__/ReviewQuery.graphql';
import type { ErrorBoundary } from 'react-error-boundary';
import type { PreloadedQuery } from 'react-relay';

import ReviewQuery from './__generated__/ReviewQuery.graphql';

import React, { useEffect, useRef } from 'react';
import { Badge, Box, Grid } from '@chakra-ui/layout';

import { usePreloadedQuery, useQueryLoader } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Rating from 'Rating';
import Suspense from '../Suspense';

type LoadedProps = {
    data: PreloadedQuery<ReviewQueryType>,
    color: string,
}
type Props = {
    color: string,
}

function LoadedReview(props: LoadedProps) {
    const data = usePreloadedQuery(
        graphql`
            query ReviewQuery {
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
            }
        `,
        props.data,
    );

    return (<>
        <Grid gap={1} overflow='auto' templateColumns="repeat(3, 1fr)">
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
                                    <Rating color={props.color} value={data.latestReviews ? review.rating : 2.5}/>
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
        </Grid>
        
    </>
    );
}

function Review(props:Props) {
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
            {data != null && <LoadedReview color={props.color} data={data}/>}
        </Suspense>
    );
}

export default Review;
