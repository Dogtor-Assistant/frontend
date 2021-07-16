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
    IconButton,
    useDisclosure,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

function AppDate() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Center>
            <IconButton aria-label="Edit DateTime" color="green.300" icon={<EditIcon />} onClick={onOpen} size="sm" />
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                placement="right"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Select Date</DrawerHeader>

                    <DrawerBody>
                        
                    </DrawerBody>

                    <DrawerFooter>
                        <Button mr={3} onClick={onClose} variant="outline">
                        Cancel
                        </Button>
                        <Button bg="green">Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Center>
    );
}

export default AppDate;
