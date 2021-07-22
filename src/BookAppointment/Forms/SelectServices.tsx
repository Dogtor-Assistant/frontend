import type { Insurance } from 'BookAppointment/__generated__/MenuMutation.graphql';
import type { FC, ReactElement } from 'react';

import { useRef } from 'react';
import React, { useEffect, useState } from 'react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Box,
    Button,
    Center,
    Checkbox,
    Container,
    Divider,
    SimpleGrid,
} from '@chakra-ui/react';

import { usePatientInsurance } from 'user';

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
    setSelectedServicesID: React.Dispatch<React.SetStateAction<Array<string>>>,
    setExpectedDuration: React.Dispatch<React.SetStateAction<number>>,
    setSelectedServices: React.Dispatch<React.SetStateAction<Array<{
        readonly id: string,
        readonly description: string | null,
        readonly estimatedDuration: number | null,
        readonly name: string,
        readonly privateCovered: boolean | null,
        readonly publicCovered: boolean | null,
    }>>>,
    setValidForm: React.Dispatch<React.SetStateAction<boolean>>,
}
const SelectServices: FC<SelectServicesProps> =
({
    insurance,
    possibleServices,
    setInsurance,
    expectedDuration,
    selectedServices,
    setExpectedDuration,
    setSelectedServices,
    setValidForm,
    setSelectedServicesID,
}): ReactElement => {
    const [selectedServiceError, setSelectedServiceError] = useState(false);

    const userInsurance = usePatientInsurance();
    if (userInsurance !== undefined && userInsurance === 'Private') {
        setInsurance('Private');
    }
    
    useEffect(() => {
        console.log(selectedServiceError);
        setValidForm(selectedServices.length !== 0 || selectedServiceError);
    }, [selectedServices, selectedServiceError, setValidForm]);

    const checkedBool = () => {
        const checkB= new Array<boolean>(possibleServices.length);
        for(let i = 0; i < possibleServices.length; i++) {
            if(selectedServices.includes(possibleServices[i])) {
                checkB[i] = true;
            }
            else{
                checkB[i] = false;
            }
        }
        return checkB;
    };

    const [isOpen, setIsOpen] = React.useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = useRef();
    
    return (
        <div>
            <Center height="50px">
                <Divider />
            </Center>
            <Box borderRadius="lg" borderWidth="1px" maxW="l" overflow="hidden">
                <Box p={6}>
                    <Box
                        as="h4"
                        fontWeight="semibold"
                        isTruncated
                        lineHeight="tight"
                        mt="1"
                        paddingLeft={4}
                    >
                        Please select the services you would like for this appointment:
                    </Box>
                    <Center height="50px">
                        <Divider />
                    </Center>
                    <SimpleGrid columns={1} spacing={4}>
                        {possibleServices.map((service, index) => (
                            <Container
                                key={service.name}
                            >
                                <Box
                                    as="h2"
                                    isTruncated
                                    lineHeight="tight"
                                    mt="1"
                                    paddingLeft={4}
                                >
                                    <Checkbox
                                        isChecked={checkedBool()[index]}
                                        key={service.name}
                                        onChange={event => {
                                            if(checkedBool()[index]) {
                                                // eslint-disable-next-line max-len
                                                const newServices = Array<{
                                                    readonly id: string,
                                                    readonly description: string | null,
                                                    readonly estimatedDuration: number | null,
                                                    readonly name: string,
                                                    readonly privateCovered: boolean | null,
                                                    readonly publicCovered: boolean | null,
                                                }>();
                                                selectedServices.map(ss => {
                                                    if(event.target.value !== ss.name) {
                                                        newServices.push(ss);
                                                    }
                                                });
                                                selectedServices = newServices;
                                                setSelectedServices(selectedServices);
                                                // eslint-disable-next-line max-len
                                                const duration = possibleServices[index].estimatedDuration;
                                                if(duration != null && duration <= expectedDuration) {
                                                    setExpectedDuration(expectedDuration - duration);
                                                }
                                                else{
                                                    setExpectedDuration(0);
                                                }
                                            }
                                            else{
                                                // eslint-disable-next-line max-len
                                                if((possibleServices[index].privateCovered !== false &&
                                                    insurance === 'Private')||
                                                    (possibleServices[index].publicCovered === false &&
                                                    insurance === 'Public')) {
                                                    setIsOpen(true);
                                                }
                                                selectedServices.push(service);
                                                setSelectedServices(selectedServices);
                                                // eslint-disable-next-line max-len
                                                const duration = possibleServices[index].estimatedDuration;
                                                if (duration != null) {
                                                    setExpectedDuration(expectedDuration + duration);
                                                }
                                            }
                                            if (selectedServices.length !== 0) {
                                                const err = true;
                                                setSelectedServiceError(err);
                                                const selectedServicesID = new Array<string>();
                                                for(let i = 0; i < selectedServices.length; i++) {
                                                    selectedServicesID.push(selectedServices[i].id);
                                                }
                                                setSelectedServicesID(selectedServicesID);
                                            }
                                            else{
                                                const err = false;
                                                setSelectedServiceError(err);
                                                setSelectedServicesID([]);
                                            }
                                        }}
                                        value={service.name}>
                                        {service.name}
                                    </Checkbox>
                                    <AlertDialog
                                        closeOnOverlayClick={true}
                                        isCentered={true}
                                        isOpen={isOpen}
                                        leastDestructiveRef={undefined}
                                        onClose={onClose}
                                    >
                                        <AlertDialogOverlay>
                                            <AlertDialogContent>
                                                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                                                    Attention!
                                                </AlertDialogHeader>

                                                <AlertDialogBody>
                                                    This service is not covered by your insurance,
                                                    you may have to pay for it yourself.
                                                </AlertDialogBody>

                                                <AlertDialogFooter>
                                                    <Button onClick={onClose}>
                                                    Close
                                                    </Button>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialogOverlay>
                                    </AlertDialog>
                                </Box>
                                
                            </Container>
                        ))}
                    </SimpleGrid>
                </Box>
            </Box>
            <Center height="50px">
                <Divider />
            </Center>
        </div>
    );
};

export default SelectServices;
