
import React from 'react';
import { Grid, List } from '@chakra-ui/react';

import Rating from 'Rating';
import Review from './Review';
type Props = {
  review: ReviewType
};

type ReviewType = {
    id?: string,
    rating?: number,
    doctor?: string | undefined,
    patient: string | undefined
    content: string
}

function ReviewList() {
    
    return(<>

    </>);
}
export default ReviewList;
