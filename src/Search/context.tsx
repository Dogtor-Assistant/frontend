
import type { ReactNode } from 'react';

import React, {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';

export type SearchArguments = {
    readonly query: string | null,
    readonly cities: readonly string[] | null,
    readonly specialities: readonly string[] | null,
}

type ContextType = {
    applied: SearchArguments,
    current: SearchArguments,
    update: (partial: Partial<SearchArguments>, force?: true) => void,
}

const emptySearchArguments: SearchArguments = {
    cities: null,
    query: null,
    specialities: null,
};

const Context = createContext<ContextType>({
    applied: emptySearchArguments,
    current: emptySearchArguments,
    update: () => { /* np-op */},
});

type Props = {
    initial?: SearchArguments,
    children: ReactNode[] | ReactNode | null,
}

export function SearchContextProvider({ initial, children }: Props) {
    const [applied, setApplied] = useState(initial ?? emptySearchArguments);
    const [current, setCurrent] = useState(initial ?? emptySearchArguments);

    const update = useCallback((partial: Partial<SearchArguments>, force?: true) => {
        const value = {
            ...current,
            ...partial,
        };
        setCurrent(value);
        if (force) {
            setApplied(value);
        }
    }, [current, setCurrent, setApplied]);

    return (
        <Context.Provider
            value={{
                applied,
                current,
                update,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export function useAppliedSearchArguments() {
    const { applied } = useContext(Context);
    return applied;
}

export function useCurrentSearchArguments() {
    const { current } = useContext(Context);
    return current;
}

export function useUpdate() {
    const { update } = useContext(Context);
    return update;
}

type MultiSelectFilterHookType<T> = [
    Set<T> | null,
    (value: T) => void,
    (value: T) => void,
]
type MultiSelectFilterTypeKeys = {
    [P in keyof SearchArguments]: SearchArguments[P] extends ReadonlyArray<infer U> | null ? U : never
};

type MultiSelectFilterTypes = Pick<MultiSelectFilterTypeKeys, {
    [Key in keyof MultiSelectFilterTypeKeys]: MultiSelectFilterTypeKeys[Key] extends never ? never : Key
}[keyof MultiSelectFilterTypeKeys]>;

function useMultiSelectFilter<
    K extends keyof MultiSelectFilterTypes
>(key: K): MultiSelectFilterHookType<MultiSelectFilterTypes[K]> {
    const { current, update } = useContext(Context);
    const values = current[key];
    const set = useMemo(() => values && new Set(values), [values]);
    const add = useCallback((newValue: MultiSelectFilterTypes[K]) => {
        const currentValues: ReadonlyArray<MultiSelectFilterTypes[K]> = values ?? [];
        if (currentValues.includes(newValue)) {
            return;
        }

        update({
            [key]: [...currentValues, newValue],
        });
    }, [values, update, key]);

    const remove = useCallback((value: MultiSelectFilterTypes[K]) => {
        const currentValues: ReadonlyArray<MultiSelectFilterTypes[K]> = values ?? [];
        const newValues = currentValues.filter(item => item !== value);
        update({
            [key]: newValues.length > 0 ? newValues : null,
        });
    }, [values, update, key]);

    return [set, add, remove];
}

type MultiSelectFilterValueHookType = [
    boolean,
    (newValue: boolean) => void,
]

function useMultiSelectFilterValue<
    K extends keyof MultiSelectFilterTypes
>(key: K, value: MultiSelectFilterTypes[K]): MultiSelectFilterValueHookType {
    const [set, add, remove] = useMultiSelectFilter(key);
    const included = useMemo(() => set?.has(value) ?? false, [set, value]);
    const setIncluded = useCallback((included: boolean) => {
        if (included) {
            add(value);
        } else {
            remove(value);
        }
    }, [value, add, remove]);

    return [
        included,
        setIncluded,
    ];
}

export function useCities() {
    return useMultiSelectFilter('cities');
}

export function useCity(city: string) {
    return useMultiSelectFilterValue('cities', city);
}

export function useSpecialities() {
    return useMultiSelectFilter('specialities');
}

export function useSpeciality(speciality: string) {
    return useMultiSelectFilterValue('specialities', speciality);
}
