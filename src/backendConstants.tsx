import type { backendConstants_data$key } from './__generated__/backendConstants_data.graphql';
import type { ReactNode } from 'react';

import React, { useContext } from 'react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
    data: backendConstants_data$key,
    children: ReactNode[] | ReactNode | null,
}

type BackendConstantsContextType = {
    cities: readonly string[],
    specialities: readonly string[],
}

const BackendConstantsContext = React.createContext<BackendConstantsContextType>({
    cities: [],
    specialities: [],
});

export function BackendConstantsProvider(props: Props) {
    const data = useFragment(
        graphql`
            fragment backendConstants_data on Query {
                cities
                specialities
            }
        `,
        props.data,
    );

    return (
        <BackendConstantsContext.Provider
            value={{
                cities: data.cities,
                specialities: data.specialities,
            }}
        >
            {props.children}
        </BackendConstantsContext.Provider>
    );
}

export function useCities() {
    const { cities } = useContext(BackendConstantsContext);
    return cities;
}

export function useSpecialities() {
    const { specialities } = useContext(BackendConstantsContext);
    return specialities;
}
