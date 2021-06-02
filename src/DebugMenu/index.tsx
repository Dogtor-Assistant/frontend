import type { BackendConfig } from 'config';

import React from 'react';
import { FaBug } from 'react-icons/fa';
import {
    IconButton,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Select,
    Text,
    VStack,
} from '@chakra-ui/react';

import { useIsLoggedIn, useIsLoggingIn } from 'authentication';
import { useBackendConfig } from 'config';
import { BACKEND_CONFIGS } from 'utils/constants';

function DebugMenu() {
    const isLoggedIn = useIsLoggedIn();
    const isLoggingIn = useIsLoggingIn();
    const [config, setConfig] = useBackendConfig();

    return (
        <div style={{
            bottom: 16,
            position: 'fixed',
            right: 16,
        }}>
            <Popover>
                <PopoverTrigger>
                    <IconButton
                        aria-label="Debug"
                        icon={
                            <FaBug fontSize="15px" />
                        }
                    />
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader>Debug</PopoverHeader>
                    <PopoverBody>
                        <VStack align="left">
                            <Text fontSize="md" fontWeight="semibold">
                                Backend Configuration
                            </Text>
                            <Select
                                disabled={isLoggedIn || isLoggingIn}
                                onChange={event => setConfig(event.target.value as BackendConfig)}
                                value={config}
                            >
                                {
                                    BACKEND_CONFIGS.map(config => {
                                        return (
                                            <option key={`backend_config_${config}`} value={config}>
                                                {config}
                                            </option>
                                        );
                                    })
                                }
                            </Select>
                        </VStack>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </div>
    );
}

export default DebugMenu;
