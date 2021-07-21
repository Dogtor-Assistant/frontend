import type { FilterType } from 'Search/types';

import React from 'react';
import { useMemo } from 'react';
import { IconButton, useDisclosure } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import { useAddFilter, useCurrentFilterTypes } from 'Search/context';
import { FILTER_TYPES } from 'Search/types';
import SelectPopover from 'SelectPopover';

const NON_SELECTABLE_TYPES: FilterType[] = ['Nearby'];
const SELECTABLE_FILTER_TYPES = FILTER_TYPES.filter(type => !NON_SELECTABLE_TYPES.includes(type));

function FilterPicker() {
    const currentFilters = useCurrentFilterTypes();
    const addFilter = useAddFilter();
    const availableFilters = useMemo(() => {
        return SELECTABLE_FILTER_TYPES.
            filter(type => !currentFilters.includes(type)).
            map(type => type as string).
            map(type => ({ label: type, value: type }));
    }, [currentFilters]);

    const { onOpen, onClose, isOpen } = useDisclosure();

    if (availableFilters.length < 1) {
        return null;
    }

    return (
        <SelectPopover
            isMulti={false}
            isOpen={isOpen}
            isOptionSelected={() => false}
            name="AddFilter"
            onChange={(option, { action }) => {
                switch (action) {
                case 'select-option':
                    if (option != null) {
                        const casted = option as { value: FilterType };
                        addFilter(casted.value);
                        onClose();
                    }
                    break;
                case 'clear':
                case 'deselect-option':
                case 'remove-value':
                case 'pop-value':
                case 'create-option':
                    break;
                }
            }}
            onClose={onClose}
            onOpen={onOpen}
            options={availableFilters}
            placeholder="Add a Filter"
            size="xs"
        >
            <IconButton
                aria-label="Add Filter"
            >
                <AddIcon />
            </IconButton>
        </SelectPopover>
    );
}

export default FilterPicker;
