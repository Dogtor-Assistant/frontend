import type { DoctorUserCreateMutation, Weekday } from './__generated__/DoctorUserCreateMutation.graphql';
import type { FC, ReactElement } from 'react';

import { useState } from 'react';
import React from 'react';
import {
    Box,
    Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    IconButton,
    Input,
    Select,
    Spacer,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';
import {
    AddIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    DeleteIcon,
} from '@chakra-ui/icons';

import { useMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

const Doctor: FC = (): ReactElement => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [step, setStep] = useState(1);

    const [city, setCity] = useState('');
    const [streetName, setStreetName] = useState('');
    const [streetNumber, setStreetNumber] = useState(NaN);
    const [zipCode, setZipCode] = useState(NaN);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [webpage, setWebpage] = useState('');

    const emptySlots: { day: Weekday, slotStart: string, slotStop: string }[] = [];
    const [slots, setSlots] = useState(emptySlots);
    const emptySpecial: string[] = [];
    const [specialities, setSpecialities] = useState(emptySpecial);

    const [commit] = useMutation<DoctorUserCreateMutation>(graphql`
    mutation DoctorUserCreateMutation($input: UserDoctorInput!){
        createUserDoctor(input: $input) {
            id
        }
    }
    `);

    const next = (): void => {
        setStep(prevStep => prevStep + 1);
    };
      
    const back = (): void => {
        setStep(prevStep => prevStep - 1);
    };

    switch (step) {
    case 1:
        return (
            <Center>
                <VStack>
                    <Heading>Doctor Registration</Heading>
                    <Heading size="md">Step 1</Heading>
                    <StepOneForm
                        email={email} firstName={firstName}
                        lastName={lastName} password={password}
                        setEmail={setEmail} setFirstName={setFirstName}
                        setLastName={setLastName} setPassword={setPassword}

                    />
                    <Nav back={back} next={next} step={step} submit={() => { return undefined; }}/>
                </VStack>
            </Center>
        );
        
    case 2:
        return (
            <Center>
                <VStack>
                    <Heading>Doctor Registration</Heading>
                    <Heading size="md">Step 2</Heading>
                    <StepTwoForm
                        city={city} phoneNumber={phoneNumber}
                        setCity={setCity} setPhoneNumber={setPhoneNumber}
                        setStreetName={setStreetName} setStreetNumber={setStreetNumber}
                        setWebpage={setWebpage} setZipCode={setZipCode}
                        streetName={streetName} streetNumber={streetNumber}
                        webpage={webpage} zipCode={zipCode}

                    />
                    <Nav back={back} next={next} step={step} submit={() => { return undefined; }}/>
                </VStack>
            </Center>
        );
          
    case 3:
        return (
            <Center>
                <VStack>
                    <Heading>Doctor Registration</Heading>
                    <Heading size="md">Step 3</Heading>
                    <StepThreeForm
                        setSlots={setSlots} setSpecialities={setSpecialities}
                        slots={slots} specialities={specialities}
                    />
                    <Nav back={back} next={next} step={step} submit={() => {
                        commit({
                            onCompleted(data) {
                                console.log(data);
                            },
                            variables: {
                                'input': {
                                    'address': {
                                        'city': city,
                                        'streetName': streetName,
                                        'streetNumber': streetNumber,
                                        'zipCode': zipCode,
                                    },
                                    'email': email,
                                    'firstName': firstName,
                                    'lastName': lastName,
                                    'offeredSlots': slots,
                                    'password': password,
                                    'phoneNumber': phoneNumber,
                                    'specialities': specialities,
                                    'webpage': webpage,
                                },
                            },
                        });
                    }}/>
                </VStack>
            </Center>
        );

    default:
        return (
            <Center>
                <Heading>Doctor Registration</Heading>
                <Text>Error 500</Text>
            </Center>
        );
    }
};

const Nav: FC<{ back: () => void, next: () => void, step: number, submit: () => void }> =
({ back, next, step, submit }): ReactElement => {
    return (
        <Stack direction="row" spacing={4}>
            { step > 1 &&
            <Button
                colorScheme="blue"
                leftIcon={<ChevronLeftIcon />}
                onClick={back}
                variant="outline"
            >
                Back
            </Button>
            }
            { step < 3 &&
            <Button
                colorScheme="blue"
                onClick={next}
                rightIcon={<ChevronRightIcon />}
                variant="outline">
                Next
            </Button>
            }
            {step === 3 &&
            <Button
                colorScheme="blue"
                onClick={submit}
                variant="solid">
                Submit
            </Button>
            }
        </Stack>
    );
};

type stepOneFormProps = {
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setFirstName: React.Dispatch<React.SetStateAction<string>>,
    setLastName: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
}
const StepOneForm: FC<stepOneFormProps> =
({
    email, firstName, lastName, password,
    setEmail, setFirstName, setLastName, setPassword,
}): ReactElement => {
    return (
        <div>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                    onChange={event => {
                        setEmail(event.target.value);
                    }}
                    type="text"
                    value={email}
                />
            </FormControl>
            <FormControl mt={6}>
                <FormLabel>First Name</FormLabel>
                <Input
                    onChange={event => {
                        setFirstName(event.target.value);
                    }}
                    type="text"
                    value={firstName}
                />
            </FormControl>
            <FormControl mt={6}>
                <FormLabel>Last Name</FormLabel>
                <Input
                    onChange={event => {
                        setLastName(event.target.value);
                    }}
                    type="text"
                    value={lastName}
                />
            </FormControl>
            <FormControl my={6}>
                <FormLabel>Password</FormLabel>
                <Input
                    onChange={event => {
                        setPassword(event.target.value);
                    }}
                    type="password"
                    value={password}
                />
            </FormControl>
        </div>
    );
};

type stepTwoFormProps = {
    city: string,
    phoneNumber: string,
    setCity: React.Dispatch<React.SetStateAction<string>>,
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>,
    setStreetName: React.Dispatch<React.SetStateAction<string>>,
    setStreetNumber: React.Dispatch<React.SetStateAction<number>>,
    setWebpage: React.Dispatch<React.SetStateAction<string>>,
    setZipCode: React.Dispatch<React.SetStateAction<number>>,
    streetName: string,
    streetNumber: number,
    webpage: string,
    zipCode: number,
};

const StepTwoForm: FC<stepTwoFormProps> =
({
    city, phoneNumber, setCity, setPhoneNumber, setStreetName,
    setStreetNumber, setWebpage, setZipCode, streetName,
    streetNumber, webpage, zipCode,
}): ReactElement => {
    return (
        <div>
            <FormControl>
                <FormLabel>Street Name</FormLabel>
                <Input
                    onChange={event => {
                        setStreetName(event.target.value);
                    }}
                    type="text"
                    value={streetName}
                />
            </FormControl>
            <FormControl mt={6}>
                <FormLabel>Street Number</FormLabel>
                <Input
                    onChange={event => {
                        setStreetNumber(parseInt(event.target.value));
                    }}
                    type="number"
                    value={streetNumber}
                />
            </FormControl>
            <FormControl mt={6}>
                <FormLabel>ZIP Code</FormLabel>
                <Input
                    onChange={event => {
                        setZipCode(parseInt(event.target.value));
                    }}
                    type="number"
                    value={zipCode}
                />
            </FormControl>
            <FormControl my={6}>
                <FormLabel>City</FormLabel>
                <Input
                    onChange={event => {
                        setCity(event.target.value);
                    }}
                    type="text"
                    value={city}
                />
            </FormControl>
            <FormControl my={6}>
                <FormLabel>Phone Number</FormLabel>
                <Input
                    onChange={event => {
                        setPhoneNumber(event.target.value);
                    }}
                    type="text"
                    value={phoneNumber}
                />
            </FormControl>
            <FormControl my={6}>
                <FormLabel>Webpage</FormLabel>
                <Input
                    onChange={event => {
                        setWebpage(event.target.value);
                    }}
                    type="url   "
                    value={webpage}
                />
            </FormControl>
        </div>
    );
};

type stepThreeFormProps = {
    setSlots: React.Dispatch<React.SetStateAction<{ day: Weekday, slotStart: string, slotStop: string }[]>>,
    setSpecialities: React.Dispatch<React.SetStateAction<string[]>>,
    slots: Array<{ day: Weekday, slotStart: string, slotStop: string }>,
    specialities: Array<string>,
}

const StepThreeForm: FC<stepThreeFormProps> =
({
    setSlots, setSpecialities, slots, specialities,
}): ReactElement => {
    const [specialityIn, setSpecialityIn] = useState('');
    const [dayIn, setDayIn] = useState(-1);
    const [startIn, setStartIn] = useState('');
    const [stopIn, setStopIn] = useState('');

    const dayNamesArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    // Add Slot
    const addSlot = () => {

        if (dayIn === -1 || startIn === '' || stopIn === '') {
            return;
        }

        const slotIn = { day: dayNamesArr[dayIn] as Weekday, slotStart: startIn, slotStop: stopIn };

        const newSlots = [...slots, slotIn];

        setSlots(newSlots);
        
        setDayIn(-1);
        setStartIn('');
        setStopIn('');
    };

    // Remove Slot
    const removeSlot = (i: number) => {
        const removedArr = [...slots].filter(s => slots.indexOf(s) !== i);
        setSlots(removedArr);
    };

    // Add Speiality
    const addSpeciality = () => {
        if (!specialityIn || /^\s*$/.test(specialityIn)) {
            return;
        }

        const newSpecialities = [...specialities, specialityIn];

        setSpecialities(newSpecialities);
        
        setSpecialityIn('');
    };

    // Remove Speciality
    const removeSpeciality = (i: number) => {
        const removedArr = [...specialities].filter(s => specialities.indexOf(s) !== i);
        setSpecialities(removedArr);
    };

    return (
        <div>
            <VStack align="left" mb={6}>
                <Box>
                    <FormLabel>Provided Slots</FormLabel>
                    {slots.map((s, i) => {
                        return (
                            <Flex alignItems={'center'} key={i} mt={6} pl={4}>
                                <Text>{s.day} {s.slotStart} - {s.slotStop}</Text>
                                <Spacer />
                                <IconButton
                                    aria-label="Delete Speciality"
                                    colorScheme="blue"
                                    icon={<DeleteIcon />}
                                    marginEnd="0"
                                    onClick={() => removeSlot(i)}
                                    textAlign="center"
                                    variant="solid"
                                >
                                </IconButton>
                            </Flex>
                        );
                    })}
                    <HStack mt={6} spacing="24px">
                        <Select
                            onChange={event => {
                                if (!event.target.value) setDayIn(-1);
                                else setDayIn(parseInt(event.target.value));
                            }}
                            placeholder="Day"
                            value={dayIn}
                        >
                            <option value="0">Monday</option>
                            <option value="1">Tuesday</option>
                            <option value="2">Wednesday</option>
                            <option value="3">Thursday</option>
                            <option value="4">Friday</option>
                            <option value="5">Saturday</option>
                            <option value="6">Sunday</option>
                        </Select>
                        <Select
                            onChange={event => {
                                if (!event.target.value) setStartIn('');
                                else setStartIn(event.target.value);
                            }}
                            placeholder="Start"
                            value={startIn}
                        >
                            <option value="7:00">7:00</option>
                            <option value="7:30">7:30</option>
                            <option value="8:00">8:00</option>
                            <option value="8:30">8:30</option>
                            <option value="9:00">9:00</option>
                            <option value="9:30">9:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                            <option value="12:00">12:00</option>
                            <option value="12:30">12:30</option>
                            <option value="13:00">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="14:00">14:00</option>
                            <option value="14:30">14:30</option>
                            <option value="15:00">15:00</option>
                            <option value="15:30">15:30</option>
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                            <option value="18:00">18:00</option>
                            <option value="18:30">18:30</option>
                            <option value="19:00">19:00</option>
                            <option value="19:30">19:30</option>
                            <option value="20:00">20:00</option>
                            <option value="20:30">20:30</option>
                            <option value="21:00">21:00</option>
                        </Select>
                        <Select
                            onChange={event => {
                                if (!event.target.value) setStopIn('');
                                else setStopIn(event.target.value);
                            }}
                            placeholder="End"
                            value={stopIn}
                        >
                            <option value="8:00">8:00</option>
                            <option value="8:30">8:30</option>
                            <option value="9:00">9:00</option>
                            <option value="9:30">9:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                            <option value="12:00">12:00</option>
                            <option value="12:30">12:30</option>
                            <option value="13:00">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="14:00">14:00</option>
                            <option value="14:30">14:30</option>
                            <option value="15:00">15:00</option>
                            <option value="15:30">15:30</option>
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                            <option value="18:00">18:00</option>
                            <option value="18:30">18:30</option>
                            <option value="19:00">19:00</option>
                            <option value="19:30">19:30</option>
                            <option value="20:00">20:00</option>
                            <option value="20:30">20:30</option>
                            <option value="21:00">21:00</option>
                            <option value="21:30">21:30</option>
                            <option value="22:00">22:00</option>
                            <option value="22:30">22:30</option>
                        </Select>
                    </HStack>
                    <Button
                        colorScheme="blue"
                        leftIcon={<AddIcon />}
                        mt={6}
                        onClick={addSlot}
                        variant="ghost"
                    >
                        Add Slot
                    </Button>
                </Box>
                <Box>
                    <FormControl>
                        <FormLabel mt={6}>Specialities</FormLabel>
                        {specialities.map((s, i) => {
                            return (
                                <Flex alignItems={'center'} key={i} mt={6} pl={4}>
                                    <Text>{s}</Text>
                                    <Spacer />
                                    <IconButton
                                        aria-label="Delete Speciality"
                                        colorScheme="blue"
                                        icon={<DeleteIcon />}
                                        marginEnd="0"
                                        onClick={() => removeSpeciality(i)}
                                        textAlign="center"
                                        variant="solid"
                                    >
                                    </IconButton>
                                </Flex>
                            );
                        })}
                        <Input
                            mt={6}
                            onChange={event => {
                                setSpecialityIn(event.target.value);
                            }}
                            type="text"
                            value={specialityIn}
                        />
                    </FormControl>
                    <Button
                        colorScheme="blue"
                        leftIcon={<AddIcon />}
                        mt={6}
                        onClick={addSpeciality}
                        variant="ghost"
                    >
                        Add Speciality
                    </Button>
                </Box>
            </VStack>
        </div>
    );
};

export default Doctor;
