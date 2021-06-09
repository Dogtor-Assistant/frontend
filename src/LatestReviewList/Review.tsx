import type { ReviewQuery as ReviewQueryType } from './__generated__/ReviewQuery.graphql';
import type { ErrorBoundary } from 'react-error-boundary';
import type { PreloadedQuery } from 'react-relay';

import ReviewQuery from './__generated__/ReviewQuery.graphql';

import React, { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/layout';

import { usePreloadedQuery, useQueryLoader } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Rating from 'Rating';
import Suspense from '../Suspense';

type LoadedProps = {
    data: PreloadedQuery<ReviewQueryType>
}

type Props = {
    
}

function LoadedReview(props: LoadedProps) {
    const data = usePreloadedQuery(
        graphql`
            query ReviewQuery {
                 greeting
            }
        `,
        props.data,
    );

    return (<>
        <p>{data.greeting}</p>
        <Box p="6">
                        
            <Rating value={4}/>

        </Box>
        
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
            {data != null && <LoadedReview data={data}/>}
        </Suspense>
    );
}

export default Review;
