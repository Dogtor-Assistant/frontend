import type { Weekday } from 'BookAppointment/__generated__/Menu_doctor.graphql';
import type { FC, ReactElement } from 'react';

import React from 'react';
import {
    Button,
    Center,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    IconButton,
    useDisclosure,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

import SelectDate from '../SelectDate';

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
    expectedDuration: number,
    setExpectedTime: React.Dispatch<React.SetStateAction<Date>>,
    setValidForm: React.Dispatch<React.SetStateAction<boolean>>,
}
const AppDate: FC<SelectDateProps> =
({
    blockedAppointments,
    doctorHours,
    expectedDuration,
    setExpectedTime,
    expectedTime,
    setValidForm,
}): ReactElement => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Center>
            <IconButton aria-label="Edit DateTime" color="green.300" icon={<EditIcon />} onClick={onOpen} size="sm" />
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                placement="right"
                size= "lg"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Select Date</DrawerHeader>

                    <DrawerBody>
                        <SelectDate
                            blockedAppointments={blockedAppointments} currentDate={new Date()}
                            doctorHours={doctorHours} expectedDuration={expectedDuration}
                            expectedTime={expectedTime} setExpectedTime={setExpectedTime}
                            setValidForm={setValidForm}
                        />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button mr={3} onClick={onClose} variant="outline">
                            Close
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Center>
    );
};

export default AppDate;
