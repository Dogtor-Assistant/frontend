import type { BookAppointmentQuery as BookAppointmentQueryType } from './__generated__/BookAppointmentQuery.graphql';
import type { ErrorBoundary } from 'react-error-boundary';
import type { PreloadedQuery } from 'react-relay';

import BookAppointmentQuery from './__generated__/BookAppointmentQuery.graphql';

import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router';

import { usePreloadedQuery, useQueryLoader } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Suspense from 'Suspense';
import Menu from './Menu';

type LoadedProps = {
    data: PreloadedQuery<BookAppointmentQueryType>,
}

type Arguments = {
    id: string,
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

    if(data.node == null) {
        return null;
    }

    return (
        <Menu Doctor={data.node}/>
    );
}

function BookAppointment() {
    const [
        data,
        loadQuery,
        dispose,
    ] = useQueryLoader<BookAppointmentQueryType>(BookAppointmentQuery);

    const error = useRef<ErrorBoundary>(null);
    const { id } = useParams<Arguments>();
    useEffect(() => {
        error.current?.reset();
        loadQuery({ doctorID: id });
        return () => {
            dispose();
        };
    }, [dispose, loadQuery, id]);

    return (
        <Suspense boundaryRef={error}>
            {data != null && <LoadedBookAppointment data={data}/>}
        </Suspense>
    );
}

export default BookAppointment;
