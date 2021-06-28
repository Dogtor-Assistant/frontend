import type {
    SearchFromId_SearchRootFromFragment_search$key,
} from './__generated__/SearchFromId_SearchRootFromFragment_search.graphql';
import type { SearchFromIdQuery as SearchFromIdQueryType } from './__generated__/SearchFromIdQuery.graphql';
import type { ErrorBoundary } from 'react-error-boundary';
import type { PreloadedQuery } from 'react-relay';

import SearchFromIdQuery from './__generated__/SearchFromIdQuery.graphql';

import React, { useEffect, useRef } from 'react';

import { useFragment, usePreloadedQuery, useQueryLoader } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Suspense from 'Suspense';
import SearchRoot from './SearchRoot';

import useSearchArguments from './useSearchArguments';

type LoadedProps = {
    data: PreloadedQuery<SearchFromIdQueryType>,
}

type SearchProps = {
    search: SearchFromId_SearchRootFromFragment_search$key,
}

type Props = {
    searchId: string,
}

function SearchRootFromFragment(props: SearchProps) {
    const search = useFragment(
        graphql`
            fragment SearchFromId_SearchRootFromFragment_search on Search {
                ...useSearchArguments_search
            }
        `,
        props.search,
    );

    const initialArguments = useSearchArguments(search);
    return (
        <SearchRoot
            initial={initialArguments}
        />
    );
}

function LoadedSearchFromId(props: LoadedProps) {
    const data = usePreloadedQuery(
        graphql`
            query SearchFromIdQuery($searchId: ID!) {
                node(id: $searchId) {
                    __typename
                    ... on Search {
                        ...SearchFromId_SearchRootFromFragment_search
                    }
                }
            }
        `,
        props.data,
    );

    if (data.node == null || data.node.__typename !== 'Search') {
        return null;
    }

    return (
        <SearchRootFromFragment search={data.node}/>
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
