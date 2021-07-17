import React from 'react';
import { useMemo } from 'react';
import { FormControl } from '@chakra-ui/react';

import { useCities } from 'Search/context';

import { useCities as useAllCities } from 'backendConstants';
import MultiSelect from 'external/select';

function CityPicker() {
    const allCities = useAllCities();
    const [selected, add, remove, clear] = useCities();

    const options = useMemo(() => allCities.map(city => ({ label: city, value: city })), [allCities]);
    const selectedOptions = useMemo(() => {
        if (selected == null) {
            return [];
        }
        return Array.from(selected).map(city => ({ label: city, value: city }));
    }, [selected]);

    return (
        <FormControl>
            <MultiSelect
                closeMenuOnSelect={false}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                /* @ts-ignore */
                isMulti
                isOptionSelected={({ value }) => selected?.has(value) ?? false}
                name="cities"
                onChange={(_, meta) => {
                    switch (meta.action) {
                    case 'clear':
                        clear(true);
                        break;
                    case 'select-option':
                        if (meta.option != null) {
                            add(meta.option.value, true);
                        }
                        break;
                    case 'deselect-option':
                        if (meta.option != null) {
                            remove(meta.option.value, true);
                        }
                        break;
                    
                    case 'remove-value':
                    case 'pop-value':
                        if (meta.removedValue != null) {
                            remove(meta.removedValue.value, true);
                        }
                        break;
                    case 'create-option':
                        break;
                    }
                }}
                options={options}
                placeholder="Select a City"
                size="lg"
                value={selectedOptions}
            />
        </FormControl>
    );
}

export default CityPicker;
