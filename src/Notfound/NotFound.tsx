import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Button,
    Center,
    Container,
} from '@chakra-ui/react';

const NotFound = () => (
    <Container maxW="container.xl">
        <Center>
            <h1>404 - Not Found!</h1>
            <Box>
                <Button >
                    <Link to="/">
             Go Home
                    </Link>
                </Button>
            </Box>
        </Center>
        
    </Container>

);

export default NotFound;
