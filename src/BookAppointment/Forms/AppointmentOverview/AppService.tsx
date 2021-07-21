import type { Insurance } from 'BookAppointment/__generated__/MenuMutation.graphql';
import type { FC, ReactElement } from 'react';

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
import { AddIcon } from '@chakra-ui/icons';

import SelectServices from '../SelectServices';

type SelectServicesProps = {
    insurance: Insurance,
    setInsurance: React.Dispatch<React.SetStateAction<'Private' | 'Public'>>,
    possibleServices: ReadonlyArray<{
        readonly id: string,
        readonly description: string | null,
        readonly estimatedDuration: number | null,
        readonly name: string,
        readonly privateCovered: boolean | null,
        readonly publicCovered: boolean | null,
    }>,
    expectedDuration: number,
    selectedServices: Array<{
        readonly id: string,
        readonly description: string | null,
        readonly estimatedDuration: number | null,
        readonly name: string,
        readonly privateCovered: boolean | null,
        readonly publicCovered: boolean | null,
    }>,
    setExpectedDuration: React.Dispatch<React.SetStateAction<number>>,
    setSelectedServices: React.Dispatch<React.SetStateAction<Array<{
        readonly id: string,
        readonly description: string | null,
        readonly estimatedDuration: number | null,
        readonly name: string,
        readonly privateCovered: boolean | null,
        readonly publicCovered: boolean | null,
    }>>>,
    setSelectedServicesID:React.Dispatch<React.SetStateAction<Array<string>>>,
    setValidForm: React.Dispatch<React.SetStateAction<boolean>>,
}
const AppService: FC<SelectServicesProps> =
({
    insurance,
    possibleServices,
    expectedDuration,
    setInsurance,
    selectedServices,
    setExpectedDuration,
    setSelectedServices,
    setValidForm,
    setSelectedServicesID,
}): ReactElement => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Center>
            <IconButton aria-label="Edit DateTime" color="green.300" icon={<AddIcon />} onClick={onOpen} size="sm" />
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                placement="right"
                size= "lg"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Select Services</DrawerHeader>

                    <DrawerBody>
                        <SelectServices
                            expectedDuration={expectedDuration} insurance={insurance}
                            possibleServices={possibleServices}
                            selectedServices={selectedServices} setExpectedDuration={setExpectedDuration}
                            setInsurance={setInsurance} setSelectedServices={setSelectedServices}
                            setSelectedServicesID={setSelectedServicesID} setValidForm={setValidForm}
                        />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button mr={3} onClick={onClose} variant="outline">
                        Close
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Center>
    );
};

export default AppService;
