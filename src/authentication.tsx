
import type { ReactNode } from 'react';

import React, {
    useCallback,
    useContext,
    useRef,
    useState,
} from 'react';
import { useHistory } from 'react-router-dom';

import useLocalStorage from 'useLocalStorage';

import { useBackendURL } from 'config';

interface Props {
    children: ReactNode | ReactNode[] | null,
}

type TokenType = {
    accessToken: string,
    refreshToken: string,
    expiresAt: number,
}

type TokenResponse = {
    'access_token': string,
    'expires_in': number,
    'refresh_token': string,
}

type LoginContextType = {
    isLoggingIn: boolean,
    isLoggedIn: boolean,
    token: () => Promise<string | null>,
    login: (username: string, password: string) => Promise<void>,
    logout: () => void,
}

const LoginContext = React.createContext<LoginContextType>({
    isLoggedIn: false,
    isLoggingIn: false,
    login: async () => { /* no-op */ },
    logout: () => { /* no-op */ },
    token: async () => null,
});

async function token(url: string, params: Record<string, string>): Promise<TokenType> {
    const body = new URLSearchParams(params);
    const response = await fetch(
        url,
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
        expiresAt: Date.now() + tokenResponse.expires_in * 1000,
        refreshToken: tokenResponse.refresh_token,
    };
}

async function loginImpl(url: string, username: string, password: string): Promise<TokenType> {
    return token(
        url,
        {
            'grant_type' : 'password',
            password,
            username,
        },
    );
}

async function refreshImpl(url: string, refreshToken: string): Promise<TokenType> {
    return token(
        url,
        {
            'grant_type' : 'refresh_token',
            'refresh_token': refreshToken,
        },
    );
}

export function AuthenticationProvider({ children }: Props) {
    const authURL = useBackendURL('auth', 'token');
    const [localStorageToken, setLocalStorageToken] = useLocalStorage<TokenType | null>('authentication', null);
    
    const [isLoggedIn, setIsLoggedIn] = useState(localStorageToken != null);
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const token = useRef(localStorageToken);
    const setToken = useCallback(newToken => {
        setLocalStorageToken(newToken);
        token.current = newToken;
    }, [token, setLocalStorageToken]);

    const loginPromise = useRef<Promise<TokenType> | null>(null);
    const refreshPromise = useRef<Promise<TokenType> | null>(null);

    const login = useCallback(async (username: string, password: string) => {
        if (loginPromise.current != null) {
            return await loginPromise.current;
        }

        setIsLoggingIn(true);
        const promise = loginImpl(authURL, username, password);
        loginPromise.current = promise;
        try {
            const token = await promise;
            setToken(token);
            setIsLoggedIn(true);
            setIsLoggingIn(false);
            loginPromise.current = null;
            return token;
        } catch (error) {
            loginPromise.current = null;
            throw error;
        }
    }, [authURL, setToken]);

    const logout = useCallback(() => {
        setToken(null);
        setIsLoggedIn(false);
    }, [setToken]);

    const loadToken = useCallback(async () => {
        const currentToken = token.current;
        if (currentToken == null) {
            return null;
        }

        const currentTime = Date.now();
        if (currentTime < currentToken.expiresAt - 60 * 1000) {
            return currentToken.accessToken;
        }

        if (refreshPromise.current != null) {
            const refreshToken = await refreshPromise.current;
            return refreshToken.accessToken;
        }

        const promise = refreshImpl(authURL, currentToken.refreshToken);
        refreshPromise.current = promise;
        try {
            const newToken = await promise;
            setToken(newToken);
            refreshPromise.current = null;
            return newToken.accessToken;
        } catch (error) {
            refreshPromise.current = null;
            logout();
            throw error;
        }
    }, [authURL, logout, setToken]);

    return <LoginContext.Provider
        value={{
            isLoggedIn,
            isLoggingIn,
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

export function useIsLoggedIn(): boolean {
    const context = useContext(LoginContext);
    return context.isLoggedIn;
}

export function useIsLoggedOut(): boolean {
    return !useIsLoggedIn();
}

export function useIsLoggingIn(): boolean {
    const context = useContext(LoginContext);
    return context.isLoggingIn;
}

export function useAuthenticatedToken(): (() => Promise<string | null>) {
    const context = useContext(LoginContext);
    return context.token;
}

export function useLogin(): ((username: string, password: string) => Promise<void>) {
    const context = useContext(LoginContext);
    return context.login;
}

export function useLogout(): () => void {
    const history = useHistory();
    const context = useContext(LoginContext);
    history.push('/');
    return context.logout;
}
