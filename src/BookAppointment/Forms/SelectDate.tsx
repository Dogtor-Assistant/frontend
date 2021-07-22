import type { Weekday } from '../__generated__/Menu_doctor.graphql';
import type { FC, ReactElement } from 'react';

import React, { useEffect, useState } from 'react';
import { useRadioGroup } from '@chakra-ui/react';
import {
    Box,
    Center,
    Container,
    Divider,
    Grid,
    GridItem,
    IconButton,
    Stack,
    useControllableState,
    useRadio,
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
    expectedTime: Date,
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

    useEffect(() => {
        setValidForm(expectedTime !== currentDate);
    }, [currentDate, expectedTime, setValidForm]);

    // eslint-disable-next-line max-len
    const weekdayArr: Weekday[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    // eslint-disable-next-line max-len
    const [startDay, setStartDay] = useControllableState({ defaultValue: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay() + 1) });
    const [prevIsActive, setPrevIsActive] = useState(startDay <= currentDate);

    function findSlots(sDate:Date) {
        let day_numb = sDate.getDay() -1;
        const end_date = new Date(sDate.getFullYear(), sDate.getMonth(), sDate.getDate()+ (6-sDate.getDay()));

        const week_slots = new Array<Array<{'slotDate':Date, 'startSlot':number}>>(7);
        const week_appointments = new Array<Array<{'slotDate':Date, 'startSlot':number}>>(7);

        const copiedAppointments = blockedAppointments;
        const filteredAppointments = new Array<{
            'isDone': boolean,
            'expectedTime': {
                'duration': number | null,
                'start': string | null,
            },
        }>();

        copiedAppointments.map(app => {
            const appDate = app.expectedTime.start != null ? new Date(app.expectedTime.start) : null;
            const done = app.isDone;
            
            if(done === false && appDate != null && appDate <= end_date && appDate >= sDate) {
                filteredAppointments.push(app);
            }
        });

        while (day_numb < 7) {
            week_slots[day_numb] = getDaySlots(day_numb, sDate);

            filteredAppointments.map(app => {
                const appDate = app.expectedTime.start != null ? new Date(app.expectedTime.start) : null;
                const duration = app.expectedTime.duration;

                const num = appDate?.getDate() !== undefined ? appDate?.getDate() : null;
                const month = appDate?.getMonth() !== undefined ? appDate?.getMonth() : null;
                const year = appDate?.getFullYear() !== undefined ? appDate?.getFullYear() : null;
                const hour = appDate?.getHours() !== undefined ? appDate?.getHours() : null;
                const minute = appDate?.getHours() !== undefined ? appDate?.getMinutes() : null;

                // eslint-disable-next-line max-len
                if(sDate.getFullYear() === year && sDate.getMonth() === month && sDate.getDate() + day_numb === num && duration != null) {
                    if (hour != null && minute != null) {
                        const app_time = hour * 60 + minute;
                        const startApp = app_time - (app_time % 30);
                        let app_counter = startApp;
                        const endApp = startApp + duration;

                        const day_appointments = Array<{'slotDate':Date, 'startSlot':number}>();
                        while (app_counter < endApp) {
                            const appDate = new Date(year, month, num, Math.floor(app_counter/60), app_counter%60);
                            if(appDate >= sDate) {
                                day_appointments.push({ 'slotDate':appDate, 'startSlot' : app_counter });
                                app_counter = app_counter + 30;
                            }
                        }
                        if(week_appointments[day_numb] === undefined) {
                            week_appointments[day_numb] = day_appointments;
                        }
                        else{
                            week_appointments[day_numb] = week_appointments[day_numb].concat(day_appointments);
                        }
                    }
                }
            });
            day_numb = day_numb+1;
        }

        const filtered_week_slots = new Array<Array<{'slotDate':Date, 'startSlot':number}>>(7);
        week_slots.map((wSlot, wIndex) => {
            if(wSlot !== undefined && wSlot !== []) {
                const filtered_day_slots = new Array<{'slotDate':Date, 'startSlot':number}>();
                wSlot.map(dSlot => {
                    if(dSlot !== undefined) {
                        let noAppBool = true;
                        week_appointments.map(w_app => {
                            let found = false;
                            w_app.map(element => {
                                if(element.slotDate.toISOString() === dSlot.slotDate.toISOString()) {
                                    found = true ;
                                }
                            });
                            if(found) {
                                noAppBool = false;
                                if(expectedDuration > 30) {
                                    let deleteSlot_Counter = Math.ceil((expectedDuration-1)/30);
                                    while(deleteSlot_Counter>0 && filtered_day_slots.length > 0) {
                                        filtered_day_slots.pop();
                                        deleteSlot_Counter = deleteSlot_Counter - 1;
                                    }
                                }
                            }
                        });
                        if (noAppBool) {
                            filtered_day_slots.push(dSlot);
                        }
                    }
                });
                filtered_week_slots[wIndex] = filtered_day_slots;
            }
        });

        return filtered_week_slots;
    }

    function getDaySlots(day_numb:number, sDate:Date) {
        const daySlots = new Array<{'slotDate':Date, 'startSlot':number}>();
        for(let i = 0; i < doctorHours.length; i++) {
            if(weekdayArr[day_numb] === doctorHours[i].day) {
                const startSlot = stringToTime(doctorHours[i].start);
                const endSlot = stringToTime(doctorHours[i].end);

                let slot_counter = startSlot;
                while (slot_counter < endSlot- (30*Math.floor((expectedDuration-1)/30))) {
                    // eslint-disable-next-line max-len
                    const day = new Date(sDate.getFullYear(), sDate.getMonth(), sDate.getDate() + day_numb, Math.floor(slot_counter/60), slot_counter%60);
                    if(day >= currentDate) {
                        daySlots.push({ 'slotDate':day, 'startSlot': slot_counter });
                    }
                    slot_counter = slot_counter + 30;
                }
            }
        }
        return daySlots;
    }

    function TimeSlots() {
        const weekSlots = findSlots(startDay);
        const options= Array<Array<string>>(weekSlots.length);

        for(let i = 0; i < weekSlots.length; i++) {
            const day_options= Array<string>();
            for(let j = 0; j < weekSlots[i].length; j++) {
                day_options.push(weekSlots[i][j].slotDate.toISOString());
                    
            }
            options.push(day_options);
        }
        
        let defaultValue= '';let dv_bool= true;let dv_counter = 0;
        while (dv_bool && dv_counter < options.length) {
            if(options[dv_counter] !== undefined && options[dv_counter] !== [] &&
                options[dv_counter][0] !== undefined) {
                defaultValue = options[dv_counter][0];
                dv_bool = false;
            }
            dv_counter = dv_counter + 1;
        }
        const { getRootProps, getRadioProps } = useRadioGroup({
            defaultValue: defaultValue,
            name: 'framework',
            onChange: printTheInt,
        });

        const group = getRootProps();

        return (
            <Grid
                gap={4}
                templateColumns="repeat(7, 1fr)"
                templateRows="repeat(13, 1fr)"
                {...group}
            >
                {options.map(slotDay => (
                    // eslint-disable-next-line react/jsx-key
                    <GridItem colSpan={1} rowSpan={12}><Center>
                        <Stack {...group}>
                            {slotDay.map(value => {
                                const radio = getRadioProps({ value });
                                return (
                                    <RadioCard key={value} {...radio}>
                                        {
                                            // eslint-disable-next-line max-len
                                            `${new Date(value).toLocaleTimeString().split(':')[0] }:${ new Date(value).toLocaleTimeString().split(':')[1]}`
                                        }
                                    </RadioCard>
                                );
                            })}
                        </Stack></Center>
                    </GridItem>
                ))}
            </Grid>
        );
    }

    function printTheInt(props: any) {
        console.log(props);
        expectedTime = new Date(`${props }`);
        //setExpectedTime(expectedTime);
        //setExpectedTime(new Date(props));
        console.log(expectedTime);
    }
    
    useEffect(() => {
        setValidForm(expectedTime != null);
    }, [expectedTime, setValidForm]);

    return (
        <div>
            <Container maxW="container.l">
                <Box borderRadius="lg" borderWidth="1px" maxW="l" overflow="hidden">
                    <Box p={6}>
                        <Center height="20px">
                            <Divider />
                        </Center>
                        <Grid
                            gap={4}
                            h="30px"
                            templateColumns="repeat(7, 1fr)"
                            templateRows="repeat(1, 1fr)"
                        >
                            <GridItem colSpan={1} rowSpan={1}>
                                <IconButton aria-label="PriorWeek"
                                    icon={<ArrowLeftIcon />}
                                    isActive={prevIsActive}
                                    onClick={() => {
                                        // eslint-disable-next-line max-len
                                        setStartDay(new Date(startDay.getFullYear(), startDay.getMonth(), startDay.getDate() - 7));
                                        setPrevIsActive(startDay <= currentDate);
                                    }}
                                />
                            </GridItem>
                            <GridItem colSpan={5} rowSpan={1}>
                                <Center height="30px">
                                    {startDay.toDateString()} - {
                                        new Date(
                                            startDay.getFullYear(),
                                            startDay.getMonth(),
                                            startDay.getDate() + 6).toDateString()}
                                </Center>
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1}>
                                <IconButton aria-label="NextWeek" icon={<ArrowRightIcon />}
                                    onClick={() => {
                                        // eslint-disable-next-line max-len
                                        setStartDay(new Date(startDay.getFullYear(), startDay.getMonth(), startDay.getDate() + 7));
                                    }}/>
                            </GridItem>
                        </Grid>
                        <Center height="50px">
                            <Divider />
                        </Center>
                        <Grid
                            gap={4}
                            h="30px"
                            templateColumns="repeat(7, 1fr)"
                            templateRows="repeat(13, 1fr)"
                        >
                            {['Mo', 'Tu', 'We', 'Thu', 'Fr', 'Sa', 'Su'].map(day => (
                                <GridItem key={day}><Center> {day}</Center></GridItem>
                            ))}
                        </Grid>
                        <TimeSlots/>
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

function RadioCard(props:any) {
    const { getInputProps, getCheckboxProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
        <Box as="label">
            <input {...input} />
            <Box
                {...checkbox}
                _checked={{
                    bg: 'green.600',
                    borderColor: 'green.600',
                    color: 'white',
                }}
                _focus={{
                    boxShadow: 'outline',
                }}
                borderRadius="full"
                borderWidth="1px"
                boxShadow="md"
                cursor="pointer"
                px={5}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    );
}

export default SelectDate;
