import type { ActivityLevel, Gender } from '../Signup/__generated__/PatientUserCreateMutation.graphql';

import React from 'react';
import {
    Box,
    Button,
    Divider,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    FormLabel,
    Input,
    Select,
    Stack,
    Textarea,
} from '@chakra-ui/react';

import AppointmentFollowup from './AppointmentFollowup';

type Props = {
    eventType:{
        id:string,
        title: string,
        start: string | number | Date | number[],
        end: string | number | Date | number[],
        lastName: string,
        firstName: string,
        patient: {
            activityLevel: ActivityLevel,
            address: {
                city: string,
                streetName: string,
                streetNumber: number,
                zipCode: number,
            },
            firstname: string,
            gender: Gender,
            height: number,
            id: string,
            isSmoker: boolean,
            lastname: string,
            surgeries: [string],
            weight: number,
         },

    },
    onClose: () => void,
    isOpenFollowupModal: boolean,
    onCloseFollowupModal: ()=>void,
    // handleFollowupClick: ()=>void,
}

const CustomDrawer = ({
    eventType,
    onClose,
    onCloseFollowupModal,
    isOpenFollowupModal,
    // handleFollowupClick,
}: Props) => {
    return (
        <Drawer
            isOpen={isOpenFollowupModal}
            onClose={onCloseFollowupModal}
            placement='right'
            size='xl'
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                    <Stack spacing='24px'>
                        <Box>
                            <FormLabel htmlFor='username'>Name</FormLabel>
                            <Input id='username' placeholder='Please enter user name' />
                        </Box>

                        <Box>
                            <FormLabel htmlFor='owner'>Select Owner</FormLabel>
                            <Select defaultValue='segun' id='owner'>
                                <option value='segun'>Segun Adebayo</option>
                                <option value='kola'>Kola Tioluwani</option>
                            </Select>
                        </Box>

                        <Box>
                            <FormLabel htmlFor='desc'>Description</FormLabel>
                            <Textarea id='desc' />
                        </Box>
                    </Stack>
                </DrawerBody>
                <Divider/>
                <DrawerFooter borderTopWidth='1px'>
                    <Button mr={3} onClick={onCloseFollowupModal} variant='outline'>
                    Cancel
                    </Button>
                    <AppointmentFollowup
                        event={eventType}
                        onClose={onClose}
                        onCloseFollowupModal={onCloseFollowupModal}/>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default CustomDrawer;
