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
    IconButton,
    Link,
    Spacer,
    Stack,
} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

function AppDate() {
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
                Please select an appointment Date:
            </Box>
            <Center height="30px">
                <Divider />
            </Center>
            <Center height="30px">
                05.07.2021 - 10.07.2021
            </Center>
            <Center height="50px">
                <Divider />
            </Center>
            <Grid
                gap={4}
                h="200px"
                templateColumns="repeat(9, 1fr)"
                templateRows="repeat(13, 1fr)"
            >
                <GridItem colSpan={1} rowSpan={13}>
                    <IconButton aria-label="Submit DateTime" icon={<ArrowLeftIcon />} />
                </GridItem>
                <GridItem><Center> Mo</Center></GridItem>
                <GridItem><Center> Di</Center></GridItem>
                <GridItem><Center> Mi</Center></GridItem>
                <GridItem><Center> Do</Center></GridItem>
                <GridItem><Center> Fr</Center></GridItem>
                <GridItem><Center> Sa</Center></GridItem>
                <GridItem><Center> So</Center></GridItem>
                <GridItem colSpan={1} rowSpan={13}>
                    <IconButton aria-label="Submit DateTime" icon={<ArrowRightIcon />} />
                </GridItem>
                <GridItem colSpan={1} rowSpan={12}><Center><Dates/></Center></GridItem>
                <GridItem colSpan={1} rowSpan={12}><Center> <Dates/></Center></GridItem>
                <GridItem colSpan={1} rowSpan={12}><Center> <Dates/></Center></GridItem>
                <GridItem colSpan={1} rowSpan={12}><Center> <Dates/></Center></GridItem>
                <GridItem colSpan={1} rowSpan={12}><Center> <Dates/></Center></GridItem>
                <GridItem colSpan={1} rowSpan={12}><Center> <Dates/></Center></GridItem>
                <GridItem colSpan={1} rowSpan={12}><Center> <Dates/></Center></GridItem>
            </Grid>
        </Container>
    );
}

function Dates() {
    return (
        <Stack spacing={4}>
            {['8:00', '8:30', '9:00'].map(value => (
                <Button
                    borderRadius="full"
                    colorScheme="green"
                    key={value}
                    variant="solid"
                >
                    {value}
                </Button>
            ))}
        </Stack>
    );
}

function Fooder() {
    return (
        <Container maxW="container.xl" paddingBottom={4} paddingTop={8}>
            <Flex>
                <HStack align="center" justify="left" paddingLeft={8}>
                    <Link to="/AppServices">
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

export default AppDate;
