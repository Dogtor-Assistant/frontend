
import type { Dispatch, ReactNode } from 'react';

import { useMemo } from 'react';
import React, { useContext } from 'react';

import useLocalStorage from 'useLocalStorage';

import { LOCAL_BACKEND_BASE_URL, PRODUCTION_BACKEND_BASE_URL } from 'utils/constants';

interface Props {
    children: ReactNode | ReactNode[] | null,
}

export type BackendConfig = 'Production' | 'Local';

type ConfigContextType = {
    backendConfig: BackendConfig
    setBackendConfig: Dispatch<BackendConfig>,
}

const ConfigContext = React.createContext<ConfigContextType>({
    backendConfig: 'Production',
    setBackendConfig: () => { /* no-op */ },
});

export function ConfigProvider({ children }: Props) {
    const [backendConfig, setBackendConfig] = useLocalStorage<BackendConfig>('backend_config', 'Production');
    
    return (
        <ConfigContext.Provider
            value={{
                backendConfig,
                setBackendConfig,
            }}
        >
            {children}
        </ConfigContext.Provider>
    );
}

export function useBackendConfig(): [BackendConfig, Dispatch<BackendConfig>] {
    const { backendConfig, setBackendConfig } = useContext(ConfigContext);
    return [backendConfig, setBackendConfig];
}

export function useBackendBaseURL(): string {
    const { backendConfig } = useContext(ConfigContext);
    const url = useMemo(() => {
        switch (backendConfig) {
        case 'Production':
            return PRODUCTION_BACKEND_BASE_URL;
        case 'Local':
            return LOCAL_BACKEND_BASE_URL;
        }
    }, [backendConfig]);

    return url;
}

export function useBackendURL(...pathComponents: (string | number)[]): string {
    const base = useBackendBaseURL();
    const path = useMemo(() => {
        return pathComponents.map(component => component.toString()).join('/');
    }, [pathComponents]);

    const url = useMemo(() => {
        return `${base}/${path}`;
    }, [base, path]);
    
    return url;
}
