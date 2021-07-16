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
    insurance: number,
    possibleServices: Array<string>,
    serviceDuration: Array<number>,
    expectedDuration: number,
    selectedServices: Array<string>,
    serviceInsurance: Array<number>,
    setExpectedDuration: React.Dispatch<React.SetStateAction<number>>,
    setSelectedServices: React.Dispatch<React.SetStateAction<Array<string>>>,
    setValidForm: React.Dispatch<React.SetStateAction<boolean>>,
}
const SelectServices: FC<SelectServicesProps> =
({
    insurance,
    possibleServices,
    serviceDuration,
    expectedDuration,
    serviceInsurance,
    selectedServices,
    setExpectedDuration,
    setSelectedServices,
    setValidForm,
}): ReactElement => {
    const [serviceInsuranceError, setServiceInsuranceError] = useState(false);
    
    useEffect(() => {
        setValidForm(possibleServices != null);
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
                                key={service}
                            >
                                <Box
                                    as="h2"
                                    isTruncated
                                    lineHeight="tight"
                                    mt="1"
                                    paddingLeft={4}
                                >
                                    <Checkbox key={service} onChange={() => {
                                        if(selectedServices.includes(service)) {
                                            const newServices = selectedServices.filter(s => (s !== service));
                                            setSelectedServices(newServices);
                                            const duration = serviceDuration[possibleServices.indexOf(service)];
                                            setExpectedDuration(expectedDuration - duration);
                                        }
                                        else{
                                            if(serviceInsurance[possibleServices.indexOf(service)] !== insurance) {
                                                setServiceInsuranceError(true);
                                            }
                                            selectedServices.push(service);
                                            setSelectedServices(selectedServices);
                                            const duration = serviceDuration[possibleServices.indexOf(service)];
                                            setExpectedDuration(expectedDuration + duration);
                                        }
                                    }}>
                                        {service}
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
