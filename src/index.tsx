import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';

import App from 'App';

import { AuthenticationProvider } from 'authentication';
import { ConfigProvider } from 'config';
import { GrahQLEnvironmentProvider } from 'environment';
import { UserDataProvider } from 'user';
import theme from 'utils/theme';

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ConfigProvider>
                <AuthenticationProvider>
                    <GrahQLEnvironmentProvider>
                        <UserDataProvider>
                            <App />
                        </UserDataProvider>
                    </GrahQLEnvironmentProvider>
                </AuthenticationProvider>
            </ConfigProvider>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
