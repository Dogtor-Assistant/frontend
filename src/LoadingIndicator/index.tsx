import React from 'react';
import Lottie from 'react-lottie';
import { useColorModeValue } from '@chakra-ui/react';

import dark from './dark.json';
import light from './light.json';

type Props = {
    size?: number,
}

function LoadingIndicator(props: Props) {
    const size = props.size ?? 120;
    const animationData = useColorModeValue(light, dark);
    return (
        <Lottie
            height={size}
            options={{
                animationData,
                autoplay: true,
                loop: true,
            }}
            width={size}
        />
    );
}

export default LoadingIndicator;
