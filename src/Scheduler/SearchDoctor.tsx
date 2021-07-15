import type { SearchDoctorQuery as SearchDoctorQueryType } from './__generated__/SearchDoctorQuery.graphql';
import type { ErrorBoundary } from 'react-error-boundary';
import type { PreloadedQuery } from 'react-relay';

import SearchDoctorQuery from './__generated__/SearchDoctorQuery.graphql';

import React, { useEffect, useRef, useState } from 'react';

import { usePreloadedQuery, useQueryLoader } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Suspense from '../Suspense';

type LoadedProps = {
    data: PreloadedQuery<SearchDoctorQueryType>,
}

type Props = {
    input:string,
}

function LoadedSearchDoctor(props: LoadedProps) {
    const data = usePreloadedQuery(
        graphql`
            query SearchDoctorQuery($query:String!) {
                search(query: $query){
                    results{
                        edges{
                            node{
                                id
                                services{
                                    id
                                    name
                                }
                            }
                        }
                    }
                }
            }
        `,
        props.data,
    );

    const [doctors, setDoctors] = useState(data.search.results.edges.map(doctor => ({
        id: doctor.node.id,
        services: doctor.node.services.map(service => ({
            id:service.id,
            serviceName: service.name,
        })),
    })));

    return (
        <p>Hello World</p>
    );
}

function SearchDoctor(input: Props['input']) {
    const [
        data,
        loadQuery,
        dispose,
    ] = useQueryLoader<SearchDoctorQueryType>(SearchDoctorQuery);

    const error = useRef<ErrorBoundary>(null);
    useEffect(() => {
        error.current?.reset();
        loadQuery({ query: input });
        return () => {
            dispose();
        };
    }, [dispose, loadQuery, input]);

    return (
        <Suspense boundaryRef={error}>
            {data != null && <LoadedSearchDoctor data={data}/>}
        </Suspense>
    );
}

export default SearchDoctor;
