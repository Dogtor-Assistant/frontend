import type { DoctorResultRow_doctor$key } from './__generated__/DoctorResultRow_doctor.graphql';

import React from 'react';
import {
    Badge,
    Box,
    Button,
    Collapse,
    Flex,
    HStack,
    IconButton,
    Spacer,
    Text,
    useColorModeValue,
    useDisclosure,
    VStack,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Rating from 'Rating';
import DoctorDetails from './DoctorDetails';

import useRouteToBookAppointment from './useRouteToBookAppointment';

type Props = {
    doctor: DoctorResultRow_doctor$key,
}

function DoctorResultRow(props: Props) {
    const doctor = useFragment(
        graphql`
            fragment DoctorResultRow_doctor on Doctor {
                firstname
                lastname

                specialities                

                rating

                address {
                    streetName
                    streetNumber
                    city
                }

                ...DoctorDetails_doctor
                ...useRouteToBookAppointment_doctor
            }
        `,
        props.doctor,
    );

    const { isOpen, onToggle } = useDisclosure();
    const ratingColor = useColorModeValue('dark', 'gray.800');
    const bookAppointment = useRouteToBookAppointment(doctor);

    return (
        <Box
            borderRadius="lg"
            borderWidth="1px"
            overflow="hidden"
            w="100%"
        >
            <VStack
                align="start"
                p={4}
                w="100%"
            >
                <HStack>
                    <Text
                        fontSize="lg"
                        fontWeight="semibold"
                        letterSpacing="wide"
                    >
                        Dr. {doctor.firstname} {doctor.lastname}
                    </Text>

                    <Wrap>
                        {
                            doctor.specialities.map(
                                speciality => {
                                    return (
                                        <WrapItem key={speciality}>
                                            <Badge
                                                borderRadius="xl"
                                                px="2"
                                            >
                                                {speciality}
                                            </Badge>
                                        </WrapItem>
                                    );
                                },
                            )
                        }
                    </Wrap>
                </HStack>

                <Box alignItems="center" d="flex" mt="2">
                    <Rating color={ratingColor} value={doctor.rating}/>
                </Box>

                <Text
                    fontSize="md"
                    fontWeight="medium"
                    letterSpacing="wide"
                >
                    {doctor.address.streetName} {doctor.address.streetNumber}, {doctor.address.city}
                </Text>
                <Collapse
                    animateOpacity
                    in={isOpen}
                    style={{
                        width: '100%',
                    }}
                    unmountOnExit
                >
                    <DoctorDetails doctor={doctor} />
                </Collapse>
                <Flex align="center" w="100%">
                    <Box flex={1}/>
                    <Spacer />
                    <IconButton
                        aria-label={isOpen ? 'Close more info' : 'Show more info'}
                        fontSize="xl"
                        icon={isOpen ? <ChevronUpIcon/> : <ChevronDownIcon/>}
                        onClick={onToggle}
                        variant="unstyled"
                    />
                    <Spacer />
                    <Button
                        flex={1}
                        onClick={() => bookAppointment()}
                    >
                        Book Appointment
                    </Button>
                </Flex>
            </VStack>
        </Box>
    );
}

export default DoctorResultRow;
