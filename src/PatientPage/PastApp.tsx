import type { PastAppQuery as PastAppQueryType } from './__generated__/PastAppQuery.graphql';
import type { ErrorBoundary } from 'react-error-boundary';
import type { PreloadedQuery } from 'react-relay';

import PastAppQuery from './__generated__/PastAppQuery.graphql';

import React, { useCallback, useEffect, useRef } from 'react';
import { Center, Grid, Text } from '@chakra-ui/react';

import { useQueryLoader } from 'react-relay';
import { usePreloadedQuery } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Suspense from 'Suspense';
import AppBox from './AppBox';

import { usePatientId } from 'user';

type LoadedProps = {
  data: PreloadedQuery<PastAppQueryType>,
  refreshQuery: () => void,
}

function LoadedPastApp(props: LoadedProps) {
    const data = usePreloadedQuery(
        graphql`
        query PastAppQuery($patientID: ID!) {
          patientPreviousAppointments(id: $patientID) {
          id
          expectedTime {
            start
          }
          doctor {
            firstname
            lastname
          }
          selectedServices {
            name
          }
        } 
      }
      `,
        props.data,
    );
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    return (
        <Center>
            <Grid gap={6} w={600}>
                { data.patientPreviousAppointments === [] &&
              <Text>No past appointments!</Text>
                }
                { data.patientPreviousAppointments !== [] &&
              data.patientPreviousAppointments.map(app => {
                  const appDate = app.expectedTime.start != null ? new Date(app.expectedTime.start) : null;

                  const day = appDate?.getDay() !== undefined ? days[appDate?.getDay()] : null;
                  const num = appDate?.getDate() !== undefined ? appDate?.getDate().toString() : null;
                  const month = appDate?.getMonth() !== undefined ? months[appDate?.getMonth()] : null;
                  const year = appDate?.getFullYear() !== undefined ? appDate?.getFullYear().toString() : null;
                  const date = `${day} ${num} ${month} ${year}`;

                  let hour = appDate?.getHours() !== undefined ? appDate?.getHours().toString() : null;
                  if (hour != null && parseInt(hour) < 10) hour = `0${ hour}`;
                  let minute = appDate?.getHours() !== undefined ? appDate?.getMinutes().toString() : null;
                  if (minute != null && parseInt(minute) < 10) minute = `0${ minute}`;
                  const time = `${hour}:${minute}`;

                  const services = app.selectedServices.map(serv => serv.name).join(' - ');

                  const doctor = `Dr. ${app.doctor.lastname} ${app.doctor.firstname}`;

                  return (
                      <AppBox
                          date={date}
                          doctor={doctor}
                          isPast={true}
                          key={app.id} keyV={app.id}
                          refreshQuery={props.refreshQuery}
                          services={services}
                          time={time}
                      />
                  ); },
              )
                }
            </Grid>
        </Center>
    );
}

function PastApp() {
    const id = usePatientId();

    const [
        data,
        loadQuery,
        dispose,
    ] = useQueryLoader<PastAppQueryType>(PastAppQuery);

    const error = useRef<ErrorBoundary>(null);
    useEffect(() => {
        error.current?.reset();
        loadQuery({ patientID: id !== undefined ? id : '' });
        return () => {
            dispose();
        };
    }, [id, dispose, loadQuery]);

    const refreshPastApp = useCallback(() => {
        loadQuery({ patientID: id !== undefined ? id : '' });
        return () => {
            dispose();
        };
    }, [id, dispose, loadQuery]);

    return (
        <Suspense boundaryRef={error}>
            {data != null && <LoadedPastApp data={data} refreshQuery={refreshPastApp}/>}
        </Suspense>
    );
}

export default PastApp;
