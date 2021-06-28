
import type { ReactNode } from 'react';

import React, { createContext, useCallback, useState } from 'react';

type SearchArguments = {
    query: string | null,
    cities: string[] | null,
    specialities: string[] | null,
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
