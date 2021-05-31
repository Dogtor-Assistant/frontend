
import { BACKEND_BASE_URL } from 'utils/constants';


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

