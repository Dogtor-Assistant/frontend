import type { TopServicesCard_doctor$key } from './__generated__/TopServicesCard_doctor.graphql';

import React from 'react';
import {
    Badge,
    Box,
    GridItem,
    Text,
    VStack,
    Wrap,
} from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type Props = {
    doctor: TopServicesCard_doctor$key,
}

function TopServicesCard(props: Props) {
    const doctor = useFragment(
        graphql`
            fragment TopServicesCard_doctor on Doctor {
                services {
                    id
                    name
                }
            }
        `,
        props.doctor,
    );

    if (doctor.services.length < 1) {
        return null;
    }

    return (
        <VStack align="start">
            <Text
                fontSize="md"
                fontWeight="semibold"
            >
                Popular Services
            </Text>
            <Box
                borderRadius="lg"
                borderWidth="1px"
                overflow="hidden"
                w="xs"
            >
                <Wrap
                    align="start"
                    p={4}
                    w="100%"
                >
                    {
                        doctor.services.map(({ id, name }) => {
                            return (
                                <GridItem key={id}>
                                    <Badge
                                        borderRadius="xl"
                                        px="2"
                                    >
                                        {name}
                                    </Badge>
                                </GridItem>
                            );
                        })
                    }
                </Wrap>
            </Box>
        </VStack>
    );
}

export default TopServicesCard;
