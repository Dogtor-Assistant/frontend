import type { ActivityLevel, CalendarQuery as CalendarQueryType, Gender } from './__generated__/CalendarQuery.graphql';
import type { EventInput } from '@fullcalendar/react';
import type { ErrorBoundary } from 'react-error-boundary';
import type { PreloadedQuery } from 'react-relay';

import CalendarQuery from './__generated__/CalendarQuery.graphql';

import React, { useEffect, useRef, useState } from 'react';
import { Container } from '@chakra-ui/react';
import FullCalendar from '@fullcalendar/react';
import { useDisclosure } from '@chakra-ui/hooks';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import timeGridPlugin from '@fullcalendar/timegrid';

import { usePreloadedQuery, useQueryLoader } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Suspense from 'Suspense';
import CustomModal from './CustomModal';

import { useDoctorId } from 'user';

type LoadedProps = {
    data: PreloadedQuery<CalendarQueryType>,

}

type Props = {
    eventType:{
        id:string,
        title: string,
        start: string | number | Date | number[],
        end: string | number | Date | number[],
        lastName: string,
        firstName: string,
        patient: {
            activityLevel: ActivityLevel,
            address: {
                city: string,
                streetName: string,
                streetNumber: number,
                zipCode: number,
            },
            firstname: string,
            gender: Gender,
            height: number,
            id: string,
            isSmoker: boolean,
            lastname: string,
            surgeries: [string],
            weight: number,
        },

    },
}

function LoadedCalendar(props: LoadedProps) {
    const [selectedEvent, setSelectedEvent] = useState<Props['eventType']>({
        end: '',
        firstName: '',
        id:'',
        lastName: '',
        patient: {
            activityLevel: 'VeryHigh',
            address: {
                city: '',
                streetName: '',
                streetNumber: 0,
                zipCode: 0,
            },
            firstname: '',
            gender: 'Female',
            height: 0,
            id: '',
            isSmoker: false,
            lastname: '',
            surgeries: [''],
            weight: 0,
        },
        start: '',
        title: '',
    });
    const { isOpen, onOpen, onClose } = useDisclosure();

    const {
        isOpen: isOpenFollowupModal,
        onOpen: onOpenFollowupModal,
        onClose: onCloseFollowupModal,
    } = useDisclosure();

    const handleEventClick = ({ event }: EventInput) => {
        const selectedEvent = events.find(e => e.id === event.id) || {};
        setSelectedEvent({
            end:selectedEvent.end || '',
            firstName:selectedEvent.firstName || '',
            id:selectedEvent.id || '',
            lastName:selectedEvent?.lastName || '',
            patient: {
                activityLevel: selectedEvent?.patient.activityLevel,
                address: {
                    city: selectedEvent?.patient.address.city,
                    streetName: selectedEvent?.patient.address.streetName,
                    streetNumber: selectedEvent?.patient.address.streetNumber,
                    zipCode: selectedEvent?.patient.address.zipCode,
                },
                firstname: selectedEvent?.patient.firstname,
                gender: selectedEvent?.patient.gender,
                height: selectedEvent?.patient.height,
                id: selectedEvent?.patient.id,
                isSmoker: selectedEvent?.patient.isSmoker,
                lastname: selectedEvent?.patient.lastname,
                surgeries: selectedEvent?.patient.surgeries,
                weight: selectedEvent?.patient.weight,
            },
            start:selectedEvent.start || '',
            title:selectedEvent.title || '',
        });
        onOpen();
    };

    const handleOnCloseDone = () => {
        setEvents(events.filter(e => e.id !== selectedEvent.id));
        onClose();
    };

    const handleOnCloseDelete = () => {
        setEvents(events.filter(e => e.id !== selectedEvent.id));
        onClose();
    };

    const data = usePreloadedQuery(
        graphql`
        query CalendarQuery($docId:ID!) {
                node(id:$docId){
                    ...on Doctor{
                        appointments {
                            id
                            patient{
                                id
                                firstname
                                lastname
                                surgeries
                                isSmoker
                                address{
                                    city
                                    zipCode
                                    streetName
                                    streetNumber
                                }
                                gender
                                height
                                weight
                                activityLevel

                            }
                            expectedTime{
                                start
                                duration
                            }
                            actualTime{
                                start
                                duration
                            }
                            isDone
                        }

                    }
                }
            }
        `,
        props.data,
    );

    const [events, setEvents] = useState<EventInput[]>(data ?
        [...(data.node?.appointments ? data.node?.appointments.map(appointment => !appointment.isDone ? {} : ({
            end: typeof appointment.expectedTime?.start === 'string' ? new Date(new Date(
                appointment.expectedTime?.start).setMinutes(new Date(appointment.expectedTime?.start).getMinutes()
                 + appointment.expectedTime.duration!)).toISOString() : '',

            firstName: appointment.patient.firstname,
            id: appointment.id,
            lastName: appointment.patient.lastname,
            patient: {
                activityLevel: appointment.patient.activityLevel,
                address: {
                    city: appointment.patient.address.city,
                    streetName: appointment.patient.address.streetName,
                    streetNumber: appointment.patient.address.streetNumber,
                    zipCode: appointment.patient.address.zipCode,
                },
                firstname: appointment.patient.firstname,
                gender: appointment.patient.gender,
                height: appointment.patient.height,
                id: appointment.patient.id,
                isSmoker: appointment.patient.isSmoker,
                lastname: appointment.patient.lastname,
                surgeries: appointment.patient.surgeries,
                weight: appointment.patient.weight,
            },
            start: typeof appointment.expectedTime?.start === 'string' ? appointment.expectedTime?.start : '',
            title: appointment.patient.firstname.concat(' '.concat(appointment.patient.lastname)),
        })) : []),
        ] : []);
        
    return (
        <Container maxW="container.xl" >
            <FullCalendar
                displayEventTime={true}
                eventClick={handleEventClick}
                events={events}
                headerToolbar={{
                    center: 'title',
                    left: 'prev,next today',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                }}
                initialView='dayGridMonth'
                plugins={[
                    dayGridPlugin,
                    interactionPlugin,
                    timeGridPlugin,
                    resourceTimeGridPlugin,
                ]}
                schedulerLicenseKey='GPL-My-Project-Is-Open-Source'
            />
            <CustomModal eventType={selectedEvent}
                handleOnCloseDelete={handleOnCloseDelete}
                handleOnCloseDone={handleOnCloseDone}
                isOpen={isOpen}
                isOpenFollowupModal={isOpenFollowupModal}
                onClose={onClose}
                onCloseFollowupModal={onCloseFollowupModal}
                onOpenFollowupModal={onOpenFollowupModal}/>
        </Container>
    );
}

function Calendar() {
    const [
        data,
        loadQuery,
        dispose,
    ] = useQueryLoader<CalendarQueryType>(CalendarQuery);

    const docId = useDoctorId() ?? '';

    const error = useRef<ErrorBoundary>(null);
    useEffect(() => {
        error.current?.reset();
        loadQuery({ docId: docId });
        return () => {
            dispose();
        };
    }, [dispose, loadQuery, docId]);

    return (
        <Suspense boundaryRef={error}>
            {data != null && <LoadedCalendar data={data}/>}
        </Suspense>
    );
}

export default Calendar;

