
import type { ReactNode } from 'react';

import React, { useCallback, useContext, useState } from 'react';

import useLocalStorage from 'useLocalStorage';

import { BACKEND_BASE_URL } from 'utils/constants';

interface Props {
    children: ReactNode | ReactNode[] | null,
}

type TokenType = {
    accessToken: string
    refreshToken: string
    expiresAt: number
}

type TokenResponse = {
    'access_token': string,
    'expires_in': number,
    'refresh_token': string,
}

type LoginContextType = {
    isLoggingIn: boolean
    isLoggedIn: boolean,
    token: () => Promise<string | null>,
    login: (username: string, password: string) => Promise<void>
    logout: () => void
}

const LoginContext = React.createContext<LoginContextType>({
    isLoggedIn: false,
    isLoggingIn: false,
    login: async () => { /* no-op */ },
    logout: () => { /* no-op */ },
    token: async () => null,
});

const TOKEN_URL = `${BACKEND_BASE_URL}/auth/token`;

async function token(params: Record<string, string>): Promise<TokenType> {
    const body = new URLSearchParams(params);
    const response = await fetch(
        TOKEN_URL,
        {
            body,
            method: 'POST',
        },
    );

    if (response.status !== 200) {
        throw `Unauthorized`;
    }
    
    const tokenResponse = await response.json() as TokenResponse;
    return {
        accessToken: tokenResponse.access_token,
        expiresAt: Date.now() + tokenResponse.expires_in * 60 * 1000,
        refreshToken: tokenResponse.refresh_token,
    };
}

async function loginImpl(username: string, password: string): Promise<TokenType> {
    return token(
        {
            'grant_type' : 'password',
            password,
            username,
        },
    );
}

async function refreshImpl(refreshToken: string): Promise<TokenType> {
    return token(
        {
            'grant_type' : 'refresh_token',
            'refresh_token': refreshToken,
        },
    );
}

export function AuthenticationProvider({ children }: Props) {
    const [token, setToken] = useLocalStorage<TokenType | null>('authentication', null);
    const [loginPromise, setLoginPromise] = useState<Promise<TokenType> | null>(null);
    const [refreshPromise, setRefreshPromise] = useState<Promise<TokenType> | null>(null);

    const login = useCallback(async (username: string, password: string) => {
        if (loginPromise != null) {
            return await loginPromise;
        }

        const promise = loginImpl(username, password);
        setLoginPromise(promise);
        try {
            const token = await promise;
            setToken(token);
            setLoginPromise(null);
            return token;
        } catch (error) {
            setLoginPromise(null);
            throw error;
        }
    }, [loginPromise, setLoginPromise, setToken]);

    const logout = useCallback(() => {
        setToken(null);
    }, [setToken]);

    const refresh = useCallback(async () => {
        if (refreshPromise != null) {
            return await refreshPromise;
        }

        if (token == null) {
            return;
        }

        const promise = refreshImpl(token.refreshToken);
        setRefreshPromise(promise);
        try {
            const newToken = await promise;
            setToken(newToken);
            setRefreshPromise(null);
            return newToken;
        } catch (error) {
            setRefreshPromise(null);
            logout();
            throw error;
        }
    }, [refreshPromise, token, setRefreshPromise, setToken, logout]);

    const loadToken = useCallback(async () => {
        if (token == null) {
            return null;
        }

        const currentTime = Date.now();
        if (currentTime < token.expiresAt - 60 * 1000) {
            return token.accessToken;
        }

        const newToken = await refresh() ?? token;
        return newToken.accessToken;
    }, [token, refresh]);

    return <LoginContext.Provider
        value={{
            isLoggedIn: token != null,
            isLoggingIn: loginPromise != null,
            login: async (username: string, password: string) => {
                await login(username, password);
            },
            logout,
            token: loadToken,
        }}
    >
        {children}
    </LoginContext.Provider>;
}

