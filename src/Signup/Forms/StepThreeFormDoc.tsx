import type { Weekday } from '../__generated__/DoctorUserCreateMutation.graphql';
import type { FC, ReactElement } from 'react';

import { useEffect } from 'react';
import React, { useState } from 'react';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    HStack,
    IconButton,
    Input,
    Select,
    Spacer,
    Text,
    VStack,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';

type stepThreeFormProps = {
    setSlots: React.Dispatch<React.SetStateAction<{ day: Weekday, slotStart: string, slotStop: string }[]>>,
    setSpecialities: React.Dispatch<React.SetStateAction<string[]>>,
    setValidForm: React.Dispatch<React.SetStateAction<boolean>>,
    slots: Array<{ day: Weekday, slotStart: string, slotStop: string }>,
    specialities: Array<string>,
}

const StepThreeForm: FC<stepThreeFormProps> =
({
    setSlots, setSpecialities, setValidForm, slots, specialities,
}): ReactElement => {
    const [specialityIn, setSpecialityIn] = useState('');
    const [dayIn, setDayIn] = useState(-1);
    const [startIn, setStartIn] = useState('');
    const [stopIn, setStopIn] = useState('');

    const dayNamesArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const [specialitiesError, setSpecialitiesError] = useState(false);
    
    useEffect(() => {
        setValidForm(specialities.length >= 1);
        setSpecialitiesError(specialities.length < 1);
    }, [setValidForm, setSpecialitiesError, specialities]);

    // Add Slot
    const addSlot = () => {

        if (dayIn === -1 || startIn === '' || stopIn === '') {
            return;
        }

        const slotIn = { day: dayNamesArr[dayIn] as Weekday, slotStart: startIn, slotStop: stopIn };

        const newSlots = [...slots, slotIn];

        setSlots(newSlots);
        
        setDayIn(-1);
        setStartIn('');
        setStopIn('');
    };

    // Remove Slot
    const removeSlot = (i: number) => {
        const removedArr = [...slots].filter(s => slots.indexOf(s) !== i);
        setSlots(removedArr);
    };

    // Add Speiality
    const addSpeciality = () => {
        if (!specialityIn || /^\s*$/.test(specialityIn)) {
            return;
        }

        const newSpecialities = [...specialities, specialityIn];

        setSpecialities(newSpecialities);
        
        setSpecialityIn('');
    };

    // Remove Speciality
    const removeSpeciality = (i: number) => {
        const removedArr = [...specialities].filter(s => specialities.indexOf(s) !== i);
        setSpecialities(removedArr);
    };

    return (
        <div>
            <VStack align="left" mb={6}>
                <Box>
                    <FormLabel>Provided Slots</FormLabel>
                    {slots.map((s, i) => {
                        return (
                            <Flex alignItems={'center'} key={i} mt={6} pl={4}>
                                <Text>{s.day} {s.slotStart} - {s.slotStop}</Text>
                                <Spacer />
                                <IconButton
                                    aria-label="Delete Speciality"
                                    colorScheme="blue"
                                    icon={<DeleteIcon />}
                                    marginEnd="0"
                                    onClick={() => removeSlot(i)}
                                    textAlign="center"
                                    variant="solid"
                                >
                                </IconButton>
                            </Flex>
                        );
                    })}
                    <HStack mt={6} spacing="24px">
                        <Select
                            onChange={event => {
                                if (!event.target.value) setDayIn(-1);
                                else setDayIn(parseInt(event.target.value));
                            }}
                            placeholder="Day"
                            value={dayIn}
                        >
                            <option value="0">Monday</option>
                            <option value="1">Tuesday</option>
                            <option value="2">Wednesday</option>
                            <option value="3">Thursday</option>
                            <option value="4">Friday</option>
                            <option value="5">Saturday</option>
                            <option value="6">Sunday</option>
                        </Select>
                        <Select
                            onChange={event => {
                                if (!event.target.value) setStartIn('');
                                else setStartIn(event.target.value);
                            }}
                            placeholder="Start"
                            value={startIn}
                        >
                            <option value="7:00">7:00</option>
                            <option value="7:30">7:30</option>
                            <option value="8:00">8:00</option>
                            <option value="8:30">8:30</option>
                            <option value="9:00">9:00</option>
                            <option value="9:30">9:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                            <option value="12:00">12:00</option>
                            <option value="12:30">12:30</option>
                            <option value="13:00">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="14:00">14:00</option>
                            <option value="14:30">14:30</option>
                            <option value="15:00">15:00</option>
                            <option value="15:30">15:30</option>
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                            <option value="18:00">18:00</option>
                            <option value="18:30">18:30</option>
                            <option value="19:00">19:00</option>
                            <option value="19:30">19:30</option>
                            <option value="20:00">20:00</option>
                            <option value="20:30">20:30</option>
                            <option value="21:00">21:00</option>
                        </Select>
                        <Select
                            onChange={event => {
                                if (!event.target.value) setStopIn('');
                                else setStopIn(event.target.value);
                            }}
                            placeholder="End"
                            value={stopIn}
                        >
                            <option value="8:00">8:00</option>
                            <option value="8:30">8:30</option>
                            <option value="9:00">9:00</option>
                            <option value="9:30">9:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                            <option value="12:00">12:00</option>
                            <option value="12:30">12:30</option>
                            <option value="13:00">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="14:00">14:00</option>
                            <option value="14:30">14:30</option>
                            <option value="15:00">15:00</option>
                            <option value="15:30">15:30</option>
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                            <option value="18:00">18:00</option>
                            <option value="18:30">18:30</option>
                            <option value="19:00">19:00</option>
                            <option value="19:30">19:30</option>
                            <option value="20:00">20:00</option>
                            <option value="20:30">20:30</option>
                            <option value="21:00">21:00</option>
                            <option value="21:30">21:30</option>
                            <option value="22:00">22:00</option>
                            <option value="22:30">22:30</option>
                        </Select>
                    </HStack>
                    <Button
                        colorScheme="blue"
                        leftIcon={<AddIcon />}
                        mt={6}
                        onClick={addSlot}
                        variant="ghost"
                    >
                        Add Slot
                    </Button>
                </Box>
                <Box>
                    <FormControl isRequired>
                        <FormLabel mt={6}>Specialities</FormLabel>
                        {specialities.map((s, i) => {
                            return (
                                <Flex alignItems={'center'} key={i} mt={6} pl={4}>
                                    <Text>{s}</Text>
                                    <Spacer />
                                    <IconButton
                                        aria-label="Delete Speciality"
                                        colorScheme="blue"
                                        icon={<DeleteIcon />}
                                        marginEnd="0"
                                        onClick={() => removeSpeciality(i)}
                                        textAlign="center"
                                        variant="solid"
                                    >
                                    </IconButton>
                                </Flex>
                            );
                        })}
                        <Input
                            mt={6}
                            onBlur={() => {
                                setSpecialitiesError(specialities.length < 1);
                            }}
                            onChange={event => {
                                setSpecialityIn(event.target.value);
                            }}
                            type="text"
                            value={specialityIn}
                        />
                        <Button
                            colorScheme="blue"
                            leftIcon={<AddIcon />}
                            mt={6}
                            onClick={addSpeciality}
                            variant="ghost"
                        >
                        Add Speciality
                        </Button>
                        { specialitiesError &&
                        <FormHelperText color="red.200">Please enter at least 1 speciality</FormHelperText>
                        }
                    </FormControl>
                </Box>
            </VStack>
        </div>
    );
};

export default StepThreeForm;
