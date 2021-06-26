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
                            You are now a few steps away from expanding your business and
                            improving the quality of your services. Click Join Us and become
                            one of us in 3 easy steps!
                        </Text>
                        <Link to={`${url}/doctor`}>
                            <Button mt={4}>
                                Join Us
                            </Button>
                        </Link>
                    </Box>
                    <Box align="center" bg={backgroundColor} borderRadius="10px" borderWidth="1px"
                        h="320px" m={2} w="30%">
                        <Heading as="h3" m={8}>Are you a Patient ?</Heading>
                        <Text mx={4} my={2} noOfLines={4}>
                            Still having problems organizing and keeping track of your medical procedures?
                            Create an account now and you will not have to worry about them again!
                        </Text>
                        <Link to={`${url}/patient`}>
                            <Button mt={4}>
                                Create Account
                            </Button>
                        </Link>
                    </Box>
                </Flex>
            </VStack>
        </Center>);
}

export default Menu;
