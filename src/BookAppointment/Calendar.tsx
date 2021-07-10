import React, { useState } from 'react';
import {
    Box,
    Button,
    Center,
    Checkbox,
    Container,
    Divider,
    Flex,
    Grid,
    GridItem,
    Heading,
    HStack,
    Link,
    Spacer,
} from '@chakra-ui/react';

function AppointmentServicesSelect() {
    return (
        <Container maxW="container.l">
            <Center height="50px">
                <Divider />
            </Center>
            <Heading fontSize="xl"paddingLeft={4} >Book Appointment</Heading>
            <Center height="50px">
                <Divider />
            </Center>
            <Box borderRadius="lg" borderWidth="1px" maxW="l" overflow="hidden">
                <Box p={6}>
                    <Calendar/>
                </Box>
            </Box>
            <Center height="50px">
                <Divider />
            </Center>
            <Fooder/>
        </Container>
    );
}

function Calendar() {
    const doctor = ['A', 'B', 'C'];

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
                Please select the your appointment Date:
            </Box>
            <Grid
                gap={4}
                h="200px"
                templateColumns="repeat(7, 1fr)"
                templateRows="repeat(12, 1fr)"
            >
                <GridItem> Mo</GridItem>
                <GridItem> Di</GridItem>
                <GridItem> Mi</GridItem>
                <GridItem> Do</GridItem>
                <GridItem> Fr</GridItem>
                <GridItem> Sa</GridItem>
                <GridItem> So</GridItem>
            </Grid>
        </Container>
    );
}

function Fooder() {
    return (
        <Container maxW="container.xl" paddingBottom={4} paddingTop={8}>
            <Flex>
                <HStack align="center" justify="left" paddingLeft={8}>
                    <Link to="/">
                        <Button>
                            Return
                        </Button>
                    </Link>
                </HStack>
                <Spacer/>
                <HStack align="center" justify="right" paddingRight={8} spacing={4}>
                    <Link to="/login">
                        <Button bg="green.100" color="green.300">
                            Next
                        </Button>
                    </Link>
                </HStack>
            </Flex>
        </Container>
    );
}

export default AppointmentServicesSelect;
