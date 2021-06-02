import type { GreetingQuery as GreetingQueryType } from './__generated__/GreetingQuery.graphql';
import type { ErrorBoundary } from 'react-error-boundary';
import type { PreloadedQuery } from 'react-relay';

import GreetingQuery from './__generated__/GreetingQuery.graphql';

import React, { useEffect, useRef } from 'react';
import { Text } from '@chakra-ui/react';

import { usePreloadedQuery, useQueryLoader } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Suspense from 'Suspense';

type LoadedProps = {
    data: PreloadedQuery<GreetingQueryType>
}

function LoadedGreeting(props: LoadedProps) {
    const data = usePreloadedQuery(
        graphql`
            query GreetingQuery {
                greeting
            }
        `,
        props.data,
    );

    return (
        <Text>
            {data.greeting}
        </Text>
    );
}

function Greeting() {
    const [
        data,
        loadQuery,
        dispose,
    ] = useQueryLoader<GreetingQueryType>(GreetingQuery);

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
            {data != null && <LoadedGreeting data={data}/>}
        </Suspense>
    );
}

export default Greeting;
