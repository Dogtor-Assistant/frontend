import React from 'react';
import {
    Box,
    Center,
    Container,
    Grid,
    GridItem,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import {
    BellIcon,
    CalendarIcon,
    SearchIcon,
    TimeIcon,
} from '@chakra-ui/icons';

import Footer from 'Footer';
import Review from 'LatestReviewList/Review';

function Search() {
    return (
        <Container paddingTop={8}>
            <InputGroup size="lg">
                <InputLeftElement h="68px" paddingLeft={4} pointerEvents="none" >
                    <SearchIcon color="gray.300" />
                </InputLeftElement>
                <Input
                    autoFocus
                    placeholder="Search for Doctor"
                    pr="4.5rem"
                    spellCheck="false"
                    sx={{
                        border: 'transparent',
                        fontWeight: 'medium',
                        h: '68px',
                        outline: 0,
                        pl: '68px',
                    }}
                    type="text"
                    variant="filled"
                />
                
            </InputGroup>
        
        </Container>
    );
}

function HomePageNavBar() {
    const backgroundColor = useColorModeValue('white', 'gray.800');
    
    return (
        <Container maxW="container.xl">
            <Grid
            
                bg={backgroundColor}
                h="200px"
                templateColumns="repeat(1, 1fr)"

            >
                <GridItem borderWidth="1px" p={5} shadow="md" w="full">
                    <Heading fontSize="xl"paddingLeft={4} >Find and book an appointment</Heading>
                    <Text mt={2} paddingLeft={4} >Find the right doctor as easily as posible </Text>
                    <Search/>
                </GridItem>
            
            </Grid>
        </Container>
    );
}

function HomePageServices() {
    const backgroundColor = useColorModeValue('white', 'gray.800');
    
    return (
        <Container maxW="container.xl">

            <Grid bg={backgroundColor} gap={6} templateColumns="repeat(4, 1fr)">
                <Box borderRadius="lg" borderWidth="1px" maxW="sm" overflow="hidden">
                
                    <Box p="6">
                        <Box gap={2} >
                            <SearchIcon color="green.300" />

                            <Box
                                as="h4"
                                fontWeight="semibold"
                                isTruncated
                                lineHeight="tight"
                                mt="1"
                            >
                        Find a specialists
                            </Box>
                        </Box>
                        <h2>
                            Using Dogtor you can find the specialist you need easily!
                        </h2>
                    </Box>
                </Box>
                <Box borderRadius="lg" borderWidth="1px" maxW="sm" overflow="hidden">
                
                    <Box p="6">
                        <Box gap={2} templateColumns="repeat(2, 1fr)">
                            <BellIcon color="green.300" />

                            <Box
                                as="h4"
                                fontWeight="semibold"
                                isTruncated
                                lineHeight="tight"
                                mt="1"
                            >
                        Remainders
                            </Box>
                        </Box>

                        <h2>
                            As Dogtor we provide Remainders and notifications for upcoming appointments
                             and suggestions for following visits
                        </h2>

                    </Box>
                </Box>
                <Box borderRadius="lg" borderWidth="1px" maxW="sm" overflow="hidden">
                
                    <Box p="6">
                        <Box gap={2} templateColumns="repeat(2, 1fr)">
                            <CalendarIcon color="green.300" />

                            <Box
                                as="h4"
                                fontWeight="semibold"
                                isTruncated
                                lineHeight="tight"
                                mt="1"
                            >
                        Appointment scheduling
                            </Box>
                        </Box>

                        <h2>
                            You can view your appintments clearly in a time table
                        </h2>

                    </Box>
                </Box>
                <Box borderRadius="lg" borderWidth="1px" maxW="sm" overflow="hidden">
                
                    <Box p="6">
                        <Box gap={2} templateColumns="repeat(2, 1fr)">
                            <TimeIcon color="green.300" />

                            <Box
                                as="h4"
                                fontWeight="semibold"
                                isTruncated
                                lineHeight="tight"
                                mt="1"
                            >
                        Time Tracker
                            </Box>

                        </Box>
                        <h2>With Time Tracker you can
                             check and manage your time before the appointment
                        </h2>

                    </Box>
                </Box>
            
            </Grid>
        </Container>
    );
}

function HomePageLatestReviews() {
    const backgroundColor = useColorModeValue('white', 'gray.800');
    //TODO: Review Box need to be displayed in two column not only one col horizontal fix this!
    return (
        <Container maxW="container.xl">
            <h1><strong>Latest Reviews</strong></h1>

            <Grid bg={backgroundColor} gap={6} >
                
                <GridItem borderRadius="lg" borderWidth="1px" gridColumn='auto' maxW="l" overflow="hidden">
                
                    <Box gridArea='auto' p="6">
                        <Review/>

                    </Box>

                </GridItem>
            
            </Grid>
        </Container>
    );
}

function HomePageTips() {
    const backgroundColor = useColorModeValue('white', 'gray.800');
    
    return (
        <Container maxW="container.xl">

            <h1 ><strong>Tips</strong></h1>

            <Grid bg={backgroundColor} gap={6} templateColumns="repeat(1, 1fr)">
                <Box borderRadius="lg" borderWidth="1px" maxW="l" overflow="hidden">
                
                    <Box p="6">
                        Latest reviews for doctors

                    </Box>
                </Box>
               
            </Grid>
        </Container>
    );
}

function Home() {
    return <Center>
        <Grid gap={6}>
            
            <HomePageNavBar/>
            <HomePageServices/>
            <HomePageLatestReviews/>
            <HomePageTips/>
            
            <Footer/>
        </Grid>
    </Center>;
}

export default Home;
