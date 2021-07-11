import React from 'react';
import {
    Button,
    Center,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    HStack,
    IconButton,
    Tag,
    TagCloseButton,
    TagLabel,
    useDisclosure,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

function ShowServices() {

    return (
        <HStack spacing={4}>
            {['A', 'B', 'C'].map(value => (
                <Tag
                    borderRadius="full"
                    colorScheme="green"
                    key={value}
                    variant="solid"
                >
                    <TagLabel>{value}</TagLabel>
                    <TagCloseButton />
                </Tag>
            ))}
        </HStack>
    );

}

function SelectServices() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Center>
            <IconButton aria-label="Edit DateTime" color="green.300" icon={<AddIcon />} onClick={onOpen} size="sm" />
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                placement="right"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Select Services</DrawerHeader>

                    <DrawerBody>
                        
                    </DrawerBody>

                    <DrawerFooter>
                        <Button mr={3} onClick={onClose} variant="outline">
                        Cancel
                        </Button>
                        <Button colorScheme="green">Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Center>
    );
}
