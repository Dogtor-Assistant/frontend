import type { FC, ReactElement } from 'react';

import React from 'react';
import { Button } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Stack } from '@chakra-ui/layout';

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

export default Nav;
