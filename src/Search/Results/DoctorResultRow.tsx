import type { DoctorResultRow_doctor$key } from './__generated__/DoctorResultRow_doctor.graphql';

import React from 'react';
import { Badge, Box, useColorModeValue } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Rating from 'Rating';

type Props = {
    doctor: DoctorResultRow_doctor$key,
}

function DoctorResultRow(props: Props) {
    const doctor = useFragment(
        graphql`
            fragment DoctorResultRow_doctor on Doctor {
                firstname
                lastname

                rating
            }
        `,
        props.doctor,
    );

    const ratingColor = useColorModeValue('dark', 'gray.800');

    return (
        <Box p="2" w="100%">
            <Box borderRadius="lg" borderWidth="1px" overflow="hidden" w="100%">
                <Box p="6" w="100%">
                    <Box alignItems="baseline" d="flex" w="100%">
                        <Badge borderRadius="full" colorScheme="teal" px="2">
                            New
                        </Badge>
                        <Box
                            color="gray.500"
                            fontSize="xs"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            ml="2"
                            textTransform="uppercase"
                        >
                            Dr. {doctor.firstname} &bull; {doctor.lastname}
                        </Box>
                    </Box>

                    <Box alignItems="center" d="flex" mt="2">
                        <Rating color={ratingColor} value={doctor.rating}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default DoctorResultRow;
