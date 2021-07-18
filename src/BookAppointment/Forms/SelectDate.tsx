import type { Weekday } from '../__generated__/Menu_doctor.graphql';
import type { FC, ReactElement } from 'react';

import React, { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Center,
    Container,
    Divider,
    Grid,
    GridItem,
    IconButton,
    Stack,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

type SelectDateProps = {
    blockedAppointments: ReadonlyArray<{
        readonly isDone: boolean,
        readonly expectedTime: {
            readonly duration: number | null,
            readonly start: string | null,
        },
    }>,
    doctorHours: ReadonlyArray<{
        readonly day: Weekday,
        readonly start: string,
        readonly end: string,
    }>,
    expectedTime: Date | null,
    currentDate: Date,
    expectedDuration: number,
    setExpectedTime: React.Dispatch<React.SetStateAction<Date>>,
    setValidForm: React.Dispatch<React.SetStateAction<boolean>>,
}
const SelectDate: FC<SelectDateProps> =
({
    blockedAppointments,
    doctorHours,
    expectedDuration,
    setExpectedTime,
    expectedTime,
    currentDate,
    setValidForm,
}): ReactElement => {
    const [noDateSelectedError, setNoDateSelectedError] = useState(false);

    const weekdayArr: Weekday[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    // eslint-disable-next-line max-len
    const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay());
    // eslint-disable-next-line max-len
    const endDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDay()+ (7- currentDate.getDay()));

    const WeekSlots = () => {
        let day_numb = currentDate.getDay();
        const numb_DaySlots = new Array<Array<{'endSlot':number, 'startSlot':number}>>();
        const numb_DayApp = new Array<Array<{'endTime':number, 'startTime':number}>>(7);

        while (day_numb < 7) {
            const current_Day = new Date(
                // eslint-disable-next-line max-len
                currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + (day_numb-currentDate.getDay()));
            if(currentDate.getDay() !== day_numb) {
                current_Day.setHours(0);
            }

            const appointments = blockedAppointments;

            appointments.filter(app => {
                const appDate = app.expectedTime.start != null ? new Date(app.expectedTime.start) : null;
                const duration = app.expectedTime.duration;

                const num = appDate?.getDate() !== undefined ? appDate?.getDate() : null;
                const month = appDate?.getMonth() !== undefined ? appDate?.getMonth() : null;
                const year = appDate?.getFullYear() !== undefined ? appDate?.getFullYear() : null;
                const hour = appDate?.getHours() !== undefined ? appDate?.getHours() : null;
                const minute = appDate?.getHours() !== undefined ? appDate?.getMinutes() : null;

                // eslint-disable-next-line max-len
                if(current_Day.getFullYear() === year && current_Day.getMonth() === month && current_Day.getDate() === num && duration != null) {
                    if (hour != null && minute != null) {
                        const startTime = hour * 60 + minute;
                        const endTime = startTime + duration;
                        numb_DayApp[day_numb].push({ 'endTime':endTime, 'startTime' : startTime });
                    }
                }
            });

            const daySlots = [];
            for(let i = 0; i < doctorHours.length; i++) {
                if(weekdayArr[day_numb] === doctorHours[i].day) {
                    const startSlot = stringToTime(doctorHours[i].start);
                    const endSlot = stringToTime(doctorHours[i].end);
                    daySlots.push({ 'endSlot':endSlot, 'startSlot':startSlot });
                }
            }
            numb_DaySlots.push(daySlots);

            day_numb = day_numb + 1;
        }
        
        const finalSlots = new Array<Array<number>>(7);
        for(let i = currentDate.getDay(); i < 7; i++) {
            let day_slots = Array<number>();
            for(let j = 0; j < numb_DaySlots[i].length; j++) {
                const slots = new Array<number>();
                let slot_counter = numb_DaySlots[i][j].startSlot;
                while (slot_counter < numb_DaySlots[i][j].endSlot - expectedDuration) {
                    slots.push(slot_counter);
                    slot_counter = slot_counter + 30;
                }

                let filtered_solts = slots;
                for(let k = 0; k < numb_DayApp[i].length; k++) {
                    const filtered = new Array<number>();
                    if (numb_DayApp[i][k].startTime <= numb_DaySlots[i][j].endSlot) {
                        filtered_solts.filter(slot => {
                            if (numb_DayApp[i][k].startTime >= slot+30 || numb_DayApp[i][k].endTime <= slot) {
                                filtered.push(slot);
                            }
                        });
                        filtered_solts = filtered;
                    }
                }
                day_slots = day_slots.concat(filtered_solts);
            }
            day_slots.sort(function(a, b) { return a-b; });
            finalSlots[i] = day_slots;
        }
        return finalSlots;
    };

    const { toggleColorMode } = useColorMode();
    const color = useColorModeValue('green', 'gray');
    
    useEffect(() => {
        setValidForm(expectedTime != null);
    }, [expectedTime, setValidForm]);

    return (
        <div>
            <Container maxW="container.l">
                <Center height="50px">
                    <Divider />
                </Center>
                <Box borderRadius="lg" borderWidth="1px" maxW="l" overflow="hidden">
                    <Box p={6}>
                        <Box
                            as="h4"
                            fontWeight="semibold"
                            isTruncated
                            lineHeight="tight"
                            mt="1"
                            paddingLeft={4}
                        >
                            Please select an appointment Date:
                        </Box>
                        <Center height="30px">
                            <Divider />
                        </Center>
                        <Center height="30px">
                            {startDay} - {endDay}
                        </Center>
                        <Center height="50px">
                            <Divider />
                        </Center>
                        <Grid
                            gap={4}
                            h="200px"
                            templateColumns="repeat(9, 1fr)"
                            templateRows="repeat(13, 1fr)"
                        >
                            <GridItem colSpan={1} rowSpan={13}>
                                <IconButton aria-label="PriorWeek" icon={<ArrowLeftIcon />} />
                            </GridItem>
                            {['Mo', 'Tu', 'We', 'Thu', 'Fr', 'Sa', 'Su'].map(day => (
                                <GridItem key={day}><Center> {day}</Center></GridItem>
                            ))}
                            <GridItem colSpan={1} rowSpan={13}>
                                <IconButton aria-label="NextWeek" icon={<ArrowRightIcon />} />
                            </GridItem>
                            {WeekSlots().map((slotDay, index) => (
                                // eslint-disable-next-line react/jsx-key
                                <GridItem colSpan={1} rowSpan={12}><Center>
                                    <Stack spacing={4}>
                                        if(slotDay != []){
                                            slotDay.map(slot => (
                                                <Button
                                                    borderRadius="full"
                                                    colorScheme={color}
                                                    key={slot}
                                                    onClick={() => {
                                                        // eslint-disable-next-line max-len
                                                        setExpectedTime(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + index, Math.ceil(slot/60), slot%60));
                                                        toggleColorMode;
                                                    }}
                                                    variant="solid"
                                                >
                                                    {Math.ceil(slot/60)}:{slot%60}
                                                </Button>
                                            ))
                                        }
                                        else{
                                            <GridItem colSpan={1} rowSpan={12}/>
                                        }
                                    </Stack>
                                </Center></GridItem>
                            ))}
                        </Grid>
                    </Box>
                </Box>
                <Center height="50px">
                    <Divider />
                </Center>
            </Container>
        </div>
    );
};

function stringToTime(number: string) {
    const numberArray = number.split(':');
    const h = parseInt(numberArray[0]);
    const min = parseInt(numberArray[1]);
    return h*60 + min;
}

export default SelectDate;
