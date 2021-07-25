import type { PatientPageQuery as PatientPageQueryType } from './__generated__/PatientPageQuery.graphql';
import type { ErrorBoundary } from 'react-error-boundary';
import type { PreloadedQuery } from 'react-relay';

import PatientPageQuery from './__generated__/PatientPageQuery.graphql';

import React, {
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
    Box,
    Divider,
    Heading,
    VStack,
} from '@chakra-ui/react';

import { usePreloadedQuery, useQueryLoader } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { Search } from 'Home';
import Suspense from 'Suspense';
import CheckupNot from './CheckupNot';
import FollowApp from './FollowApp';
import PastApp from './PastApp';
import ProfileSuggestion from './ProfileSuggestion';
import UpcomingApp from './UpcomingApp';

import { usePatientId } from 'user';

type LoadedProps = {
    data: PreloadedQuery<PatientPageQueryType>,
    refreshQuery: () => void,
}

function LoadedPatientPage(props: LoadedProps) {
    const data = usePreloadedQuery(
        graphql`
            query PatientPageQuery($patientID: ID!) {
                ...ProfileSuggestion_data
                ...CheckupNot_data
                ...UpcomingApp_data @arguments(patientID: $patientID)
                ...PastApp_data @arguments(patientID: $patientID)
            }
        `,
        props.data,
    );
    const [showSuggestion, setShowSuggestion] = useState(true);
    const [showFollowup, setShowFollowup] = useState(true);

    return (
        <div>
            <Box my={4}>
                <Search />
            </Box>
            <VStack
                align="stretch"
                spacing={4}
            >
                {
                    showSuggestion && (
                        <ProfileSuggestion
                            data={data}
                            setShowSuggestion={setShowSuggestion}
                            showSuggestion={showSuggestion}
                        />
                    )
                }
                {
                    !showSuggestion && (
                        <CheckupNot data={data} />
                    )
                }
                { showFollowup && <>
                    <Heading alignSelf="center" my={4} size="md">Followup Appointments</Heading>
                    <FollowApp setShowFollowup={setShowFollowup} />

                    <Divider py={4}/>
                </>
                }

                <Heading alignSelf="center" my={4} size="md">Upcoming Appointments</Heading>
                <UpcomingApp data={data} refreshQuery={props.refreshQuery}/>

                <Divider py={4}/>
                
                <Heading alignSelf="center" my={4} size="md">Past Appointments</Heading>
                <PastApp data={data} refreshQuery={props.refreshQuery}/>
            </VStack>
        </div>
    );
}

function PatientPage() {
    const patientID = usePatientId();

    const [
        data,
        loadQuery,
        dispose,
    ] = useQueryLoader<PatientPageQueryType>(PatientPageQuery);

    const error = useRef<ErrorBoundary>(null);
    useEffect(() => {
        error.current?.reset();
        if (patientID != null) {
            loadQuery({
                patientID,
            });
        }
        return () => {
            dispose();
        };
    }, [dispose, loadQuery, patientID]);

    const refreshQuery = useCallback(() => {
        if (patientID != null) {
            loadQuery(
                { patientID },
                { fetchPolicy: 'network-only' },
            );
        }
        return () => {
            dispose();
        };
    }, [patientID, loadQuery, dispose]);

    const { search, pathname } = useLocation();
    const history = useHistory();
    const params = useMemo(() => {
        return new URLSearchParams(search);
    }, [search]);

    const refresh = useMemo(() => {
        const value = params.get('refresh');
        switch (value) {
        case 'true':
        case '1':
            return true;
        default:
            return false;
        }
    }, [params]);

    useEffect(() => {
        if (refresh) {
            history.replace(pathname);
            refreshQuery();
        }
    }, [refresh, pathname, refreshQuery, history]);

    return (
        <Suspense boundaryRef={error}>
            {data != null && <LoadedPatientPage data={data} refreshQuery={refreshQuery}/>}
        </Suspense>
    );
}

export default PatientPage;
