import type { NotBoxMarkAsReadMutation } from './__generated__/NotBoxMarkAsReadMutation.graphql';
import type { FC, ReactElement } from 'react';

import { useState } from 'react';
import React from 'react';
import {
    Box,
    Button,
    Flex,
    Spacer,
    Text,
} from '@chakra-ui/react';

import { useMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import LoadingIndicator from 'LoadingIndicator';

import useRouteToSearch from 'useRouteToSearch';

type notBoxProps = {
    keyV: string,
    service: string,
    city: string,
    name: string,

}
const NotBox: FC<notBoxProps> =
({
    keyV, service, city, name,
}): ReactElement => {
    const route = useRouteToSearch();

    const [showNotification, setShowNotification] = useState(true);

    const [commit, isInFlight] = useMutation<NotBoxMarkAsReadMutation>(graphql`
    mutation NotBoxMarkAsReadMutation($input: ID!){
        markCheckupAsRead(id: $input)
    }
    `);

    if (isInFlight) {
        return <LoadingIndicator />;
    }

    const markAsRead = (): void => {
        commit({
            onCompleted(data, err) {
                if (!err) setShowNotification(false);
            },
            variables: {
                'input': keyV,
            },
        });
    };

    return (<>
        { showNotification &&
            <Box borderRadius="lg" borderWidth="1px" key={keyV} overflow="hidden" px={6}>
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
                                route({ cities: [city], query: service });
                            }}
                            variant="solid"
                        >
                                Continue
                        </Button>
                    </Box>
                </Flex>
            </Box>
        }
    </>
        
    );
};
  
export default NotBox;
