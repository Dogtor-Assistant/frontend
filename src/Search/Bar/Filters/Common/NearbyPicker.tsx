import React, { useMemo } from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    IconButton,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    Text,
    VStack,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

import { useNearbyDistanceInMeters, useNearbyLabel } from 'Search/context';

function NearbyPicker() {
    const nearbyLabel = useNearbyLabel();
    const [distance, setDistance] = useNearbyDistanceInMeters();

    const distanceLabel = useMemo(() => {
        if (distance == null) {
            return 'None';
        }

        if (distance < 1000) {
            return `${distance.toFixed(0)} m`;
        }

        const kilometers = distance / 1000;

        if (distance < 5_000) {
            return `${kilometers.toFixed(2)} km`;
        }

        if (distance < 10_000) {
            return `${kilometers.toFixed(1)} km`;
        }

        return `${kilometers.toFixed(0)} km`;
    }, [distance]);

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
                        Near: {nearbyLabel ?? 'None'}
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
                    <VStack align="start" p={4}>
                        <Text
                            fontSize="md"
                            fontWeight="semibold"
                        >
                            Distance: {distanceLabel}
                        </Text>
                        <Box paddingLeft={4} paddingRight={4} w="100%">
                            <Slider
                                isDisabled={distance == null}
                                max={100_000}
                                min={500}
                                onChange={value => setDistance(value, 500)}
                                step={250}
                                value={distance ?? 3_000}
                            >
                                <SliderTrack bg="red.100">
                                    <Box position="relative" right={10} />
                                    <SliderFilledTrack bg="tomato" />
                                </SliderTrack>
                                <SliderThumb boxSize={6} />
                            </Slider>
                        </Box>
                    </VStack>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
}

export default NearbyPicker;
