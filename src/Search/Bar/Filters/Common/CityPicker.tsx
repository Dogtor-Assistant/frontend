import React from 'react';

import SearchMultiSelectPicker from './SearchMultiSelectPicker';

import { useCities } from 'backendConstants';

function CityPicker() {
    const allCities = useCities();

    return (
        <SearchMultiSelectPicker
            name="cities"
            parameter="cities"
            placeholder="Search in Cities"
            values={allCities}
        />
    );
}

export default CityPicker;
