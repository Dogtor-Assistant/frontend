import type { FC, ReactElement } from 'react';

import React, { useEffect } from 'react';
import {
    Box,
    Center,
    Checkbox,
    Container,
    Divider,
    HStack,
    Input,
    Stack,
} from '@chakra-ui/react';

type AgreementProps = {
    setPatientNotes: React.Dispatch<React.SetStateAction<string>>,
    shareData: boolean,
    setShareData: React.Dispatch<React.SetStateAction<boolean>>,
    setValidForm: React.Dispatch<React.SetStateAction<boolean>>,
}
const Agreement: FC<AgreementProps> =
({
    setPatientNotes,
    shareData,
    setShareData,
    setValidForm,
}): ReactElement => {

    useEffect(() => {
        setValidForm(true);
    }, [setValidForm]);

    return (
        <div>
            <Container maxW="container.l">
                <Center height="50px">
                    <Divider />
                </Center>
                <Box borderRadius="lg" borderWidth="1px" maxW="l" overflow="hidden">
                    <Box p={6}>
                        <Stack>
                            <Box
                                as="h4"
                                fontWeight="semibold"
                                isTruncated
                                lineHeight="tight"
                                mt="1"
                                paddingLeft={4}
                            >
                                Please feel free to add any notes or comments for your appointment:
                            </Box>
                            <Box>
                                <Input onChange={event => {
                                    setPatientNotes(event.target.value);
                                }} placeholder="Appointment Notes"/>
                            </Box>
                            <Center height="50px">
                                <Divider />
                            </Center>
                            <Box
                                as="h4"
                                fontWeight="semibold"
                                isTruncated
                                lineHeight="tight"
                                mt="1"
                                paddingLeft={4}
                            >
                                <Checkbox onChange={() => {
                                    if(shareData) {
                                        setShareData(false);
                                    }
                                    else{
                                        setShareData(true);
                                    }
                                }}>
                                    I hereby agree to share my appointment history and personal profile with the doctor.
                                </Checkbox>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
                <Center height="50px">
                    <Divider />
                </Center>
            </Container>
        </div>
    );
};

export default Agreement;
