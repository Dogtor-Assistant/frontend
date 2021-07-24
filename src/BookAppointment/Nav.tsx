import type { FC, ReactElement } from 'react';

import React from 'react';
import { Button } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Stack } from '@chakra-ui/layout';

const Nav: FC<{
    back: () => void,
    next: () => void,
    overview: () => void,
    step: number,
    submit: () => void,
    lim: number,
    valid: boolean,
}> =
({ back, next, overview, step, submit, lim, valid }): ReactElement => {
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
            { step < lim -1 &&
            <Button
                colorScheme="blue"
                isDisabled={!valid}
                onClick={next}
                rightIcon={<ChevronRightIcon />}
                variant="outline">
                Next
            </Button>
            }
            { step === lim -1 &&
            <Button
                colorScheme="blue"
                isDisabled={!valid}
                onClick={overview}
                rightIcon={<ChevronRightIcon />}
                variant="outline">
                Appointment Overview
            </Button>
            }
            {step === lim &&
            <Button
                colorScheme="blue"
                isDisabled={!valid}
                onClick={submit}
                variant="solid">
                Submit
            </Button>
            }
        </Stack>
    );
};

export default Nav;
