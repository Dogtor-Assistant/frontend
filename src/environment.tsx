
import type { ReactNode } from 'react';
import type { RequestParameters, Variables } from 'relay-runtime';

import React, { useCallback, useMemo } from 'react';

import {
    Environment,
    Network,
    RecordSource,
    Store,
} from 'relay-runtime';
import { RelayEnvironmentProvider } from 'react-relay';

import { useAuthenticatedToken, useIsLoggedIn } from 'authentication';
import { useBackendURL } from 'config';

interface Props {
    children: ReactNode | ReactNode[] | null,
}

export function GrahQLEnvironmentProvider({ children }: Props) {
    const url = useBackendURL('graphql');
    const accessToken = useAuthenticatedToken();

    const fetchQuery = useCallback(
        async (operation: RequestParameters, variables: Variables) => {
            const token = await accessToken();
            const authorizationHeader = token != null ? {
                authorization: `Bearer ${token}`,
            } : undefined;

            const response = await fetch(url, {
                body: JSON.stringify({
                    query: operation.text,
                    variables,
                }),
                headers: {
                    'content-type': 'application/json',
                    ...authorizationHeader,
                },
                method: 'POST',
                mode: 'cors',
            });

            return response.json();
        },
        [url, accessToken],
    );

    const network = useMemo(() => Network.create(fetchQuery), [fetchQuery]);

    const isLoggedIn = useIsLoggedIn();
    const store = useMemo(() => {
        return new Store(new RecordSource());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn]);

    const environment = useMemo(
        () => {
            return new Environment(
                {
                    network,
                    store,
                },
            );
        },
        [network, store],
    );
     
    return (
        <RelayEnvironmentProvider environment={environment}>
            {children}
        </RelayEnvironmentProvider>
    );
}
