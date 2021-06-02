
import type { ReactNode } from 'react';
import type { RequestParameters, Variables } from 'relay-runtime';

import React, { useCallback, useEffect, useState } from 'react';

import {
    Environment,
    Network,
    RecordSource,
    Store,
} from 'relay-runtime';
import { RelayEnvironmentProvider } from 'react-relay';

import { useAuthenticatedToken } from 'authentication';
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

    const makeEnvironment = useCallback(
        () => {
            const network = Network.create(fetchQuery);
            const store = new Store(new RecordSource());
            return new Environment(
                {
                    network,
                    store,
                },
            );
        },
        [fetchQuery],
    );

    const [environment, setEnvironment] = useState(
        () => makeEnvironment(),
    );

    useEffect(() => {
        setEnvironment(makeEnvironment());
    }, [makeEnvironment, setEnvironment]);
     
    return (
        <RelayEnvironmentProvider environment={environment}>
            {children}
        </RelayEnvironmentProvider>
    );
}
