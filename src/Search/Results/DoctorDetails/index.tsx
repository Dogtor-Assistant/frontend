import type { DoctorDetails_doctor$key } from './__generated__/DoctorDetails_doctor.graphql';

import React from 'react';
import { Divider, VStack } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import HorizonalScrollview from 'HorizonalScrollview';
import WorkingHoursCard from './WorkingHoursCard';

type Props = {
    doctor: DoctorDetails_doctor$key,
}

function DoctorDetails(props: Props) {
    const doctor = useFragment(
        graphql`
            fragment DoctorDetails_doctor on Doctor {
                ...WorkingHoursCard_doctor
            }
        `,
        props.doctor,
    );

    return (
        <VStack
            w="100%"
        >
            <Divider/>
            <HorizonalScrollview align="start" w="100%">
                <WorkingHoursCard doctor={doctor} />
            </HorizonalScrollview>
        </VStack>
    );
}

export default DoctorDetails;
