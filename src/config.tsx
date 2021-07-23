
import type { Dispatch, ReactNode } from 'react';
import type { BACKEND_CONFIGS } from 'utils/constants';

import { useMemo } from 'react';
import React, { useContext } from 'react';

import useLocalStorage from 'useLocalStorage';

import {
    LOCAL_BACKEND_HOST,
    LOCAL_BACKEND_SSL,
    PRODUCTION_BACKEND_HOST,
    PRODUCTION_BACKEND_SSL,
    STAGING_BACKEND_HOST,
    STAGING_BACKEND_SSL,
} from 'utils/constants';

interface Props {
    children: ReactNode | ReactNode[] | null,
}

export type BackendConfig = typeof BACKEND_CONFIGS[number]

type ConfigContextType = {
    backendConfig: BackendConfig,
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

type BackendProtocol = 'http' | 'ws';

function scheme(protocol: BackendProtocol, secure: boolean) {
    if (secure) {
        return `${protocol}s`;
    }

    return protocol;
}

function schemeForConfig(config: BackendConfig, protocol: BackendProtocol) {
    switch (config) {
    case 'Production':
        return scheme(protocol, PRODUCTION_BACKEND_SSL);
    case 'Staging':
        return scheme(protocol, STAGING_BACKEND_SSL);
    case 'Local':
        return scheme(protocol, LOCAL_BACKEND_SSL);
    }
}

function hostname(config: BackendConfig) {
    switch (config) {
    case 'Production':
        return PRODUCTION_BACKEND_HOST;
    case 'Staging':
        return STAGING_BACKEND_HOST;
    case 'Local':
        return LOCAL_BACKEND_HOST;
    }
}

export function useBackendBaseURL(protocol: BackendProtocol = 'http'): string {
    const { backendConfig } = useContext(ConfigContext);
    const url = useMemo(() => {
        const scheme = schemeForConfig(backendConfig, protocol);
        const host = hostname(backendConfig);
        return `${scheme}://${host}`;
    }, [backendConfig, protocol]);

    return url;
}

export function useBackendURL(
    protocol: BackendProtocol,
    ...pathComponents: (string | number)[]
): string {
    const base = useBackendBaseURL(protocol);
    const path = useMemo(() => {
        return pathComponents.map(component => component.toString()).join('/');
    }, [pathComponents]);

    const url = useMemo(() => {
        return `${base}/${path}`;
    }, [base, path]);
    
    return url;
}
