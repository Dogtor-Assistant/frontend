import type { FC, ReactElement } from 'react';

import React, { useState } from 'react';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    Spacer,
    Text,
    VStack,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';

type stepFourFormProps = {
    setAllergies: React.Dispatch<React.SetStateAction<string[]>>,
    setMedConditions: React.Dispatch<React.SetStateAction<string[]>>,
    setMedications: React.Dispatch<React.SetStateAction<string[]>>,
    setSurgeries: React.Dispatch<React.SetStateAction<string[]>>,
    allergies: Array<string>,
    medConditions: Array<string>,
    medications: Array<string>,
    surgeries: Array<string>,
}

const StepFourForm: FC<stepFourFormProps> =
({
    setAllergies, setMedConditions, setMedications, setSurgeries,
    allergies, medConditions, medications, surgeries,
}): ReactElement => {
    const [allergyIn, setAllergyIn] = useState('');
    const [medConditionIn, setMedConditionIn] = useState('');
    const [medicationIn, setMedicationIn] = useState('');
    const [surgeryIn, setSurgeryIn] = useState('');

    // Add Allergy
    const addAllergy = () => {
        if (!allergyIn || /^\s*$/.test(allergyIn)) {
            return;
        }

        const newAllergies = [...allergies, allergyIn];

        setAllergies(newAllergies);
        
        setAllergyIn('');
    };

    // Remove Allergy
    const removeAllergy = (i: number) => {
        const removedArr = [...allergies].filter(s => allergies.indexOf(s) !== i);
        setAllergies(removedArr);
    };

    // Add MedCond
    const addMedCond = () => {
        if (!medConditionIn || /^\s*$/.test(medConditionIn)) {
            return;
        }

        const newMedConditions = [...medConditions, medConditionIn];

        setMedConditions(newMedConditions);
        
        setMedConditionIn('');
    };

    // Remove Allergy
    const removeMedCond = (i: number) => {
        const removedArr = [...medConditions].filter(s => medConditions.indexOf(s) !== i);
        setMedConditions(removedArr);
    };

    // Add Medication
    const addMedication = () => {
        if (!medicationIn || /^\s*$/.test(medicationIn)) {
            return;
        }

        const newMedications = [...medications, medicationIn];

        setMedications(newMedications);
        
        setMedicationIn('');
    };

    // Remove Medication
    const removeMedication = (i: number) => {
        const removedArr = [...medications].filter(s => medications.indexOf(s) !== i);
        setMedications(removedArr);
    };

    // Add Surgery
    const addSurgery = () => {
        if (!surgeryIn || /^\s*$/.test(surgeryIn)) {
            return;
        }

        const newSurgeries = [...surgeries, surgeryIn];

        setSurgeries(newSurgeries);
        
        setSurgeryIn('');
    };

    // Remove Surgery
    const removeSurgery = (i: number) => {
        const removedArr = [...surgeries].filter(s => surgeries.indexOf(s) !== i);
        setSurgeries(removedArr);
    };

    return (
        <div>
            <VStack align="stretch" mb={6}>
                <Box>
                    <FormControl>
                        <FormLabel>Allergies</FormLabel>
                        {allergies.map((s, i) => {
                            return (
                                <Flex alignItems={'center'} key={i} mt={6} pl={4}>
                                    <Text>{s}</Text>
                                    <Spacer />
                                    <IconButton
                                        aria-label="Delete Allergy"
                                        colorScheme="blue"
                                        icon={<DeleteIcon />}
                                        marginEnd="0"
                                        onClick={() => removeAllergy(i)}
                                        textAlign="center"
                                        variant="solid"
                                    >
                                    </IconButton>
                                </Flex>
                            );
                        })}
                        <Input
                            mt={6}
                            onChange={event => {
                                setAllergyIn(event.target.value);
                            }}
                            type="text"
                            value={allergyIn}
                        />
                    </FormControl>
                    <Button
                        colorScheme="blue"
                        leftIcon={<AddIcon />}
                        mt={6}
                        onClick={addAllergy}
                        variant="ghost"
                    >
                        Add Allergy
                    </Button>
                </Box>
                <Box>
                    <FormControl>
                        <FormLabel mt={6}>Medical Conditions</FormLabel>
                        {medConditions.map((s, i) => {
                            return (
                                <Flex alignItems={'center'} key={i} mt={6} pl={4}>
                                    <Text>{s}</Text>
                                    <Spacer />
                                    <IconButton
                                        aria-label="Delete Medical Condition"
                                        colorScheme="blue"
                                        icon={<DeleteIcon />}
                                        marginEnd="0"
                                        onClick={() => removeMedCond(i)}
                                        textAlign="center"
                                        variant="solid"
                                    >
                                    </IconButton>
                                </Flex>
                            );
                        })}
                        <Input
                            mt={6}
                            onChange={event => {
                                setMedConditionIn(event.target.value);
                            }}
                            type="text"
                            value={medConditionIn}
                        />
                    </FormControl>
                    <Button
                        colorScheme="blue"
                        leftIcon={<AddIcon />}
                        mt={6}
                        onClick={addMedCond}
                        variant="ghost"
                    >
                        Add Medical Condition
                    </Button>
                </Box>
                <Box>
                    <FormControl>
                        <FormLabel mt={6}>Medications</FormLabel>
                        {medications.map((s, i) => {
                            return (
                                <Flex alignItems={'center'} key={i} mt={6} pl={4}>
                                    <Text>{s}</Text>
                                    <Spacer />
                                    <IconButton
                                        aria-label="Delete Medication"
                                        colorScheme="blue"
                                        icon={<DeleteIcon />}
                                        marginEnd="0"
                                        onClick={() => removeMedication(i)}
                                        textAlign="center"
                                        variant="solid"
                                    >
                                    </IconButton>
                                </Flex>
                            );
                        })}
                        <Input
                            mt={6}
                            onChange={event => {
                                setMedicationIn(event.target.value);
                            }}
                            type="text"
                            value={medicationIn}
                        />
                    </FormControl>
                    <Button
                        colorScheme="blue"
                        leftIcon={<AddIcon />}
                        mt={6}
                        onClick={addMedication}
                        variant="ghost"
                    >
                        Add Medication
                    </Button>
                </Box>
                <Box>
                    <FormControl>
                        <FormLabel mt={6}>Surgeries</FormLabel>
                        {surgeries.map((s, i) => {
                            return (
                                <Flex alignItems={'center'} key={i} mt={6} pl={4}>
                                    <Text>{s}</Text>
                                    <Spacer />
                                    <IconButton
                                        aria-label="Delete Surgery"
                                        colorScheme="blue"
                                        icon={<DeleteIcon />}
                                        marginEnd="0"
                                        onClick={() => removeSurgery(i)}
                                        textAlign="center"
                                        variant="solid"
                                    >
                                    </IconButton>
                                </Flex>
                            );
                        })}
                        <Input
                            mt={6}
                            onChange={event => {
                                setSurgeryIn(event.target.value);
                            }}
                            type="text"
                            value={surgeryIn}
                        />
                    </FormControl>
                    <Button
                        colorScheme="blue"
                        leftIcon={<AddIcon />}
                        mt={6}
                        onClick={addSurgery}
                        variant="ghost"
                    >
                        Add Surgery
                    </Button>
                </Box>
            </VStack>
        </div>
    );
};

export default StepFourForm;
