import type { BookAppointmentQuery as BookAppointmentQueryType } from './__generated__/BookAppointmentQuery.graphql';
import type { ErrorBoundary } from 'react-error-boundary';
import type { PreloadedQuery } from 'react-relay';

import BookAppointmentQuery from './__generated__/BookAppointmentQuery.graphql';

import React, { useEffect, useRef } from 'react';

import { usePreloadedQuery, useQueryLoader } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Suspense from 'Suspense';
import Patient from './Menu';

type LoadedProps = {
    data: PreloadedQuery<BookAppointmentQueryType>,
}

type Props = {
    
}

function LoadedBookAppointment(props: LoadedProps) {
    const data = usePreloadedQuery(
        graphql`
            query BookAppointmentQuery ($doctorID: ID!) {
                node(id: $doctorID){
                    ... on Doctor {
                        ... Menu_doctor
                    }
                }
                
            }
        `,
        props.data,
    );

    return (
        <Patient/>
    );
}

function BookAppointment(props: Props) {
    const [
        data,
        loadQuery,
        dispose,
    ] = useQueryLoader<BookAppointmentQueryType>(BookAppointmentQuery);

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
            {data != null && <LoadedBookAppointment data={data}/>}
        </Suspense>
    );
}

export default BookAppointment;
