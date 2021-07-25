import type { NotBox_checkup$key } from './__generated__/NotBox_checkup.graphql';
import type { NotBox_user$key } from './__generated__/NotBox_user.graphql';
import type { NotBoxMarkAsReadMutation } from './__generated__/NotBoxMarkAsReadMutation.graphql';

import React, { useCallback, useState } from 'react';
import {
    Box,
    Button,
    Flex,
    Spacer,
    Text,
} from '@chakra-ui/react';

import { useMutation } from 'react-relay';
import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import LoadingIndicator from 'LoadingIndicator';

import useRouteToSearch from 'useRouteToSearch';

type Props = {
    user: NotBox_user$key,
    checkup: NotBox_checkup$key,
}

function NotBox(props: Props) {
    const user = useFragment(
        graphql`
            fragment NotBox_user on User {
                firstname
                lastname
                patientProfile {
                    address {
                        city
                    }
                }
            }
        `,
        props.user,
    );

    const checkup = useFragment(
        graphql`
            fragment NotBox_checkup on Checkup {
                id
                services
            }
        `,
        props.checkup,
    );
    const route = useRouteToSearch();

    const [showNotification, setShowNotification] = useState(true);

    const [commit, isInFlight] = useMutation<NotBoxMarkAsReadMutation>(graphql`
        mutation NotBoxMarkAsReadMutation($input: ID!){
            markCheckupAsRead(id: $input)
        }
    `);

    const markAsRead = useCallback(
        () => {
            commit({
                onCompleted(data, err) {
                    if (!err) setShowNotification(false);
                },
                variables: {
                    'input': checkup.id,
                },
            });
        },
        [commit, checkup.id],
    );

    if (isInFlight) {
        return <LoadingIndicator />;
    }

    if (!showNotification) {
        return null;
    }

    const name = `${user.firstname} ${user.lastname}`;
    const city = user.patientProfile?.address.city;
    const service = checkup.services[0];

    return (
        <Box borderColor="green.300" borderRadius="lg" borderWidth="2px" key={checkup.id} overflow="hidden" px={6}>
            <Text fontSize="lg" mt={4}>
                        Special Reminder for {name}: It&apos;s been long since your last {service}!
                        Click Continue to book an appointment!
            </Text>
            <Flex>
                <Spacer />
                <Box>
                    <Button
                        colorScheme="blue"
                        my={4}
                        onClick={markAsRead}
                        variant="outline"
                    >
                        Mark as Read
                    </Button>
                    <Button
                        colorScheme="blue"
                        ml={4} my={4}
                        onClick={() => {
                            markAsRead();
                            route({
                                cities: city != null ? [city] : null,
                                query: service,
                            });
                        }}
                        variant="solid"
                    >
                        Continue
                    </Button>
                </Box>
            </Flex>
        </Box>
    );
}

export default NotBox;
