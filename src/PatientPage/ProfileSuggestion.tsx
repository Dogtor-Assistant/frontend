import type { Gender, Insurance, ProfileSuggestion_data$key } from './__generated__/ProfileSuggestion_data.graphql';
import type { ProfileSuggestionUpdateMutation } from './__generated__/ProfileSuggestionUpdateMutation.graphql';

import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
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
    Container,
    Flex,
    Heading,
    Spacer,
    Text,
} from '@chakra-ui/react';

import { useMutation } from 'react-relay';
import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import LoadingIndicator from 'LoadingIndicator';
import MiniForm from './MiniForm';

import { usePatientId } from 'user';

type Props = {
    data: ProfileSuggestion_data$key,
    setShowSuggestion: React.Dispatch<React.SetStateAction<boolean>>,
    showSuggestion: boolean,
}

function ProfileSuggestion(props: Props) {
    const history = useHistory();
    const patientId = usePatientId();
    
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = useRef(null);

    const [validForm, setValidForm] = useState(false);
    const [insurance, setInsurance] = useState(0);
    const [birthDate, setBirthDate] = useState(new Date());
    const [gender, setGender] = useState(-1);
    const data = useFragment(
        graphql`
            fragment ProfileSuggestion_data on Query {
                me {
                    patientProfile {
                        birthDate
                        insurance
                        gender
                        medications
                        medicalConditions                    
                    }
                }
            }
        `,
        props.data,
    );
    
    useEffect(() => {
        props.setShowSuggestion(data.me != null && data.me.patientProfile != null &&
            (!data.me.patientProfile.birthDate || !data.me.patientProfile.insurance ||
             !data.me.patientProfile.gender || !data.me.patientProfile.medications ||
             !data.me.patientProfile.medicalConditions
            ));
    }, [data.me, props]);

    const closeSuggestion = (): void => {
        props.setShowSuggestion(false);
    };

    const [commit, isInFlight] = useMutation<ProfileSuggestionUpdateMutation>(graphql`
    mutation ProfileSuggestionUpdateMutation($input: UserPatientInputUpd!){
        updateUserPatientProfile(input: $input) {
            id
        }
    }
    `);
    
    if (isInFlight) {
        return <LoadingIndicator />;
    }

    const updateProfile = (): void => {
        const genderArr: Gender[] = ['Female', 'Male', 'TransgenderFemale', 'TransgenderMale', 'NonBinary'];
        const insuranceArr: Insurance[] = ['Public', 'Private'];

        commit({
            onCompleted(data) {
                if (data.updateUserPatientProfile != null &&
                    'id' in data.updateUserPatientProfile) {
                    props.setShowSuggestion(false);
                    setIsOpen(false);
                    history.push('/patient');
                }

            },
            variables: {
                'input': {
                    'birthDate': birthDate.toISOString(),
                    'gender': genderArr[gender],
                    'id': patientId !== undefined ? patientId : '',
                    'insurance': insuranceArr[insurance],
                },
            },
        });
    };

    return (
        <Center>
            { props.showSuggestion &&
            <Container>
                <Heading alignSelf="center" my={4} size="md">Important Suggestion</Heading>
                <Text>
                        Your profile seems to be missing important information that could
                        help you improve your experience using Dogtor. Do you want to complete
                        you personal profile now?
                </Text>
                <Flex>
                    <Spacer />
                    <Box>
                        <Button
                            colorScheme="blue"
                            m={4}
                            onClick={closeSuggestion}
                            variant="outline"
                        >
                                Later
                        </Button>
                        <Button
                            colorScheme="blue"
                            m={4}
                            onClick={() => setIsOpen(true)}
                            variant="solid"
                        >
                                Continue
                        </Button>
                    </Box>
                </Flex>
            </Container>
            }

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Complete Personal Profile
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            <MiniForm
                                gender={gender} insurance={insurance}
                                setBirthDate={setBirthDate} setGender={setGender}
                                setInsurance={setInsurance} setValidForm={setValidForm}
                            />
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button onClick={onClose} ref={cancelRef}>
                                Cancel
                            </Button>
                            <Button colorScheme="blue" isDisabled={!validForm} ml={3} onClick={updateProfile}>
                                Save
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </Center>
    );
}

export default ProfileSuggestion;
