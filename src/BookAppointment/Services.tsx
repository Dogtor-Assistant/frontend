import React, { useState } from 'react';
import { Box, Container } from '@chakra-ui/react';

function Services() {
    const doctor = ['A', 'B', 'C'];

    return (
        <Container maxW="container.l">
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
            get services
        </Container>
    );
}

export default Services;
