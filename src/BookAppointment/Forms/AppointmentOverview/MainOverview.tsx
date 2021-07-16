import type { FC, ReactElement } from 'react';

import React, { useEffect } from 'react';
import {
    Box,
    ButtonGroup,
    Center,
    Checkbox,
    Container,
    Divider,
    Editable,
    EditableInput,
    EditablePreview,
    Flex,
    Grid,
    GridItem,
    HStack,
    IconButton,
    Radio,
    RadioGroup,
    Tag,
    TagCloseButton,
    TagLabel,
    useEditableControls,
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';

import AppDate from './AppDate';
import AppService from './AppService';

export type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

type AppointmentOverviewProps = {
    doctorName: string,
    patientNotes: string,
    setInsurance: React.Dispatch<React.SetStateAction<number>>,
    insurance: number,
    possibleServices: Array<string>,
    serviceDuration: Array<number>,
    expectedDuration: number,
    selectedServices: Array<string>,
    serviceInsurance: Array<number>,
    setExpectedDuration: React.Dispatch<React.SetStateAction<number>>,
    setSelectedServices: React.Dispatch<React.SetStateAction<Array<string>>>,
    setValidForm: React.Dispatch<React.SetStateAction<boolean>>,
    blockedAppointments: Array<{'expectedTime': Date, 'expectedDuration': number} | null>,
    doctorHours: Array<{'day': Day, 'slotStart': number, 'slotStop': number}>,
    expectedTime: Date,
    setExpectedTime: React.Dispatch<React.SetStateAction<Date>>,
    setPatientNotes: React.Dispatch<React.SetStateAction<string>>,
    shareData: boolean,
    setShareData: React.Dispatch<React.SetStateAction<boolean>>,
}
const AppointmentOverview: FC<AppointmentOverviewProps> =
({
    doctorName,
    patientNotes,
    setInsurance,
    insurance,
    possibleServices,
    serviceDuration,
    expectedDuration,
    selectedServices,
    serviceInsurance,
    setExpectedDuration,
    setSelectedServices,
    setValidForm,
    blockedAppointments,
    doctorHours,
    expectedTime,
    setExpectedTime,
    setPatientNotes,
    shareData,
    setShareData,
}): ReactElement => {
    
    useEffect(() => {
        setValidForm(possibleServices != null);
    }, [possibleServices, setValidForm]);

    const showInsurance = () => {
        if (insurance === 1) {
            <RadioGroup defaultValue='1' onChange={event => {
                setInsurance(parseInt(event));
            }}
            value={insurance.toString()}
            >
                <HStack>
                    <Grid
                        gap={20}
                        templateColumns="repeat(2, 1fr)"
                        w="200px"
                    >
                        <Radio value="0">Public</Radio>
                        <Radio value="1">Private</Radio>
                    </Grid>
                </HStack>
            </RadioGroup>;
        }
        else{
            <RadioGroup defaultValue='0' onChange={event => {
                setInsurance(parseInt(event));
            }}
            value={insurance.toString()}
            >
                <HStack>
                    <Grid
                        gap={20}
                        templateColumns="repeat(2, 1fr)"
                        w="200px"
                    >
                        <Radio value="0">Public</Radio>
                        <Radio value="1">Private</Radio>
                    </Grid>
                </HStack>
            </RadioGroup>;
        }
    };

    const showShareData = () => {
        if (shareData) {
            <Box
                as="h4"
                fontWeight="semibold"
                isTruncated
                lineHeight="tight"
                mt="1"
                paddingLeft={20}
                onChange={event => {
                    if (shareData) {
                        setShareData(false);
                    }
                    else {
                        setShareData(true);
                    }
                }}>
                <Checkbox>
                    I hereby agree
                    to share my appointment history and personal profile with the doctor.
                </Checkbox>
            </Box>;
        }
        else{
            <Box
                as="h4"
                fontWeight="semibold"
                isTruncated
                lineHeight="tight"
                mt="1"
                paddingLeft={20}
                onChange={event => {
                    if (shareData) {
                        setShareData(false);
                    }
                    else {
                        setShareData(true);
                    }
                }}
            >
                <Checkbox>
                    I hereby agree
                    to share my appointment history and personal profile with the doctor.
                </Checkbox>
            </Box>;
        }
    };

    function EditableControls() {
        const {
            isEditing,
            getSubmitButtonProps,
            getCancelButtonProps,
            getEditButtonProps,
        } = useEditableControls();

        return isEditing ? (
            <ButtonGroup justifyContent="center" size="sm">
                <IconButton aria-label="Submit DateTime" icon={<CheckIcon />} {
                    ...getSubmitButtonProps()
                } />
                <IconButton aria-label="Cancel DateTime" icon={<CloseIcon />} {...getCancelButtonProps()} />
            </ButtonGroup>
        ) : (
            <Flex justifyContent="center">
                <IconButton aria-label="Edit DateTime" color="green.300" icon={<EditIcon />} size="sm" {
                    ...getEditButtonProps()
                } />
            </Flex>
        );
    }

    return (
        <div>
            <Container maxW="container.l">
                <Center height="50px">
                    <Divider />
                </Center>
                <Box borderRadius="lg" borderWidth="1px" maxW="l" overflow="hidden">
                    <Box p={6}>
                        <Grid
                            gap={4}
                            h="400px"
                            templateColumns="repeat(5, 1fr)"
                            templateRows="repeat(7, 1fr)"
                        >
                            <GridItem colSpan={1} rowSpan={1} >
                                <Box
                                    as="h4"
                                    fontWeight="semibold"
                                    isTruncated
                                    lineHeight="tight"
                                    mt="1"
                                    paddingLeft={4}
                                >
                                    Doctor
                                </Box>
                            </GridItem>
                            <GridItem colSpan={4} >
                                <Box
                                    as="h2"
                                    isTruncated
                                    lineHeight="tight"
                                    mt="1"
                                    paddingLeft={4}
                                >
                                    {doctorName}
                                </Box>
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1} >
                                <Box
                                    as="h4"
                                    fontWeight="semibold"
                                    isTruncated
                                    lineHeight="tight"
                                    mt="1"
                                    paddingLeft={4}
                                >
                                    Appointment Date
                                </Box>
                            </GridItem>
                            <GridItem colSpan={3} rowSpan={1}>
                                <Box
                                    as="h2"
                                    lineHeight="tight"
                                    mt="1"
                                    paddingLeft={4}
                                >
                                    {expectedTime}
                                </Box>
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1}>
                                <Center>
                                    <AppDate />
                                </Center>
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1} >
                                <Box
                                    as="h4"
                                    fontWeight="semibold"
                                    isTruncated
                                    lineHeight="tight"
                                    mt="1"
                                    paddingLeft={4}
                                >
                                    Insurance Type
                                </Box>
                            </GridItem>
                            <GridItem colSpan={4} >
                                <Box
                                    as="h2"
                                    lineHeight="tight"
                                    mt="1"
                                    paddingLeft={4}
                                >
                                    {showInsurance}
                                </Box>
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={2} >
                                <Box
                                    as="h4"
                                    fontWeight="semibold"
                                    isTruncated
                                    lineHeight="tight"
                                    mt="1"
                                    paddingLeft={4}
                                >
                                    Appointment Services
                                </Box>
                            </GridItem>
                            <GridItem colSpan={3} rowSpan={2}>
                                <Box
                                    as="h2"
                                    lineHeight="tight"
                                    mt="1"
                                    paddingLeft={4}
                                >
                                    <HStack spacing={4}>
                                        {selectedServices.map(value => (
                                            <Tag
                                                borderRadius="full"
                                                colorScheme="green"
                                                key={value}
                                                variant="solid"
                                            >
                                                <TagLabel>{value}</TagLabel>
                                                <TagCloseButton />
                                            </Tag>
                                        ))}
                                    </HStack>
                                </Box>
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={2}>
                                <AppService/>
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1} >
                                <Box
                                    as="h4"
                                    fontWeight="semibold"
                                    isTruncated
                                    lineHeight="tight"
                                    mt="1"
                                    paddingLeft={4}
                                >
                                    Appointment Notes
                                </Box>
                            </GridItem>
                            <GridItem colSpan={4} rowSpan={2}>
                                <Box
                                    as="h2"
                                    lineHeight="tight"
                                    mt="1"
                                    paddingLeft={4}
                                >
                                    <Editable
                                        as="h2"
                                        defaultValue={patientNotes}
                                    >
                                        <Grid
                                            gap={4}
                                            templateColumns="repeat(4, 1fr)"
                                            templateRows="repeat(1, 1fr)"
                                        >
                                            <GridItem colSpan={3} rowSpan={1}>
                                                <EditablePreview />
                                                <EditableInput onChange={event => {
                                                    setPatientNotes(event.target.value);
                                                }}/>
                                            </GridItem>
                                            <GridItem colSpan={1} rowSpan={1}>
                                                <Center>
                                                    <EditableControls />
                                                </Center>
                                            </GridItem>
                                        </Grid>
                                    </Editable>
                                </Box>
                            </GridItem>
                            <GridItem colSpan={5} rowSpan={1} >
                                {showShareData}
                            </GridItem>

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

export default AppointmentOverview;