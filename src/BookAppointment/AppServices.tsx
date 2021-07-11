import React, { useState } from 'react';
import {
    Box,
    Button,
    Center,
    Checkbox,
    Container,
    Divider,
    Flex,
    Heading,
    HStack,
    Link,
    SimpleGrid,
    Spacer,
} from '@chakra-ui/react';

function AppServices() {
    return (
        <Container maxW="container.l">
            <Center height="50px">
                <Divider />
            </Center>
            <Heading fontSize="xl" paddingLeft={4} >Book Appointment</Heading>
            <Center height="50px">
                <Divider />
            </Center>
            <Box borderRadius="lg" borderWidth="1px" maxW="l" overflow="hidden">
                <Box p={6}>
                    <Services/>
                </Box>
            </Box>
            <Center height="50px">
                <Divider />
            </Center>
            <Fooder/>
        </Container>
    );
}

function Services() {
    return (
        <Container maxW="container.l">
            <Box
                as="h4"
                fontWeight="semibold"
                isTruncated
                lineHeight="tight"
                mt="1"
                paddingLeft={4}
            >
                Please select the services you would like for this appointment:
            </Box>
            <Center height="50px">
                <Divider />
            </Center>
            <SimpleGrid columns={1} spacing={4}>
                {['A', 'B', 'C'].map(value => (
                    <Container
                        key={value}
                    >
                        <Box
                            as="h2"
                            isTruncated
                            lineHeight="tight"
                            mt="1"
                            paddingLeft={4}
                        >
                            <Checkbox>
                                {value}
                            </Checkbox>
                        </Box>
                    </Container>
                ))}
            </SimpleGrid>
        </Container>
    );
}

function Fooder() {
    return (
        <Container maxW="container.xl" paddingBottom={4} paddingTop={8}>
            <Flex>
                <HStack align="center" justify="left" paddingLeft={8}>
                    <Link to="/Home">
                        <Button>
                            Cancel
                        </Button>
                    </Link>
                </HStack>
                <Spacer/>
                <HStack align="center" justify="right" paddingRight={8} spacing={4}>
                    <Link to="/login">
                        <Button bg="green.100" color="green">
                            Next
                        </Button>
                    </Link>
                </HStack>
            </Flex>
        </Container>
    );
}

export default AppServices;
