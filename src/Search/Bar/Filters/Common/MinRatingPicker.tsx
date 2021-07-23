import React from 'react';
import { useMemo } from 'react';
import {
    Button,
    ButtonGroup,
    HStack,
    IconButton,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Radio,
    RadioGroup,
    Stack,
    Text,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

import Rating from 'Rating';
import { useCurrentSearchArguments, useUpdate } from 'Search/context';

import useDisclosureOnByDefault from './useDisclosureOnByDefault';

const options = [5, 4, 3, 2, 1];

function MinRatingPicker() {
    const { minRating } = useCurrentSearchArguments();
    const update = useUpdate();

    const ratingLabel = useMemo(() => {
        if (minRating != null) {
            return `${minRating.toFixed(0)}+`;
        }

        return 'None';
    }, [minRating]);

    const { isOpen, onClose, onOpen } = useDisclosureOnByDefault(minRating == null);

    return (
        <Popover
            closeOnBlur
            closeOnEsc
            isLazy
            isOpen={isOpen}
            lazyBehavior="unmount"
            matchWidth
            onClose={onClose}
            onOpen={onOpen}
            returnFocusOnClose={false}
        >
            <ButtonGroup isAttached size="sm" variant="outline">
                <PopoverTrigger>
                    <Button>
                        Rating: {ratingLabel}
                    </Button>
                </PopoverTrigger>
                
                <IconButton
                    aria-label="clear"
                    icon={<CloseIcon />}
                    onClick={() => update({ minRating: null }, true)}
                />
            </ButtonGroup>
            <PopoverContent>
                <PopoverArrow />
                <PopoverBody>
                    <RadioGroup
                        onChange={selected => update({ minRating: parseInt(selected) }, true)}
                        value={minRating?.toString() ?? undefined}
                    >
                        <Stack>
                            {
                                options.map(rating => {
                                    return (
                                        <Radio key={rating.toString()} value={rating.toString()}>
                                            <HStack>
                                                <Rating value={rating}/>
                                                <Text>
                                                    or higher
                                                </Text>
                                            </HStack>
                                        </Radio>
                                    );
                                })
                            }
                        </Stack>
                    </RadioGroup>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
}

export default MinRatingPicker;
