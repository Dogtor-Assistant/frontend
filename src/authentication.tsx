
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

