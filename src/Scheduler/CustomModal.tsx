import type { ActivityLevel, Gender } from '../Signup/__generated__/PatientUserCreateMutation.graphql';

import React from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Divider,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';

// import AppointmentDelete from './AppointmentDelete';
// import AppointmentDone from './AppointmentDone';
// import AppointmentFollowup from './AppointmentFollowup';

type Props = {
    eventType:{
        id:string,
        title: string,
        start: string | number | Date | number[],
        end: string | number | Date | number[],
        lastName: string,
        firstName: string,
        patient: {
            activityLevel: ActivityLevel,
            address: {
                city: string,
                streetName: string,
                streetNumber: number,
                zipCode: number,
            },
            firstname: string,
            gender: Gender,
            height: number,
            id: string,
            isSmoker: boolean,
            lastname: string,
            surgeries: [string],
            weight: number,
         },

    },
    onClose: () => void,
    isOpen: boolean,
    handleOnCloseDone: ()=>void,
    handleOnCloseDelete: ()=>void,
    handleFollowupClick: ()=>void,
}

const CustomModal = ({
    eventType,
    onClose,
    isOpen,
    handleOnCloseDone,
    handleOnCloseDelete,
    handleFollowupClick,
}: Props) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size='xl'>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalHeader>
                    {
                        `Appointment ${ (typeof eventType.start === 'string') ?
                            eventType.start : ''}-${typeof eventType.end === 'string' ?
                            eventType.end : ''}`
                    }
                </ModalHeader>
                <Divider/>
                <ModalBody>
                    <Stack gridGap={1} spacing='24px'>
                        <Box fontSize='x-large' style={{
                            float:'right',
                        }}>
                            <strong>{eventType.title}</strong>
                        </Box>
                        <details>
                            <summary>More Details About Patient</summary>
                            <Table size="sm">
                                <Thead>
                                    <Tr>
                                        <Th>Patient</Th>
                                        <Th>Details</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>First Name:</Td>
                                        <Td>{eventType.patient.firstname}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Last Name:</Td>
                                        <Td>{eventType.patient.lastname}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Gender:</Td>
                                        <Td>{eventType.patient.gender}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Height:</Td>
                                        <Td>{eventType.patient.height}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Weight:</Td>
                                        <Td>{eventType.patient.weight}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Activity Level:</Td>
                                        <Td>{eventType.patient.activityLevel}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Is a smoker:</Td>
                                        <Td>{eventType.patient.isSmoker ? 'YES' : 'NO'}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Address:</Td>
                                        <Td>{eventType.patient.address.city}</Td>
                                    </Tr>
                                </Tbody>
                            </Table>

                        </details>
                    </Stack>
                </ModalBody>
                <Divider />
                <ModalFooter
                    alignItems='center'
                    border='0'
                    d='flex'
                    justifyContent='space-between'
                    pb={4}
                >
                    <ButtonGroup size='sm'>
                        <Button
                            colorScheme='green'
                            leftIcon={<CalendarIcon />}
                            onClick={handleFollowupClick}
                        >
                        Follow up
                        </Button>
                        {/* <AppointmentFollowup/> */}
                        {/* <AppointmentDone event={eventType} onClose={handleOnCloseDone}/>
                        <AppointmentDelete event={eventType} onClose={handleOnCloseDelete}/> */}
                    </ButtonGroup>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default CustomModal;

