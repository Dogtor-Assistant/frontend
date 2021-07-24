import type { FollBoxMarkAsReadMutation } from './__generated__/FollBoxMarkAsReadMutation.graphql';
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
    doctorName: string,
    name: string,
    date: Date,

}
const FollBox: FC<notBoxProps> =
({
    keyV, service, doctorName, name, date,
}): ReactElement => {
    const route = useRouteToSearch();

    const [showNotification, setShowNotification] = useState(true);

    const [commit, isInFlight] = useMutation<FollBoxMarkAsReadMutation>(graphql`
    mutation FollBoxMarkAsReadMutation($input: ID!){
        markFollowupAsRead(id: $input)
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
                    {name} you have a followup suggested by Dr. {doctorName}! <br/>
                        Service: {service} <br/>
                        Suggested Date: {date.toDateString()}
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
                                route({ query: `${doctorName}` });
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
  
export default FollBox;
