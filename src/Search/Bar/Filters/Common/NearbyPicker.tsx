import React, { useMemo } from 'react';
import {
    Button,
    ButtonGroup,
    IconButton,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Text,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

import { useNearbyDistanceInMeters, useNearbyLabel } from 'Search/context';

function NearbyPicker() {
    const nearbyLabel = useNearbyLabel();
    const [distance, setDistance] = useNearbyDistanceInMeters();
    const distanceLabel = useMemo(() => {
        if (nearbyLabel == null || distance == null) {
            return 'Nearby: None';
        }

        if (distance > 750) {
            const kilometers = (distance / 1000).toFixed(1);
            return `Nearby ${nearbyLabel} (${kilometers}km)`;
        }
         
    }, [nearbyLabel, distance]);

    return (
        <Popover
            closeOnBlur
            closeOnEsc
            isLazy
            lazyBehavior="unmount"
            matchWidth
            returnFocusOnClose={false}
        >
            <ButtonGroup isAttached size="sm" variant="outline">
                <PopoverTrigger>
                    <Button>
                        {distanceLabel}
                    </Button>
                </PopoverTrigger>
                
                <IconButton
                    aria-label="clear"
                    icon={<CloseIcon />}
                    onClick={() => setDistance(null, true)}
                />
            </ButtonGroup>
            <PopoverContent>
                <PopoverArrow />
                <PopoverBody>
                    <Text>
                        Hello World
                    </Text>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
}

export default NearbyPicker;
