import type { userQuery as userQueryType } from './__generated__/userQuery.graphql';
import type { ReactNode } from 'react';
import type { ErrorBoundary } from 'react-error-boundary';
import type { PreloadedQuery } from 'react-relay';

import userQuery from './__generated__/userQuery.graphql';

import React, { useContext, useEffect, useRef } from 'react';

import { usePreloadedQuery, useQueryLoader } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Suspense from 'Suspense';

type LoadedProps = {
    data: PreloadedQuery<userQueryType>,
    children: ReactNode[] | ReactNode | null,
}

type Props = {
    children: ReactNode[] | ReactNode | null,
}

type UserContextType = {
    id?: string | undefined,
    firstname?: string | undefined,
    lastname?: string | undefined,
    isPatient: boolean,
    isDoctor: boolean,
    patientId?: string | undefined,
    doctorId?: string | undefined,
    cities: readonly string[],
    specialities: readonly string[],
}

const UserContext = React.createContext<UserContextType>({
    cities: [],
    isDoctor: false,
    isPatient: false,
    specialities: [],
});

function LoadedUserProvider(props: LoadedProps) {
    const data = usePreloadedQuery(
        graphql`
            query userQuery {
                me {
                    id
                    firstname
                    lastname
                    patientProfile {
                        __typename
                        id
                    }
                    doctorProfile {
                        __typename
                        id
                    }
                }

                cities
                specialities
            }
        `,
        props.data,
    );

    return (
        <UserContext.Provider
            value={{
                cities: data.cities,
                doctorId: data.me?.doctorProfile != null ? data.me?.doctorProfile.id : undefined,
                firstname: data.me?.firstname,
                id: data.me?.id,
                isDoctor: data.me?.doctorProfile != null,
                isPatient: data.me?.patientProfile != null,
                lastname: data.me?.lastname,
                patientId: data.me?.patientProfile != null ? data.me?.patientProfile.id : undefined,
                specialities: data.specialities,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
}

export function UserDataProvider(props: Props) {
    const [
        data,
        loadQuery,
        dispose,
    ] = useQueryLoader<userQueryType>(userQuery);

    const error = useRef<ErrorBoundary>(null);
    useEffect(() => {
        error.current?.reset();
        loadQuery({ });
        return () => {
            dispose();
        };
    }, [dispose, loadQuery]);

    return (
        <Suspense boundaryRef={error}>
            {data != null && (
                <LoadedUserProvider data={data}>
                    {props.children}
                </LoadedUserProvider>
            )}
        </Suspense>
    );
}

export function useFirstName(): string | undefined {
    const { firstname } = useContext(UserContext);
    return firstname;
}

export function useLastName(): string | undefined {
    const { lastname } = useContext(UserContext);
    return lastname;
}

export function useFullName(): string | undefined {
    const { firstname, lastname } = useContext(UserContext);
    if (firstname != null && lastname != null) {
        return `${firstname} ${lastname}`;
    }
}

export function useUserId(): string | undefined {
    const { id } = useContext(UserContext);
    return id;
}

export function useIsDoctor(): boolean {
    const { isDoctor } = useContext(UserContext);
    return isDoctor;
}

export function useIsPatient(): boolean {
    const { isPatient } = useContext(UserContext);
    return isPatient;
}

export function useDoctorId(): string | undefined {
    const { doctorId } = useContext(UserContext);
    return doctorId;
}

export function usePatientId(): string | undefined {
    const { patientId } = useContext(UserContext);
    return patientId;
}

export function useCities() {
    const { cities } = useContext(UserContext);
    return cities;
}

export function useSpecialities() {
    const { specialities } = useContext(UserContext);
    return specialities;
}
