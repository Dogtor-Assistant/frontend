
import type { Dispatch, ReactNode } from 'react';

import { useMemo } from 'react';
import React, { useContext } from 'react';

import useLocalStorage from 'useLocalStorage';

import { LOCAL_BACKEND_BASE_URL, PRODUCTION_BACKEND_BASE_URL } from 'utils/constants';

interface Props {
    children: ReactNode | ReactNode[] | null,
}

export type ConfigKind = 'Production' | 'Local';

type ConfigContextType = {
    config: ConfigKind
    setConfig: Dispatch<ConfigKind>,
}

const ConfigContext = React.createContext<ConfigContextType>({
    config: 'Production',
    setConfig: () => { /* no-op */ },
});

export function ConfigProvider({ children }: Props) {
    const [config, setConfig] = useLocalStorage<ConfigKind>('config_kind', 'Production');
    
    return (
        <ConfigContext.Provider
            value={{
                config,
                setConfig,
            }}
        >
            {children}
        </ConfigContext.Provider>
    );
}

export function useConfig(): [ConfigKind, Dispatch<ConfigKind>] {
    const { config, setConfig } = useContext(ConfigContext);
    return [config, setConfig];
}

export function useBaseURL(): string {
    const { config } = useContext(ConfigContext);
    const url = useMemo(() => {
        switch (config) {
        case 'Production':
            return PRODUCTION_BACKEND_BASE_URL;
        case 'Local':
            return LOCAL_BACKEND_BASE_URL;
        }
    }, [config]);

    return url;
}

export function useURL(...pathComponents: (string | number)[]): string {
    const base = useBaseURL();
    const path = useMemo(() => {
        return pathComponents.map(component => component.toString()).join('/');
    }, [pathComponents]);

    const url = useMemo(() => {
        return `${base}/${path}`;
    }, [base, path]);
    
    return url;
}
