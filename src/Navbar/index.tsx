
import React from 'react';
import { MdExpandMore } from 'react-icons/md';
import { Link } from 'react-router-dom';
import {
    Button,
    chakra,
    Container,
    Flex,
    HStack,
    IconButton,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Spacer,
    Text,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';

import { useIsLoggedIn, useLogout } from 'authentication';
import { useFirstName, useFullName } from 'user';

function Navbar() {
    const backgroundColor = useColorModeValue('white', 'gray.800');
    const isLoggedIn = useIsLoggedIn();
    const logout = useLogout();
    const firstname = useFirstName();
    const fullname = useFullName();

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
                    <HStack align="center" justify="right" paddingRight={8} spacing={4}>
                        {
                            isLoggedIn && firstname != null && (
                                <Text>
                                    {firstname}
                                </Text>
                            )
                        }
                        {
                            !isLoggedIn && (
                                <Link to="/login">
                                    <Button variant="ghost">
                                        Login
                                    </Button>
                                </Link>
                            )
                        }
                        {
                            isLoggedIn && fullname != null && (
                                <Popover>
                                    <PopoverTrigger>
                                        <IconButton
                                            aria-label="More"
                                            icon={
                                                <MdExpandMore fontSize="15px" />
                                            }
                                        />
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <PopoverArrow />
                                        <PopoverHeader>{fullname}</PopoverHeader>
                                        <PopoverBody>
                                            <VStack align="end">
                                                <Button onClick={logout}>
                                                    Logout
                                                </Button>
                                            </VStack>
                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            )
                        }
                    </HStack>
                    <HStack align="center" justify="right" paddingRight={8} spacing={4}>
                        {
                            !isLoggedIn && (
                                <Link to="/signup">
                                    <Button variant="ghost">
                                        Sign up
                                    </Button>
                                </Link>
                            )
                        }
                    </HStack>
                </Flex>
            </Container>
        </chakra.header>
    );
}

export default Navbar;
