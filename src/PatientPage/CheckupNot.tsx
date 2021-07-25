import type { CheckupNot_data$key } from './__generated__/CheckupNot_data.graphql';

import React from 'react';
import { Center, Grid } from '@chakra-ui/react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import NotBox from './NotBox';

type Props = {
    data: CheckupNot_data$key,
}

function CheckupNot(props: Props) {
    const data = useFragment(
        graphql`
            fragment CheckupNot_data on Query {
                me {
                    ...NotBox_user
                    patientProfile {
                        unreadCheckups {
                            id
                            ...NotBox_checkup
                        }
                    }
                }
            }
        `,
        props.data,
    );

    const me = data.me;
    const patientProfile = data.me?.patientProfile;
    if (me == null || patientProfile == null) {
        return null;
    }

    return (
        <Center py={4}>
            <Grid gap={6} w={600}>
                {
                    patientProfile.unreadCheckups.length > 0 &&
                    patientProfile.unreadCheckups.map(checkup => {
                        return (
                            <NotBox
                                checkup={checkup}
                                key={checkup.id}
                                user={me}
                            />
                        );
                    })
                }
            </Grid>
        </Center>
    );
}

export default CheckupNot;
