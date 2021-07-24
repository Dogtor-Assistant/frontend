import type { Weekday } from 'BookAppointment/__generated__/Menu_doctor.graphql';
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
export type Insurance = 'Private' | 'Public';
const insuranceArr: Insurance[] = ['Public', 'Private'];

type AppointmentOverviewProps = {
    doctorName: string,
    patientNotes: string,
    setInsurance: React.Dispatch<React.SetStateAction<'Private' | 'Public'>>,
    insurance: Insurance,
    possibleServices: ReadonlyArray<{
        readonly id: string,
        readonly description: string | null,
        readonly estimatedDuration: number | null,
        readonly name: string,
        readonly privateCovered: boolean | null,
        readonly publicCovered: boolean | null,
    }>,
    expectedDuration: number,
    selectedServices: Array<{
        readonly id: string,
        readonly description: string | null,
        readonly estimatedDuration: number | null,
        readonly name: string,
        readonly privateCovered: boolean | null,
        readonly publicCovered: boolean | null,
    }>,
    setExpectedDuration: React.Dispatch<React.SetStateAction<number>>,
    setSelectedServices: React.Dispatch<React.SetStateAction<Array<{
        readonly id: string,
        readonly description: string | null,
        readonly estimatedDuration: number | null,
        readonly name: string,
        readonly privateCovered: boolean | null,
        readonly publicCovered: boolean | null,
    }>>>,
    setSelectedServicesID: React.Dispatch<React.SetStateAction<Array<string>>>,
    setValidForm: React.Dispatch<React.SetStateAction<boolean>>,
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
    currentTime: Date,
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
    expectedDuration,
    selectedServices,
    setExpectedDuration,
    setSelectedServices,
    setValidForm,
    blockedAppointments,
    doctorHours,
    expectedTime,
    setExpectedTime,
    setSelectedServicesID,
    setPatientNotes,
    shareData,
    setShareData,
}): ReactElement => {
    
    useEffect(() => {
        setValidForm(possibleServices != null);
    }, [possibleServices, setValidForm]);

    function ShowInsurance() {
        if (insurance === insuranceArr[1]) {
            return(
                <RadioGroup
                    defaultValue='Private' onChange={() => {
                        setInsurance(insuranceArr[0]);
                    }}
                    value={insurance}
                >
                    <HStack>
                        <Grid
                            gap={30}
                            templateColumns="repeat(2, 1fr)"
                            w="200px"
                        >
                            <Radio value="Public">Public</Radio>
                            <Radio value="Private">Private</Radio>
                        </Grid>
                    </HStack>
                </RadioGroup>
            );
        }
        
        return(
            <RadioGroup
                defaultValue='Public' onChange={() => {
                    setInsurance(insuranceArr[1]);
                }}
                value={insurance}
            >
                <HStack>
                    <Grid
                        gap={30}
                        templateColumns="repeat(2, 1fr)"
                        w="200px"
                    >
                        <Radio value="Public">Public</Radio>
                        <Radio value="Private">Private</Radio>
                    </Grid>
                </HStack>
            </RadioGroup>
        );
    }

    function ShowShareData() {
        if (shareData) {
            return(
                <Box
                    as="h4"
                    fontWeight="semibold"
                    lineHeight="tight"
                    mt="1"
                    onChange={() => {
                        if (shareData) {
                            setShareData(false);
                        }
                        else {
                            setShareData(true);
                        }
                    }}
                    paddingLeft={20}>
                    <Checkbox defaultIsChecked size="md">
                        I hereby agree
                        to share my appointment history and personal profile with the doctor.
                    </Checkbox>
                </Box>
            );
        }
        return(
            <Box
                as="h4"
                fontWeight="semibold"
                lineHeight="tight"
                mt="1"
                onChange={() => {
                    if (shareData) {
                        setShareData(false);
                    }
                    else {
                        setShareData(true);
                    }
                }}
                paddingLeft={20}
            >
                <Checkbox size="md">
                    I hereby agree
                    to share my appointment history and personal profile with the doctor.
                </Checkbox>
            </Box>
        );
    }

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
            <Container maxW="container.lg">
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
                                    {`${expectedTime.toDateString() } ${ expectedTime.toLocaleTimeString()}`}
                                </Box>
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1}>
                                <Center>
                                    <AppDate
                                        blockedAppointments={blockedAppointments}
                                        doctorHours={doctorHours} expectedDuration={expectedDuration}
                                        expectedTime={expectedTime} setExpectedTime={setExpectedTime}
                                        setValidForm={setValidForm}/>
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
                                    <ShowInsurance/>
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
                                    Appointment Services
                                </Box>
                            </GridItem>
                            <GridItem colSpan={3} rowSpan={1}>
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
                                                key={value.id}
                                                variant="solid"
                                            >
                                                <TagLabel>{value.name}</TagLabel>
                                                <TagCloseButton />
                                            </Tag>
                                        ))}
                                    </HStack>
                                </Box>
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1}>
                                <AppService
                                    expectedDuration={expectedDuration} insurance={insurance}
                                    possibleServices={possibleServices}
                                    selectedServices={selectedServices} setExpectedDuration={setExpectedDuration}
                                    setInsurance={setInsurance} setSelectedServices={setSelectedServices}
                                    setSelectedServicesID={setSelectedServicesID} setValidForm={setValidForm}
                                />
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
                                <ShowShareData/>
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
