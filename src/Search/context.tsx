
import type { ReactNode } from 'react';

import React, {
    createContext,
    useCallback,
    useContext,
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
    apply: () => void,
    update: (partial: Partial<SearchArguments>) => void,
}

const emptySearchArguments: SearchArguments = {
    cities: null,
    query: null,
    specialities: null,
};

const Context = createContext<ContextType>({
    applied: emptySearchArguments,
    apply: () => { /* np-op */},
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

    const update = useCallback((partial: Partial<SearchArguments>) => {
        setCurrent(value => {
            return {
                ...value,
                ...partial,
            };
        });
    }, [setCurrent]);

    const apply = useCallback(() => {
        setApplied(current);
    }, [setApplied, current]);

    return (
        <Context.Provider
            value={{
                applied,
                apply,
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

export function useApply() {
    const { apply } = useContext(Context);
    return apply;
}

export function useForcedUpdate() {
    const { apply, update } = useContext(Context);
    const forcedUpdate = useCallback(
        (partial: Partial<SearchArguments>) => {
            update(partial);
            apply();
        },
        [update, apply],
    );
    return forcedUpdate;
}
