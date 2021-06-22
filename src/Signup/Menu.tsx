import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    StackDivider,
    Text,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';

function Menu() {
    const backgroundColor = useColorModeValue('white', 'gray.800');
    const { url } = useRouteMatch();

    //TODO: Fix Text content
    return(
        <Center>
            <VStack
                align="stretch"
                divider={<StackDivider borderColor="#ffffff00"/>}
                spacing={4}
                width="full"
            >
                <Flex align="center" justifyContent="center" width="full">
                    <Box p={2}>
                        <Box textAlign="center">
                            <Heading>Sign up</Heading>
                        </Box>
                    </Box>
                </Flex>
                <Flex align="center" height="full" justifyContent="center" width="full">
                    <Box align="center" bg={backgroundColor} borderRadius="10px" borderWidth="1px"
                        h="320px" m={2} w="30%">
                        <Heading as="h3" m={8}>Are you a Doctor ?</Heading>
                        <Text mx={4} my={2} noOfLines={4}>
                            The quick brown fox jumps over the lazy dog is an English-language pangram—a
                            sentence that contains all of the letters of the English alphabet. Owing to
                            its existence, Chakra was created.
                        </Text>
                        <Link to={`${url}/doctor`}>
                            <Button>
                                Join Us
                            </Button>
                        </Link>
                    </Box>
                    <Box align="center" bg={backgroundColor} borderRadius="10px" borderWidth="1px"
                        h="320px" m={2} w="30%">
                        <Heading as="h3" m={8}>Are you a Patient ?</Heading>
                        <Text mx={4} my={2} noOfLines={4}>
                            The quick brown fox jumps over the lazy dog is an English-language pangram—a
                            sentence that contains all of the letters of the English alphabet. Owing to
                            its existence, Chakra was created.
                        </Text>
                        <Link to={`${url}/patient`}>
                            <Button>
                                Create Account
                            </Button>
                        </Link>
                    </Box>
                </Flex>
            </VStack>
        </Center>);
}

export default Menu;
