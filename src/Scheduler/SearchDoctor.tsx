import type { SearchDoctorQuery as SearchDoctorQueryType } from './__generated__/SearchDoctorQuery.graphql';
import type { SetStateAction } from 'react';
import type { ErrorBoundary } from 'react-error-boundary';
import type { PreloadedQuery } from 'react-relay';

import SearchDoctorQuery from './__generated__/SearchDoctorQuery.graphql';

import React, { useEffect, useRef, useState } from 'react';
import { FormControl } from '@chakra-ui/react';

import { usePreloadedQuery, useQueryLoader } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Suspense from '../Suspense';
import MySelect from './MySelect';

type LoadedProps = {
    data: PreloadedQuery<SearchDoctorQueryType>,
    setDoctor:Props['setDoctor'],
    input: string,
    setValue: React.Dispatch<SetStateAction<string>>,
}

type Props = {
    setDoctor: React.Dispatch<SetStateAction<{ id: string, firstname: string, lastname:string,
        services: { id: string, serviceName: string }[], }>>,
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
                                firstname
                                lastname
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

    const doctors = [...(data.search.results.edges ? data.search.results.edges.map(
        doctor => ({
            firstname: doctor?.node?.firstname || '',
            id: doctor?.node?.id || '',
            lastname: doctor?.node?.lastname || '',
            services: doctor?.node?.services ? doctor?.node?.services.map(service => ({
                id:service.id || '',
                serviceName: service.name || '',
            })) : [],
        }),
    ) : [])] ;

    return (
        <FormControl>
            <MySelect docs={doctors} setDoctor={props.setDoctor} setValue={props.setValue}/>
        </FormControl>
            
    );
}

function SearchDoctor({ setDoctor } :Props) {

    const [value, setValue] = useState('');

    const [
        data,
        loadQuery,
        dispose,
    ] = useQueryLoader<SearchDoctorQueryType>(SearchDoctorQuery);

    const error = useRef<ErrorBoundary>(null);
    useEffect(() => {
        error.current?.reset();
        loadQuery({ query: value });
        return () => {
            dispose();
        };
    }, [dispose, loadQuery, value]);

    return (
        <Suspense boundaryRef={error} >
            {data != null && <LoadedSearchDoctor data={data} input={value}
                setDoctor={setDoctor}
                setValue={setValue}
            />}
        </Suspense>
    );
}

export default SearchDoctor;
