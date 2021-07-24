import type { DoctorLocationCard_doctor$key } from './__generated__/DoctorLocationCard_doctor.graphql';

import React from 'react';
import {
    Badge,
    Box,
    Text,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';
import Map from 'google-map-react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import googleMapsDarkTheme from './googleMapsDarkTheme';

import { GOOGLE_MAPS_API_KEY } from 'utils/constants';

const darkModeProps: Partial<Map.Props['options']> = {
    styles: googleMapsDarkTheme,
};

type Props = {
    doctor: DoctorLocationCard_doctor$key,
}

function DoctorLocationCard(props: Props) {
    const doctor = useFragment(
        graphql`
            fragment DoctorLocationCard_doctor on Doctor {
                lastname
                address {
                    coordinates {
                        latitude
                        longitude
                    }
                }
            }
        `,
        props.doctor,
    );

    let apiKeyParams: Partial<Map.Props> = {};
    if (GOOGLE_MAPS_API_KEY != null) {
        apiKeyParams = {
            bootstrapURLKeys: {
                key: GOOGLE_MAPS_API_KEY,
            },
        };
    }

    const style = useColorModeValue({}, darkModeProps);

    return (
        <VStack align="start">
            <Text
                fontSize="md"
                fontWeight="semibold"
            >
                Location
            </Text>
            <Box
                borderRadius="lg"
                borderWidth="1px"
                h="xs"
                overflow="hidden"
                w="xs"
            >
                <Map
                    {...apiKeyParams}
                    center={{
                        lat: doctor.address.coordinates.latitude,
                        lng: doctor.address.coordinates.longitude,
                    }}
                    options={{
                        ...style,
                    }}
                    zoom={17}
                >
                    { /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */ }
                    { /* @ts-ignore */ }
                    <div lat={doctor.address.coordinates.latitude} lng={doctor.address.coordinates.longitude}>
                        <Badge
                            borderRadius="xl"
                            colorScheme="teal"
                            px="2"
                            variant="solid"
                        >
                            Dr. {doctor.lastname}
                        </Badge>
                    </div>
                </Map>
            </Box>
        </VStack>
    );
}

export default DoctorLocationCard;
