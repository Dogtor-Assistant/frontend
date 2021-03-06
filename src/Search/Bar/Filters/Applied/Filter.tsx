import type { FilterType } from 'Search/types';

import React from 'react';

import CityPicker from '../Common/CityPicker';
import MinRatingPicker from '../Common/MinRatingPicker';
import NearbyPicker from '../Common/NearbyPicker';
import SpecialityPicker from '../Common/SpecialityPicker';

type Props = {
    type: FilterType,
}

function Filter({ type }: Props) {
    switch (type) {
    case 'Cities':
        return <CityPicker />;
    case 'Specialities':
        return <SpecialityPicker />;
    case 'Rating':
        return <MinRatingPicker />;
    case 'Nearby':
        return <NearbyPicker />;
    }
}

export default Filter;
