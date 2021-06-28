import type { SearchFromIdQuery as SearchFromIdQueryType } from './__generated__/SearchFromIdQuery.graphql';
import type { ErrorBoundary } from 'react-error-boundary';
import type { PreloadedQuery } from 'react-relay';

import SearchFromIdQuery from './__generated__/SearchFromIdQuery.graphql';

import React, { useEffect, useRef } from 'react';

import { usePreloadedQuery, useQueryLoader } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Suspense from 'Suspense';

import { SearchContextProvider } from './context';

type LoadedProps = {
    data: PreloadedQuery<SearchFromIdQueryType>,
}

type Props = {
    searchId: string,
}

function LoadedSearchFromId(props: LoadedProps) {
    const data = usePreloadedQuery(
        graphql`
            query SearchFromIdQuery($searchId: ID!) {
                node(id: $searchId) {
                    __typename
                    ... on Search {
                        scope {
                            query
                            cities
                            specialities
                        }
                    }
                }
            }
        `,
        props.data,
    );

    if (data.node == null || data.node.__typename !== 'Search') {
        return null;
    }

    const {
        query,
        cities,
        specialities,
    } = data.node.scope;

    return (
        <SearchContextProvider
            initial={{
                cities,
                query,
                specialities,
            }}
        >
            
        </SearchContextProvider>
    );
}

function SearchFromId({ searchId }: Props) {
    const [
        data,
        loadQuery,
        dispose,
    ] = useQueryLoader<SearchFromIdQueryType>(SearchFromIdQuery);

    const error = useRef<ErrorBoundary>(null);
    useEffect(() => {
        error.current?.reset();
        loadQuery({ searchId });
        return () => {
            dispose();
        };
    }, [dispose, loadQuery, searchId]);

    return (
        <Suspense boundaryRef={error}>
            {data != null && <LoadedSearchFromId data={data}/>}
        </Suspense>
    );
}

export default SearchFromId;
