import React, { useState } from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Center,
    Checkbox,
    Container,
    Divider,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Editable,
    EditableInput,
    EditablePreview,
    Flex,
    Grid,
    GridItem,
    Heading,
    HStack,
    IconButton,
    Input,
    Link,
    Radio,
    RadioGroup,
    Spacer,
    Tag,
    TagCloseButton,
    TagLabel,
    useDisclosure,
    useEditableControls,
} from '@chakra-ui/react';
import {
    AddIcon,
    CheckIcon,
    CloseIcon,
    EditIcon,
} from '@chakra-ui/icons';

function AppointmentOverview() {
    return (
        <Container maxW="container.l">
            <Center height="50px">
                <Divider />
            </Center>
            <Heading fontSize="xl"paddingLeft={4} >Appointment Overview</Heading>
            <Center height="50px">
                <Divider />
            </Center>
            <Overview/>
            <Center height="50px">
                <Divider />
            </Center>
            <Fooder/>
        </Container>
    );
}

function Overview() {
    const doctor = useState('Kate');
    const date = useState('19.02.2020 13:45');

    return (
        <Container maxW="container.l">
            <Box borderRadius="lg" borderWidth="1px" maxW="l" overflow="hidden">
                <Box p={6}>
                    <Grid
                        gap={4}
                        h="400px"
                        templateColumns="repeat(5, 1fr)"
                        templateRows="repeat(7, 1fr)"
                    >
                        <GridItem colSpan={1} rowSpan={1} >
                            <Box
                                as="h4"
                                fontWeight="semibold"
                                isTruncated
                                lineHeight="tight"
                                mt="1"
                                paddingLeft={4}
                            >
                        Doctor
                            </Box>
                        </GridItem>
                        <GridItem colSpan={4} >
                            <Box
                                as="h2"
                                isTruncated
                                lineHeight="tight"
                                mt="1"
                                paddingLeft={4}
                            >
                                {doctor}
                            </Box>
                        </GridItem>
                        <GridItem colSpan={1} rowSpan={1} >
                            <Box
                                as="h4"
                                fontWeight="semibold"
                                isTruncated
                                lineHeight="tight"
                                mt="1"
                                paddingLeft={4}
                            >
                        Appointment Date
                            </Box>
                        </GridItem>
                        <GridItem colSpan={3} rowSpan={1}>
                            <Box
                                as="h2"
                                lineHeight="tight"
                                mt="1"
                                paddingLeft={4}
                            >
                                {date}
                            </Box>
                        </GridItem>
                        <GridItem colSpan={1} rowSpan={1}>
                            <Center>
                                <SelectDate/>
                            </Center>
                        </GridItem>
                        <GridItem colSpan={1} rowSpan={1} >
                            <Box
                                as="h4"
                                fontWeight="semibold"
                                isTruncated
                                lineHeight="tight"
                                mt="1"
                                paddingLeft={4}
                            >
                        Insurance Type
                            </Box>
                        </GridItem>
                        <GridItem colSpan={4} >
                            <Box
                                as="h2"
                                lineHeight="tight"
                                mt="1"
                                paddingLeft={4}
                            >
                                <RadioGroup defaultValue="Itachi">
                                    <HStack>
                                        <Grid
                                            gap={20}
                                            templateColumns="repeat(2, 1fr)"
                                            w="200px"
                                        >
                                            <Center><Radio value="Private">Private</Radio></Center>
                                            <Center><Radio value="Public">Public</Radio></Center>
                                        </Grid>
                                    </HStack>
                                </RadioGroup>
                            </Box>
                        </GridItem>
                        <GridItem colSpan={1} rowSpan={2} >
                            <Box
                                as="h4"
                                fontWeight="semibold"
                                isTruncated
                                lineHeight="tight"
                                mt="1"
                                paddingLeft={4}
                            >
                        Appointment Services
                            </Box>
                        </GridItem>
                        <GridItem colSpan={3} rowSpan={2}>
                            <Box
                                as="h2"
                                lineHeight="tight"
                                mt="1"
                                paddingLeft={4}
                            >
                                <ShowServices {...['A', 'B']} />
                            </Box>
                        </GridItem>
                        <GridItem colSpan={1} rowSpan={2}>
                            <SelectServices/>
                        </GridItem>
                        <GridItem colSpan={1} rowSpan={1} >
                            <Box
                                as="h4"
                                fontWeight="semibold"
                                isTruncated
                                lineHeight="tight"
                                mt="1"
                                paddingLeft={4}
                            >
                        Appointment Notes
                            </Box>
                        </GridItem>
                        <GridItem colSpan={4} rowSpan={2}>
                            <Box
                                as="h2"
                                lineHeight="tight"
                                mt="1"
                                paddingLeft={4}
                            >
                                <WriteNote/>
                            </Box>
                        </GridItem>
                        <GridItem colSpan={5} rowSpan={1} >
                            <Box
                                as="h4"
                                fontWeight="semibold"
                                isTruncated
                                lineHeight="tight"
                                mt="1"
                                paddingLeft={20}
                            >
                                <Checkbox>
                                    I hereby agree to share my appointment history and personal profile with the doctor.
                                </Checkbox>
                            </Box>
                        </GridItem>

                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

function ShowServices(services: string[]) {

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

function SelectDate() {
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

function WriteNote() {
    function EditableControls() {
        const {
            isEditing,
            getSubmitButtonProps,
            getCancelButtonProps,
            getEditButtonProps,
        } = useEditableControls();

        return isEditing ? (
            <ButtonGroup justifyContent="center" size="sm">
                <IconButton aria-label="Submit DateTime" icon={<CheckIcon />} {
                    ...getSubmitButtonProps()
                } />
                <IconButton aria-label="Cancel DateTime" icon={<CloseIcon />} {...getCancelButtonProps()} />
            </ButtonGroup>
        ) : (
            <Flex justifyContent="center">
                <IconButton aria-label="Edit DateTime" color="green.300" icon={<EditIcon />} size="sm" {
                    ...getEditButtonProps()
                } />
            </Flex>
        );
    }

    return (
        <Editable
            as="h2"
            defaultValue="Do you want to add anything..."
        >
            <Grid
                gap={4}
                templateColumns="repeat(4, 1fr)"
                templateRows="repeat(1, 1fr)"
            >
                <GridItem colSpan={3} rowSpan={1}>
                    <EditablePreview />
                    <EditableInput />
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                    <Center>
                        <EditableControls />
                    </Center>
                </GridItem>
            </Grid>
        </Editable>
    );
}

function Fooder() {
    return (
        <Container maxW="container.xl" paddingBottom={4} paddingTop={8}>
            <Flex>
                <HStack align="center" justify="left" paddingLeft={8}>
                    <Link to="/">
                        <Button>
                            Cancel
                        </Button>
                    </Link>
                </HStack>
                <Spacer/>
                <HStack align="center" justify="right" paddingRight={8} spacing={4}>
                    <Link to="/login">
                        <Button bg="green.100" color="green">
                            Make Appointment
                        </Button>
                    </Link>
                </HStack>
            </Flex>
        </Container>
    );
}

export default AppointmentOverview;
