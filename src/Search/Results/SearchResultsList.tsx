import type { SearchResultsList_search$key } from './__generated__/SearchResultsList_search.graphql';
import type { SearchResultsListPaginationQuery } from './__generated__/SearchResultsListPaginationQuery.graphql';

import React from 'react';

import { usePaginationFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import InfiniteScrollview from 'InfiniteScrollview';
import DoctorResultRow from './DoctorResultRow';

type Props = {
    search: SearchResultsList_search$key,
}

function SearchResultsList(props: Props) {
    const {
        data,
        ...connection
    // eslint-disable-next-line relay/generated-flow-types
    } = usePaginationFragment<SearchResultsListPaginationQuery, SearchResultsList_search$key>(
        graphql`
            fragment SearchResultsList_search on Search
            @argumentDefinitions(
                count: { type: "Int!", defaultValue: 20 }
                cursor: { type: "String" }
            )
            @refetchable(queryName: "SearchResultsListPaginationQuery") {
                results(first: $count, after: $cursor) @connection(key: "SearchResultsList_search_results") {
                    edges {
                        node {
                            ...DoctorResultRow_doctor
                        }
                    }
                }
            }
        `,
        props.search,
    );

    const nodes = data.results.edges?.compactMap(edge => edge?.node) ?? [];

    return (
        <InfiniteScrollview {...connection}>
            {nodes.map((doctor, index) => <DoctorResultRow doctor={doctor} key={`results_DoctorResultRow_${index}`}/>)}
        </InfiniteScrollview>
    );
}

export default SearchResultsList;
