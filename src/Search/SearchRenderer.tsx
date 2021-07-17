import type { SearchRendererQuery as SearchRendererQueryType } from './__generated__/SearchRendererQuery.graphql';
import type { ErrorBoundary } from 'react-error-boundary';
import type { PreloadedQuery } from 'react-relay';

import SearchRendererQuery from './__generated__/SearchRendererQuery.graphql';

import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { usePreloadedQuery, useQueryLoader } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Suspense from 'Suspense';
import SearchResultsContainer from './SearchResultsContainer';

import useSearchArguments from './useSearchArguments';

import { useAppliedSearchArguments, useUpdate } from './context';

type LoadedProps = {
    data: PreloadedQuery<SearchRendererQueryType>,
}

function LoadedSearchRenderer(props: LoadedProps) {
    const data = usePreloadedQuery(
        graphql`
            query SearchRendererQuery(
                $query: String
                $cities: [String!]
                $specialities: [String!]
            ) {
                search(
                    query: $query,
                    cities: $cities,
                    specialities: $specialities
                ) {
                    id
                    ...useSearchArguments_search
                    ...SearchResultsContainer_search
                }
            }
        `,
        props.data,
    );
    const history = useHistory();

    const id = data.search.id;
    useEffect(() => {
        history.replace(`search?id=${id}`);
    }, [id, history]);

    const update = useUpdate();
    const appliedArguments = useAppliedSearchArguments();
    const searchArguments = useSearchArguments(data.search);
    useEffect(() => {
        if (appliedArguments.query !== searchArguments.query) {
            update(searchArguments);
        }
    }, [searchArguments, update, appliedArguments]);

    return (
        <SearchResultsContainer search={data.search}/>
    );
}

function SearchRenderer() {
    const applied = useAppliedSearchArguments();
    const [
        data,
        loadQuery,
    ] = useQueryLoader<SearchRendererQueryType>(SearchRendererQuery);

    const error = useRef<ErrorBoundary>(null);
    useEffect(() => {
        error.current?.reset();
        loadQuery({
            cities: applied.cities?.map(x => x),
            query: applied.query,
            specialities: applied.specialities?.map(x => x),
        });
    }, [loadQuery, applied]);

    return (
        <Suspense boundaryRef={error}>
            {data != null && <LoadedSearchRenderer data={data}/>}
        </Suspense>
    );
}

export default SearchRenderer;
