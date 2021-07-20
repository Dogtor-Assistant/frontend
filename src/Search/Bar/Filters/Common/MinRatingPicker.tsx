import React from 'react';
import { useMemo } from 'react';
import {
    Button,
    ButtonGroup,
    IconButton,
    Popover,
    PopoverArrow,
    PopoverContent,
    PopoverTrigger,
    Text,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

import { useCurrentSearchArguments, useUpdate } from 'Search/context';

import useDisclosureOnByDefault from './useDisclosureOnByDefault';

function MinRatingPicker() {
    const { minRating } = useCurrentSearchArguments();
    const update = useUpdate();

    const ratingLabel = useMemo(() => {
        if (minRating != null) {
            return `${minRating.toFixed(0)} or higher`;
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
                <Text>
                    Hello World
                </Text>
            </PopoverContent>
        </Popover>
    );
}

export default MinRatingPicker;
