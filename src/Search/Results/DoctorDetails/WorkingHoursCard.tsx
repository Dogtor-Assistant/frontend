import type { Weekday, WorkingHoursCard_doctor$key } from './__generated__/WorkingHoursCard_doctor.graphql';

import React from 'react';
import { useMemo } from 'react';
import {
    Box,
    HStack,
    Text,
    VStack,
} from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
    doctor: WorkingHoursCard_doctor$key,
}

const orderedWeekdays: Weekday[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function WorkingHoursCard(props: Props) {
    const doctor = useFragment(
        graphql`
            fragment WorkingHoursCard_doctor on Doctor {
                offeredSlots {
                    day
                    start
                    end
                }
            }
        `,
        props.doctor,
    );

    const groupped = useMemo(
        () => {
            const record = doctor.offeredSlots.reduce((acc, element) => {
                const { day, start, end } = element;
                const prev = acc[day] ?? [];
                return {
                    ...acc,
                    [element.day]: [
                        ...prev,
                        {
                            end,
                            start,
                        },
                    ],
                };
            }, {} as Record<Weekday, { start: string, end: string }[]>);

            return orderedWeekdays.compactMap(day => {
                const slots = record[day];
                if (slots == null) {
                    return null;
                }
                return {
                    day,
                    slots,
                };
            });
        },
        [doctor],
    );

    return (
        <VStack align="start">
            <Text
                fontSize="md"
                fontWeight="semibold"
            >
                Working Hours
            </Text>
            <Box
                borderRadius="lg"
                borderWidth="1px"
                overflow="hidden"
                w="md"
            >
                <VStack
                    align="start"
                    p={4}
                    w="100%"
                >
                    {
                        groupped.map(({ day, slots }) => {
                            return (
                                <HStack align="start" key={day}>
                                    <Text
                                        fontSize="sm"
                                        fontWeight="medium"
                                    >
                                        {day}:
                                    </Text>
                                    
                                    {
                                        slots.map(({ start, end }) => {
                                            return (
                                                <Text
                                                    fontSize="sm"
                                                    fontWeight="light"
                                                    key={start}
                                                >
                                                    {start} - {end}
                                                </Text>
                                            );
                                        })
                                    }
                                </HStack>
                            );
                        })
                    }
                </VStack>
            </Box>
        </VStack>
    );
}

export default WorkingHoursCard;
