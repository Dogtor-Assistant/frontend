import type { UpcomingAppQuery as UpcomingAppQueryType } from './__generated__/UpcomingAppQuery.graphql';
import type { ErrorBoundary } from 'react-error-boundary';
import type { PreloadedQuery } from 'react-relay';

import UpcomingAppQuery from './__generated__/UpcomingAppQuery.graphql';

import React, { useCallback, useEffect, useRef } from 'react';
import { Center, Grid, Text } from '@chakra-ui/react';

import { useQueryLoader } from 'react-relay';
import { usePreloadedQuery } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Suspense from 'Suspense';
import AppBox from './AppBox';

import { usePatientId } from 'user';

type LoadedProps = {
  data: PreloadedQuery<UpcomingAppQueryType>,
  refreshQuery: () => void,
}

function LoadedUpcomingApp(props: LoadedProps) {
    const data = usePreloadedQuery(
        graphql`
        query UpcomingAppQuery($patientID: ID!) {
          patientUpcomingAppointments(id: $patientID) {
          id
          expectedTime {
            duration
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
                { data.patientUpcomingAppointments === [] &&
              <Text>No upcoming appointments!</Text>
                }
                { data.patientUpcomingAppointments !== [] &&
              data.patientUpcomingAppointments.map(app => {
                  const appDate = app.expectedTime.start != null ? new Date(app.expectedTime.start) : null;

                  const day = appDate?.getDay() !== undefined ? days[appDate?.getDay()] : null;
                  const num = appDate?.getDate() !== undefined ? appDate?.getDate().toString() : null;
                  const month = appDate?.getMonth() !== undefined ? months[appDate?.getMonth()] : null;
                  const year = appDate?.getFullYear() !== undefined ? appDate?.getFullYear().toString() : null;
                  const date = `${day} ${num} ${month} ${year}`;
                  
                  const duration = app.expectedTime.duration != null ? app.expectedTime.duration : 0;
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
                          duration={duration}
                          isPast={false}
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

function UpcomingApp() {
    const id = usePatientId();

    const [
        data,
        loadQuery,
        dispose,
    ] = useQueryLoader<UpcomingAppQueryType>(UpcomingAppQuery);

    const error = useRef<ErrorBoundary>(null);
    useEffect(() => {
        error.current?.reset();
        loadQuery({ patientID: id !== undefined ? id : '' });
        return () => {
            dispose();
        };
    }, [id, dispose, loadQuery]);

    const refreshUpcomingApp = useCallback(() => {
        loadQuery({ patientID: id !== undefined ? id : '' }, { fetchPolicy: 'network-only' });
        return () => {
            dispose();
        };
    }, [id, dispose, loadQuery]);
  
    return (
        <Suspense boundaryRef={error}>
            {data != null && <LoadedUpcomingApp data={data} refreshQuery={refreshUpcomingApp}/>}
        </Suspense>
    );
}

export default UpcomingApp;
