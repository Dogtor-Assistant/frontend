import type { AppBox_appointment$key } from './__generated__/AppBox_appointment.graphql';
import type { AppBoxDeleteAppMutation } from './__generated__/AppBoxDeleteAppMutation.graphql';

import React from 'react';
import { useMemo } from 'react';
import {
    Alert,
    AlertIcon,
    Box,
    Button,
    ButtonGroup,
    Popover,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverFooter,
    PopoverTrigger,
} from '@chakra-ui/react';

import { useMutation } from 'react-relay';
import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import LoadingIndicator from 'LoadingIndicator';

import useAppointmentEstimatedTime from './useAppointmentEstimatedTime';
import useAppointmentExpectedTime from './useAppointmentExpectedTime';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

const significantTimeDeviation = 5 * 60 * 1000;

type Props = {
    appointment: AppBox_appointment$key,
    isPast: boolean,
    refreshQuery: () => void,
}

function dateString(date: Date) {
    const day = days[date.getDay()];
    const num = date.getDate().toString();
    const month = months[date.getMonth()];
    const year = date.getFullYear().toString();
    return `${day} ${num} ${month} ${year}`;
}

function AppBox(props: Props) {
    const appointment = useFragment(
        graphql`
            fragment AppBox_appointment on Appointment {
                id
                ...useAppointmentExpectedTime_appointment
                ...useAppointmentEstimatedTime_appointment
                expectedTime {
                    duration
                }
                doctor {
                    firstname
                    lastname
                }
                selectedServices {
                    name
                }
            }
        `,
        props.appointment,
    );

    const { isPast, refreshQuery } = props;

    const appDate = useAppointmentExpectedTime(appointment);
    const estimatedDate = useAppointmentEstimatedTime(appointment);
    const date = appDate != null ? dateString(appDate) : '';
    const duration = appointment.expectedTime.duration ?? 0;
    const time = appDate?.toLocaleTimeString('de', { hour: '2-digit', minute: '2-digit' });
    const estimatedTimeString = estimatedDate.toLocaleTimeString('de', { hour: '2-digit', minute: '2-digit' });

    const services = appointment.selectedServices.map(serv => serv.name).join(' - ');
    const doctor = `Dr. ${appointment.doctor.lastname} ${appointment.doctor.firstname}`;

    const shouldDisplayWarningAboutEstimatedTime = useMemo(() => {
        if (appDate == null) {
            return false;
        }

        const now = Date.now();
        if (estimatedDate.getTime() < now) {
            return false;
        }

        const isDifferenceSignificant = Math.abs(
            estimatedDate.getTime() - appDate.getTime(),
        ) >= significantTimeDeviation;
        if (!isDifferenceSignificant) {
            return false;
        }
        
        return appDate.getTime() < now;
    }, [appDate, estimatedDate]);

    return (
        <Box borderRadius="lg" borderWidth="1px" key={appointment.id} overflow="hidden">
            <Box p="6">
                {
                    shouldDisplayWarningAboutEstimatedTime && (
                        <Alert mb="6" status="warning">
                            <AlertIcon />
                            Dr. {appointment.doctor.lastname} is running behind on his schedule.
                            We anticipate that your Appointment will take place at {estimatedTimeString}
                        </Alert>
                    )
                }
                <Box alignItems="baseline" d="flex" justifyContent="space-between">
                    <Box
                        color="gray.500"
                        fontSize="xs"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        textTransform="uppercase"
                    >
                        {date} &bull; {time}
                    </Box>
                    {
                        !isPast && (
                            <Box float="right">
                                {duration} min.
                            </Box>
                        )
                    }
                </Box>

                <Box
                    as="h4"
                    fontWeight="semibold"
                    isTruncated
                    lineHeight="tight"
                    ml="2"
                    mt="1"
                >
                    {services}
                </Box>
                <Box ml="2">
                    {doctor}
                </Box>
                {
                    !isPast && (
                        <PopoverComp
                            id={appointment.id}
                            refreshQuery={refreshQuery}
                        />
                    )
                }
            </Box>
        </Box>
    );
}

type PopoverCompProps = {
    id: string,
    refreshQuery: () => void,
}

function PopoverComp({ id, refreshQuery }: PopoverCompProps) {
    const [commit, isInFlight] = useMutation<AppBoxDeleteAppMutation>(graphql`
    mutation AppBoxDeleteAppMutation($input: ID!){
        deleteAppointmentById(id: $input)
    }
    `);

    if (isInFlight) {
        return <LoadingIndicator />;
    }

    const deleteApp = (id: string): void => {
        commit({
            onCompleted(data) {
                if (data.deleteAppointmentById) refreshQuery();
            },
            variables: {
                'input': id,
            },
        });
    };

    return (
        <>
            <Popover
                closeOnBlur={false}
                placement="right"
                returnFocusOnClose={false}
            >
                {({ onClose }) => (
                    <>
                        <PopoverTrigger>
                            <Box
                                as="button"
                                bg="tomato"
                                borderRadius="md"
                                color="white"
                                float="right"
                                h={8} mb={4} px={4}
                            >
                                Cancel
                            </Box>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverCloseButton />
                            <PopoverBody>
                                Are you sure you want to cancel your appointment?
                            </PopoverBody>
                            <PopoverFooter d="flex" justifyContent="flex-end">
                                <ButtonGroup size="sm">
                                    <Button
                                        onClick={onClose}
                                        variant="outline"
                                    >
                                        No
                                    </Button>
                                    <Button bg="tomato" onClick={() => deleteApp(id)}>Yes</Button>
                                </ButtonGroup>
                            </PopoverFooter>
                        </PopoverContent>
                    </>
                )}
            </Popover>
        </>
    );
}

export default AppBox;
