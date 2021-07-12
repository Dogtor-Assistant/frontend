import type { AppBoxDeleteAppMutation } from './__generated__/AppBoxDeleteAppMutation.graphql';
import type { FC, ReactElement } from 'react';

import React from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Popover,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverFooter,
    PopoverTrigger,
} from '@chakra-ui/react';

import { useMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import LoadingIndicator from 'LoadingIndicator';

type appBoxProps = {
    keyV: string,
    services: string,
    date: string,
    duration?: number,
    time: string,
    doctor: string,
    isPast: boolean,
    refreshQuery: () => void,
}
const AppBox: FC<appBoxProps> =
({
    keyV, services, date, duration, time, doctor, isPast, refreshQuery,
}): ReactElement => {
    return (
        <Box borderRadius="lg" borderWidth="1px" key={keyV} overflow="hidden">

            <Box p="6">
                <Box alignItems="baseline" d="flex" justifyContent="space-between">
                    <Box
                        color="gray.500"
                        fontSize="xs"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        textTransform="uppercase"
                    >
                        {date} &bull; {time}
                    </Box>
                    { !isPast &&
                    <Box float="right">
                        {duration} min.
                    </Box>
                    }
                </Box>

                <Box
                    as="h4"
                    fontWeight="semibold"
                    isTruncated
                    lineHeight="tight"
                    ml="2"
                    mt="1"
                >
                    {services}
                </Box>
                <Box ml="2">
                    {doctor}
                </Box>
                { !isPast && <PopoverComp keyV={keyV} refreshQuery={refreshQuery} /> }
            </Box>
        </Box>
    );
};

type popoverCompProps = {
    keyV: string,
    refreshQuery: () => void,
}

const PopoverComp: FC<popoverCompProps> =
({
    keyV, refreshQuery,
}): ReactElement => {
    
    const [commit, isInFlight] = useMutation<AppBoxDeleteAppMutation>(graphql`
    mutation AppBoxDeleteAppMutation($input: ID!){
        deleteAppointmentById(id: $input)
    }
    `);

    if (isInFlight) {
        return <LoadingIndicator />;
    }

    const deleteApp = (id: string): void => {
        commit({
            onCompleted(data) {
                if (data.deleteAppointmentById) refreshQuery();
            },
            variables: {
                'input': id,
            },
        });
    };

    return (
        <>
            <Popover
                closeOnBlur={false}
                placement="right"
                returnFocusOnClose={false}
            >
                {({ onClose }) => (
                    <>
                        <PopoverTrigger>
                            <Box
                                as="button"
                                bg="tomato"
                                borderRadius="md"
                                color="white"
                                float="right"
                                h={8} mb={4} px={4}
                            >
                                Cancel
                            </Box>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverCloseButton />
                            <PopoverBody>
                                Are you sure you want to cancel your appointment?
                            </PopoverBody>
                            <PopoverFooter d="flex" justifyContent="flex-end">
                                <ButtonGroup size="sm">
                                    <Button
                                        onClick={onClose}
                                        variant="outline"
                                    >
                                        No
                                    </Button>
                                    <Button bg="tomato" onClick={() => deleteApp(keyV)}>Yes</Button>
                                </ButtonGroup>
                            </PopoverFooter>
                        </PopoverContent>
                    </>
                )}
            </Popover>
        </>
    );
};
  
export default AppBox;
