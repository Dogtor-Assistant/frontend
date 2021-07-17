import type { MultiSelectFilterTypes } from 'Search/context';

import React from 'react';
import { useMemo } from 'react';
import { FormControl } from '@chakra-ui/react';

import { useMultiSelectFilter } from 'Search/context';

import MultiSelect from 'external/select';

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

    return (
        <FormControl>
            <MultiSelect
                closeMenuOnSelect={false}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                /* @ts-ignore */
                isMulti
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
                options={options}
                placeholder={placeholder}
                size="lg"
                value={selectedOptions}
            />
        </FormControl>
    );
}

export default SearchMultiSelectPicker;
