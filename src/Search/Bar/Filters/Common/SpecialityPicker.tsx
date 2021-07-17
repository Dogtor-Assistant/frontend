import React from 'react';

import SearchMultiSelectPicker from './SearchMultiSelectPicker';

import { useSpecialities } from 'backendConstants';

function SpecialityPicker() {
    const specialities = useSpecialities();

    return (
        <SearchMultiSelectPicker
            name="specialities"
            parameter="specialities"
            placeholder="Search for Specialities"
            values={specialities}
        />
    );
}

export default SpecialityPicker;
