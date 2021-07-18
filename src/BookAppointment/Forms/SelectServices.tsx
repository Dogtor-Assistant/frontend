import type { Insurance } from 'BookAppointment/__generated__/MenuMutation.graphql';
import type { FC, ReactElement } from 'react';

import React, { useEffect, useState } from 'react';
import {
    Box,
    Center,
    Checkbox,
    Container,
    Divider,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    SimpleGrid,
} from '@chakra-ui/react';

type SelectServicesProps = {
    insurance: Insurance,
    possibleServices: ReadonlyArray<{
        readonly id: string,
        readonly description: string | null,
        readonly estimatedDuration: number | null,
        readonly name: string,
        readonly privateCovered: boolean | null,
        readonly publicCovered: boolean | null,
    }>,
    expectedDuration: number,
    selectedServices: Array<string>,
    setExpectedDuration: React.Dispatch<React.SetStateAction<number>>,
    setSelectedServices: React.Dispatch<React.SetStateAction<Array<string>>>,
    setValidForm: React.Dispatch<React.SetStateAction<boolean>>,
}
const SelectServices: FC<SelectServicesProps> =
({
    insurance,
    possibleServices,
    expectedDuration,
    selectedServices,
    setExpectedDuration,
    setSelectedServices,
    setValidForm,
}): ReactElement => {
    const [serviceInsuranceError, setServiceInsuranceError] = useState(false);
    
    useEffect(() => {
        setValidForm(possibleServices.length !== 0);
    }, [possibleServices, setValidForm]);

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
                        {possibleServices.map(service => (
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
                                    <Checkbox key={service.name} onChange={() => {
                                        if(selectedServices.includes(service.name)) {
                                            const newServices = selectedServices.filter(s => (s !== service.name));
                                            setSelectedServices(newServices);
                                            // eslint-disable-next-line max-len
                                            const duration = possibleServices[possibleServices.indexOf(service)].estimatedDuration;
                                            if(duration != null) {
                                                setExpectedDuration(expectedDuration - duration);
                                            }
                                        }
                                        else{
                                            // eslint-disable-next-line max-len
                                            if(possibleServices[possibleServices.indexOf(service)].privateCovered === false &&
                                            insurance === 'Private') {
                                                setServiceInsuranceError(true);
                                            }
                                            // eslint-disable-next-line max-len
                                            if(possibleServices[possibleServices.indexOf(service)].publicCovered === false &&
                                            insurance === 'Public') {
                                                setServiceInsuranceError(true);
                                            }
                                            selectedServices.push(service.name);
                                            setSelectedServices(selectedServices);
                                            // eslint-disable-next-line max-len
                                            const duration = possibleServices[possibleServices.indexOf(service)].estimatedDuration;
                                            if (duration != null) {
                                                setExpectedDuration(expectedDuration + duration);
                                            }
                                        }
                                    }}>
                                        {service.name}
                                    </Checkbox>
                                </Box>
                                { serviceInsuranceError &&
                                <Popover>
                                    <PopoverContent>
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader>Attention!</PopoverHeader>
                                        <PopoverBody>
                                            Your Insurance does not cover this Service!
                                            If you still choose to use this service you may have to pay for it yourself.
                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                                }
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
