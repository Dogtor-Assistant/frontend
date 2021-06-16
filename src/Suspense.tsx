
import type { ReactNode, RefObject } from 'react';
import type { FallbackProps } from 'react-error-boundary';

import React from 'react';
import { Suspense as ReactSuspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Center,
} from '@chakra-ui/react';

import LoadingIndicator from 'LoadingIndicator';

type Props = {
    children: ReactNode | Array<ReactNode>,
    boundaryRef?: RefObject<ErrorBoundary>
}

function Placeholder() {
    return (
        <Center h="100%" paddingBottom={8} paddingTop={8}>
            <LoadingIndicator />
        </Center>
    );
}

function ErrorFallback({ error }: FallbackProps) {
    return (
        <Alert
            alignItems="center"
            borderRadius="xl"
            flexDirection="column"
            justifyContent="center"
            minH="200px"
            padding="16px"
            status="error"
            textAlign="center"
            variant="subtle"
        >
            <AlertIcon />
            <AlertTitle mr={2}>An Error Occurred</AlertTitle>
            <AlertDescription>{error.message}</AlertDescription>
        </Alert>
    );
}

function Suspense({ children, boundaryRef }: Props) {
    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            ref={boundaryRef}
        >
            <ReactSuspense fallback={<Placeholder />}>
                {children !== [] ? children : <Placeholder />}
            </ReactSuspense>
        </ErrorBoundary>
    );
}

export default Suspense;
