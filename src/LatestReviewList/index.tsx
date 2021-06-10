
import React from 'react';
import { useColorModeValue } from '@chakra-ui/color-mode';

import Review from './Review';

function ReviewList() {
    const color = useColorModeValue('dark', 'gray.800');
    
    return(<>
        <Review color={color}/>
    </>);
}
export default ReviewList;
