
import type { FilterType } from './types';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

import { FILTER_TYPES } from './types';

type Nearby = {
    readonly label: string,
    readonly coordinates: {
        readonly latitude: number,
        readonly longitude: number,
    },
    readonly maximumDistanceInMeters: number,
}

export type SearchArguments = {
    readonly query: string | null,
    readonly cities: readonly string[] | null,
    readonly specialities: readonly string[] | null,
    readonly minRating: number | null,
    readonly nearby: Nearby | null,
}

type Force = true | number

type ContextType = {
    filterTypes: FilterType[],
    lastFetchTime: number,
    applied: SearchArguments,
    current: SearchArguments,
    addFilter: (type: FilterType) => void,
    shouldShowBar: [boolean, Dispatch<SetStateAction<boolean>>],
    update: (partial: Partial<SearchArguments>, force?: Force) => void,
}

export const EMPTY_SEARCH_ARGUMENTS: SearchArguments = {
    cities: null,
    minRating: null,
    nearby: null,
    query: null,
    specialities: null,
};

const Context = createContext<ContextType>({
    addFilter: () => { /* no-op */ },
    applied: EMPTY_SEARCH_ARGUMENTS,
    current: EMPTY_SEARCH_ARGUMENTS,
    filterTypes: [],
    lastFetchTime: 0,
    shouldShowBar: [true, () => { /* no-op */ }],
    update: () => { /* np-op */},
});

type Props = {
    initial?: SearchArguments,
    children: ReactNode[] | ReactNode | null,
}

function argumentsKeyForFilter(type: FilterType): (keyof SearchArguments) {
    switch (type) {
    case 'Cities':
        return 'cities';
    case 'Specialities':
        return 'specialities';
    case 'Rating':
        return 'minRating';
    }
}

function searchArgumentsIncludeFilter(searchArguments: SearchArguments, type: FilterType): boolean {
    return searchArguments[argumentsKeyForFilter(type)] != null;
}

export function SearchContextProvider({ initial, children }: Props) {
    const [lastFetchTime, setLastFetchTime] = useState(0);
    const [applied, setApplied] = useState(initial ?? EMPTY_SEARCH_ARGUMENTS);
    const [current, setCurrent] = useState(initial ?? EMPTY_SEARCH_ARGUMENTS);
    const timeout = useRef<NodeJS.Timeout | null>(null);
    const shouldShowBar = useState(true);
    
    const [filterTypes, setFilterTypes] = useState<FilterType[]>([]);

    const update = useCallback((partial: Partial<SearchArguments>, force?: Force) => {
        const value = {
            ...current,
            ...partial,
        };
        setCurrent(value);

        const newAdditionalFilters = FILTER_TYPES.filter(type => {
            return !filterTypes.includes(type) && searchArgumentsIncludeFilter(value, type);
        });

        const newFilters = [...filterTypes, ...newAdditionalFilters];

        if (force == null) {
            if (newFilters.length > 0) {
                setFilterTypes(newFilters);
            }
            return;
        }

        const filtersWithoutUnnecessaryOnes = newFilters.filter(filter => searchArgumentsIncludeFilter(value, filter));
        setFilterTypes(filtersWithoutUnnecessaryOnes);

        if (timeout.current != null) {
            clearTimeout(timeout.current);
        }
        
        switch (typeof force) {
        case 'boolean':
            setLastFetchTime(Date.now());
            setApplied(value);
            break;
        case 'number':
            timeout.current = setTimeout(() => {
                setLastFetchTime(Date.now());
                setApplied(value);
            }, force);
            break;
        }

    }, [current, setCurrent, setApplied, filterTypes, setFilterTypes]);

    const addFilter = useCallback((type: FilterType) => {
        setFilterTypes(filterTypes => {
            if (filterTypes.includes(type)) {
                return filterTypes;
            }

            return [...filterTypes, type];
        });
    }, [setFilterTypes]);

    useEffect(() => {
        return () => {
            if (timeout.current != null) {
                clearTimeout(timeout.current);
            }
        };
    }, []);

    return (
        <Context.Provider
            value={{
                addFilter,
                applied,
                current,
                filterTypes,
                lastFetchTime,
                shouldShowBar,
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

export function useShouldShowBar() {
    const { shouldShowBar } = useContext(Context);
    return shouldShowBar;
}

export function useLastFetchTime() {
    const { lastFetchTime } = useContext(Context);
    return lastFetchTime;
}

export function useAddFilter() {
    const { addFilter } = useContext(Context);
    return addFilter;
}

export function useCurrentFilterTypes() {
    const { filterTypes } = useContext(Context);
    return filterTypes;
}

export function useSearchQuery(force?: Force): [string, (value: string) => void] {
    const { current, update } = useContext(Context);
    const setQuery = useCallback((query: string) => {
        if (query === '') {
            update({ query: null }, force);
        } else {
            update({ query }, force);
        }
    }, [update, force]);

    return [current.query ?? '', setQuery];
}

export function useShouldShowBarValue(value: boolean) {
    const [shouldShowBar, setShouldShowBar] = useShouldShowBar();
    useEffect(() => {
        const previous = shouldShowBar;
        setShouldShowBar(value);
        return () => {
            setShouldShowBar(previous);
        };
    }, [value, shouldShowBar, setShouldShowBar]);
}

type MultiSelectFilterHookType<T> = [
    Set<T> | null,
    (value: T, force?: Force) => void,
    (value: T, force?: Force) => void,
    (force?: Force) => void,
]
type MultiSelectFilterTypeKeys = {
    [P in keyof SearchArguments]: SearchArguments[P] extends ReadonlyArray<infer U> | null ? U : never
};

export type MultiSelectFilterTypes = Pick<MultiSelectFilterTypeKeys, {
    [Key in keyof MultiSelectFilterTypeKeys]: MultiSelectFilterTypeKeys[Key] extends never ? never : Key
}[keyof MultiSelectFilterTypeKeys]>;

export function useMultiSelectFilter<
    K extends keyof MultiSelectFilterTypes
>(key: K): MultiSelectFilterHookType<MultiSelectFilterTypes[K]> {
    const { current, update } = useContext(Context);
    const values = current[key];
    const set = useMemo(() => values && new Set(values), [values]);
    const add = useCallback((newValue: MultiSelectFilterTypes[K], force?: Force) => {
        const currentValues: ReadonlyArray<MultiSelectFilterTypes[K]> = values ?? [];
        if (currentValues.includes(newValue)) {
            return;
        }

        update({
            [key]: [...currentValues, newValue],
        }, force);
    }, [values, update, key]);

    const remove = useCallback((value: MultiSelectFilterTypes[K], force?: Force) => {
        const currentValues: ReadonlyArray<MultiSelectFilterTypes[K]> = values ?? [];
        const newValues = currentValues.filter(item => item !== value);
        update({
            [key]: newValues.length > 0 ? newValues : null,
        }, force);
    }, [values, update, key]);

    const clear = useCallback((force?: Force) => {
        update({
            [key]: null,
        }, force);
    }, [key, update]);

    return [set, add, remove, clear];
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
