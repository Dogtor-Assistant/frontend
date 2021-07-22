import type {
    GlobalValuesProviderQuery as GlobalValuesProviderQueryType,
} from './__generated__/GlobalValuesProviderQuery.graphql';
import type { ReactNode } from 'react';
import type { ErrorBoundary } from 'react-error-boundary';
import type { PreloadedQuery } from 'react-relay';

import GlobalValuesProviderQuery from './__generated__/GlobalValuesProviderQuery.graphql';

import React, { useEffect, useRef } from 'react';

import { usePreloadedQuery, useQueryLoader } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Suspense from 'Suspense';

import { BackendConstantsProvider } from 'backendConstants';
import { UserDataProvider } from 'user';

type LoadedProps = {
    data: PreloadedQuery<GlobalValuesProviderQueryType>,
    children: ReactNode[] | ReactNode | null,
}

type Props = {
    children: ReactNode[] | ReactNode | null,
}

function LoadedGlobalValuesProvider(props: LoadedProps) {
    const data = usePreloadedQuery(
        graphql`
            query GlobalValuesProviderQuery {
                ...user_data
                ...backendConstants_data
            }
        `,
        props.data,
    );

    return (
        <UserDataProvider data={data}>
            <BackendConstantsProvider data={data}>
                {props.children}
            </BackendConstantsProvider>
        </UserDataProvider>
    );
}

function GlobalValuesProvider({ children }: Props) {
    const [
        data,
        loadQuery,
        dispose,
    ] = useQueryLoader<GlobalValuesProviderQueryType>(GlobalValuesProviderQuery);

    const error = useRef<ErrorBoundary>(null);
    useEffect(() => {
        error.current?.reset();
        loadQuery({ });
        return () => {
            dispose();
        };
    }, [dispose, loadQuery]);

    return (
        <Suspense boundaryRef={error}>
            {
                data != null && (
                    <LoadedGlobalValuesProvider data={data}>
                        {children}
                    </LoadedGlobalValuesProvider>
                )
            }
        </Suspense>
    );
}

export default GlobalValuesProvider;
