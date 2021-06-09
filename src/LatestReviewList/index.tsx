
import React from 'react';
<<<<<<< HEAD

import Review from './Review';
=======
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
>>>>>>> adding reviews (not finished) && adding Rating for stars

function ReviewList() {
    
    return(<>
<<<<<<< HEAD
<<<<<<< HEAD
        <Review/>
=======
        <Grid>
            <Review />
        </Grid>
=======
>>>>>>> impl of review box

>>>>>>> adding reviews (not finished) && adding Rating for stars
    </>);
}
export default ReviewList;
