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
} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

export type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

type SelectDateProps = {
    blockedAppointments: Array<{'expectedTime': Date, 'expectedDuration': number} | null>,
    doctorHours: Array<{'day': Day, 'slotStart': number, 'slotStop': number}>,
    expectedDuration: number,
    expectedTime: Date,
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
    setValidForm,
}): ReactElement => {
    const [serviceInsuranceError, setServiceInsuranceError] = useState(false);
    const currentDate = new Date();
    const getDoctorSlots = () => {

        const slotTable = Array<Array<number>>([], [], [], [], [], [], [], []);
        for (let slot_counter = currentDate.getDay() - 1; slot_counter < doctorHours.length; slot_counter++) {
            const slot_duration = Math.ceil(expectedDuration/30);
            let dayNumber = 0;

            if(doctorHours[slot_counter]?.day === 'Tuesday') {
                dayNumber = 1;
            }if(doctorHours[slot_counter]?.day === 'Wednesday') {
                dayNumber = 2;
            }if(doctorHours[slot_counter]?.day === 'Thursday') {
                dayNumber = 3;
            }if(doctorHours[slot_counter]?.day === 'Friday') {
                dayNumber = 4;
            }if(doctorHours[slot_counter]?.day === 'Saturday') {
                dayNumber = 5;
            }if(doctorHours[slot_counter]?.day === 'Sunday') {
                dayNumber = 6;
            }

            let slotStart = doctorHours[slot_counter].slotStart;

            while(slotStart < doctorHours[slot_counter].slotStop) {
                slotTable[dayNumber].push(slotStart);
                slotStart = slotStart + (slot_duration * 0.5);
            }
        }
        return slotTable;
    };
    const calculateSlots = () => {
        const lastDayOfTheWeek = new Date(
            currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + (7-currentDate.getDay()), 23);
        const blockedTimes = [[], [], [], [], [], [], []];

        /*if(blockedAppointments != null) {
            for(let bA_counter = 0; bA_counter < blockedAppointments.length; bA_counter++) {
                if(blockedAppointments[bA_counter].expectedTime >= currentDate) {
                    if(blockedAppointments[bA_counter].expectedTime < lastDayOfTheWeek) {
                        blockedTimes[blockedAppointments[bA_counter].expectedTime.getDay() - 1].push(
                            blockedAppointments[bA_counter]);
                    }
                }
            }
        }*/

    };
    
    useEffect(() => {
        setValidForm(true);
    }, [setValidForm]);

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
                            05.07.2021 - 10.07.2021
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
                                <IconButton aria-label="Submit DateTime" icon={<ArrowLeftIcon />} />
                            </GridItem>
                            {['Mo', 'Tu', 'We', 'Thu', 'Fr', 'Sa', 'Su'].map(day => (
                                <GridItem key={day}><Center> {day}</Center></GridItem>
                            ))}
                            <GridItem colSpan={1} rowSpan={13}>
                                <IconButton aria-label="Submit DateTime" icon={<ArrowRightIcon />} />
                            </GridItem>
                            {getDoctorSlots().map(slotDay => (
                                // eslint-disable-next-line react/jsx-key
                                <GridItem colSpan={1} rowSpan={12}><Center>
                                    <Stack spacing={4}>
                                        if(slotDay != []){
                                            slotDay.map(slot => (
                                                <Button
                                                    borderRadius="full"
                                                    colorScheme="green"
                                                    key={slot}
                                                    variant="solid"
                                                >
                                                    {slot}
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

export default SelectDate;
