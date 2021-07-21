import type { TextProps } from '@chakra-ui/layout';

import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {
    Box,
    ButtonGroup,
    Center,
    IconButton,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/layout';

const Copyright = (props: TextProps) => (
    <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} Dogtor, All rights reserved.
    </Text>
);

const SocialMediaLinks = () => (
    <ButtonGroup color="gray.600" paddingLeft={14} variant="ghost" >
        <IconButton aria-label="GitHub" as="a" href="https://github.com/Dogtor-Assistant" icon={<FaGithub fontSize="30px" />} />
    </ButtonGroup>
);

const Footer = () => {
    const backgroundColor = useColorModeValue('white', 'gray.800');
    return (
        <footer>
            <Center>
            
                <Box as="footer" bg={backgroundColor} maxW="7xl"
                    mx="auto"
                    px={{ base: '4', md: '8' }}
                    py="12"
                    role="contentinfo"
                >
                    <Stack>
                        <Stack align="center" direction="row" justify="space-between" spacing="4">
                    
                            <SocialMediaLinks />
                        </Stack>
                        <Copyright alignSelf={{ base: 'center', sm: 'start' }} />
                    </Stack>
                </Box>
        
            </Center>
        </footer>

    );
};

export default Footer;
