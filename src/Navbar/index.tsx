
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    chakra,
    Container,
    Flex,
    HStack,
    Spacer,
    useColorModeValue,
} from '@chakra-ui/react';

function Navbar() {
    const backgroundColor = useColorModeValue('white', 'gray.800');

    return (
        <chakra.header
            bg={backgroundColor}
            left="0"
            pos="sticky"
            right="0"
            top="0"
            width="full"
            zIndex="3"
        >
            <Container maxW="container.xl" paddingBottom={4} paddingTop={8}>
                <Flex>
                    <HStack align="center" justify="left" paddingLeft={8}>
                        <Link to="/">
                            <Button variant="ghost">
                                Dogtor
                            </Button>
                        </Link>
                    </HStack>
                    <Spacer/>
                    <HStack align="center" justify="right" paddingRight={8}>
                        <Link to="/login">
                            <Button variant="ghost">
                                Login
                            </Button>
                        </Link>
                    </HStack>
                </Flex>
            </Container>
        </chakra.header>
    );
}

export default Navbar;
