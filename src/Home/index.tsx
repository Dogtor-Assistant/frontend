import React from 'react';
import { Box,
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
import { BellIcon, CalendarIcon, SearchIcon, TimeIcon } from '@chakra-ui/icons';

import Footer from 'Footer';

export function Search() {
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

export function HomePageNavBar() {
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

function Home() {
    return <Center>
        <Grid gap={6}>
            
            <HomePageNavBar/>
            
            <Footer/>
        </Grid>
    </Center>;
}

export default Home;
