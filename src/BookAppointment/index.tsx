import React, { useState } from 'react';
import { Container } from '@chakra-ui/react';

import AppDate from './AppDate';

function BookAppointment() {
    return (
        <Container maxW="container.l">
            <AppDate/>
        </Container>
    );
}

export default BookAppointment;
