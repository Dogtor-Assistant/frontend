import type { MultiSelectFilterTypes } from 'Search/context';

import React from 'react';
import { useMemo } from 'react';
import { Button, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

import { useMultiSelectFilter } from 'Search/context';
import SelectPopover from 'SelectPopover';

import useDisclosureOnByDefault from './useDisclosureOnByDefault';

const PICKER_DEBOUNCE_TIME = 1000;

type Props<
    K extends keyof MultiSelectFilterTypes
> = {
    name?: string,
    parameter: K,
    values: readonly MultiSelectFilterTypes[K][],
    placeholder?: string,
}

function SearchMultiSelectPicker<
    K extends keyof MultiSelectFilterTypes
>({ parameter, name, values, placeholder }: Props<K>) {
    const [selected, add, remove, clear] = useMultiSelectFilter(parameter);

    const options = useMemo(() => values.map(value => ({ label: value, value })), [values]);
    const selectedOptions = useMemo(() => {
        if (selected == null) {
            return [];
        }
        return Array.from(selected).map(value => ({ label: value, value }));
    }, [selected]);

    const selectedLabel = useMemo(() => selected != null ? Array.from(selected).join(', ') : 'None', [selected]);
    const openByDefault = useMemo(() => selected == null, [selected]);
    const { isOpen, onClose, onOpen } = useDisclosureOnByDefault(openByDefault);

    return (
        <SelectPopover
            actions={
                [
                    {
                        action: () => clear(true),
                        icon: <CloseIcon />,
                        label: 'Clear',
                    },
                ]
            }
            isOpen={isOpen}
            isOptionSelected={({ value }) => selected?.has(value) ?? false}
            name={name}
            onChange={(_, meta) => {
                switch (meta.action) {
                case 'clear':
                    clear(true);
                    break;
                case 'select-option':
                    if (meta.option != null) {
                        add(meta.option.value, PICKER_DEBOUNCE_TIME);
                    }
                    break;
                case 'deselect-option':
                    if (meta.option != null) {
                        remove(meta.option.value, PICKER_DEBOUNCE_TIME);
                    }
                    break;
                    
                case 'remove-value':
                case 'pop-value':
                    if (meta.removedValue != null) {
                        remove(meta.removedValue.value, PICKER_DEBOUNCE_TIME);
                    }
                    break;
                case 'create-option':
                    break;
                }
            }}
            onClose={onClose}
            onOpen={onOpen}
            options={options}
            placeholder={placeholder}
            size="xs"
            value={selectedOptions}
        >
            
            <Button mr="-px">
                <Text>
                    {name}: {selectedLabel}
                </Text>
            </Button>
        </SelectPopover>
    );
}

export default SearchMultiSelectPicker;
