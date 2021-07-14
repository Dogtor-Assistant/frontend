import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '@chakra-ui/react';

const NotFound = () => (
    <Container maxW="container.xl">
        <h1>404 - Not Found!</h1>
        <Button >
            <Link to="/">
             Go Home
            </Link>
        </Button>
        
    </Container>

);

export default NotFound;
