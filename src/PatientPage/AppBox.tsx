import type { AppBox_appointment$key } from './__generated__/AppBox_appointment.graphql';
import type { AppBoxDeleteAppMutation } from './__generated__/AppBoxDeleteAppMutation.graphql';

import React from 'react';
import {
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

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

type Props = {
    appointment: AppBox_appointment$key,
    isPast: boolean,
    refreshQuery: () => void,
}

function AppBox(props: Props) {
    const appointment = useFragment(
        graphql`
            fragment AppBox_appointment on Appointment {
                id
                expectedTime {
                    start
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

    const appDate = appointment.expectedTime.start != null ? new Date(appointment.expectedTime.start) : null;
    const day = appDate?.getDay() != null ? days[appDate?.getDay()] : null;
    const num = appDate?.getDate() != null ? appDate?.getDate().toString() : null;
    const month = appDate?.getMonth() != null ? months[appDate?.getMonth()] : null;
    const year = appDate?.getFullYear() != null ? appDate?.getFullYear().toString() : null;
    const date = `${day} ${num} ${month} ${year}`;
                  
    const duration = appointment.expectedTime.duration ?? 0;
    let hour = appDate?.getHours() != null ? appDate?.getHours().toString() : null;
    if (hour != null && parseInt(hour) < 10) hour = `0${ hour}`;
    let minute = appDate?.getHours() != null ? appDate?.getMinutes().toString() : null;
    if (minute != null && parseInt(minute) < 10) minute = `0${ minute}`;
    const time = `${hour}:${minute}`;

    const services = appointment.selectedServices.map(serv => serv.name).join(' - ');
    const doctor = `Dr. ${appointment.doctor.lastname} ${appointment.doctor.firstname}`;

    return (
        <Box borderRadius="lg" borderWidth="1px" key={appointment.id} overflow="hidden">
            <Box p="6">
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
