import type { ActivityLevel, Gender } from '../Signup/__generated__/PatientUserCreateMutation.graphql';

import React from 'react';
import { Drawer, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';

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
                <AppointmentFollowup
                    event={eventType}
                    onClose={onClose}
                    onCloseFollowupModal={onCloseFollowupModal}/>
            </DrawerContent>
        </Drawer>
    );
};

export default CustomDrawer;
