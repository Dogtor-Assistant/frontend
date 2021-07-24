
import type { ReactNode } from 'react';
import type {
    Observer,
    RequestParameters,
    Subscribable,
    SubscribeFunction,
    Variables,
} from 'relay-runtime';
import type { Sink, Subscription } from 'relay-runtime/lib/network/RelayObservable';
import type { Observable as TransportObservable } from 'subscriptions-transport-ws';

import React, { useCallback, useMemo } from 'react';

import {
    Environment,
    Network,
    Observable,
    RecordSource,
    Store,
} from 'relay-runtime';
import { RelayEnvironmentProvider } from 'react-relay';

import { useAuthenticatedToken, useIsLoggedIn } from 'authentication';
import { useBackendURL } from 'config';
import { SubscriptionClient } from 'subscriptions-transport-ws';

class ObservableAdapter<T> implements Subscribable<T> {
    base: TransportObservable<T>

    constructor(base: TransportObservable<T>) {
        this.base = base;
    }

    subscribe(observer: Observer<T> | Sink<T>): Subscription {
        const subscription = this.base.subscribe(observer);
        return {
            closed: false,
            unsubscribe: subscription.unsubscribe,
        };
    }
}

interface Props {
    children: ReactNode | ReactNode[] | null,
}

export function GrahQLEnvironmentProvider({ children }: Props) {
    const fetchURL = useBackendURL('http', 'graphql');
    const subscribeURL = useBackendURL('ws', 'subscriptions');
    const accessToken = useAuthenticatedToken();

    const connectionHeaders = useCallback(
        async () => {
            const token = await accessToken();
            const authorizationHeader = token != null ? {
                authorization: `Bearer ${token}`,
            } : undefined;
            return {
                'content-type': 'application/json',
                ...authorizationHeader,
            };
        },
        [accessToken],
    );

    const fetchQuery = useCallback(
        async (operation: RequestParameters, variables: Variables) => {
            const headers = await connectionHeaders();

            const response = await fetch(fetchURL, {
                body: JSON.stringify({
                    query: operation.text,
                    variables,
                }),
                headers,
                method: 'POST',
                mode: 'cors',
            });

            return response.json();
        },
        [fetchURL, connectionHeaders],
    );

    const subscriptionClient = useMemo(
        () => new SubscriptionClient(
            subscribeURL,
            {
                connectionParams: async () => {
                    const headers = await connectionHeaders();
                    return {
                        headers,
                    };
                },
            },
        ),
        [subscribeURL, connectionHeaders],
    );

    const subscribe = useCallback(
        (operation: RequestParameters, variables: Variables) => {
            if (operation.text == null) {
                throw 'wtf: operation text is null for some reason';
            }

            const subscribeObservable = subscriptionClient.request({
                operationName: operation.name,
                query: operation.text,
                variables,
            });

            const observableFromValue = new ObservableAdapter(subscribeObservable);
            return Observable.from(observableFromValue);
        },
        [subscriptionClient],
    ) as SubscribeFunction;

    const network = useMemo(() => Network.create(fetchQuery, subscribe), [fetchQuery, subscribe]);

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
