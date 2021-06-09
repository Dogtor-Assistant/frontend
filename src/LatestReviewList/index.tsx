
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

import Review from './Review';
=======
import { Grid, List } from '@chakra-ui/react';
=======
>>>>>>> removing unused-vars

import Review from './Review';
<<<<<<< HEAD
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
=======
>>>>>>> removing unused-vars

function ReviewList() {
    
    return(<>
<<<<<<< HEAD
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
=======
        <Review/>
>>>>>>> removing unused-vars
    </>);
}
export default ReviewList;
