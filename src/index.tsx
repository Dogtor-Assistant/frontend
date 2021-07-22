import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';

import App from 'App';
import GlobalValuesProvider from 'GlobalValuesProvider';

import 'utils/extensions';
import { AuthenticationProvider } from 'authentication';
import { ConfigProvider } from 'config';
import { GrahQLEnvironmentProvider } from 'environment';
import theme from 'utils/theme';

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ConfigProvider>
                <AuthenticationProvider>
                    <GrahQLEnvironmentProvider>
                        <GlobalValuesProvider>
                            <App />
                        </GlobalValuesProvider>
                    </GrahQLEnvironmentProvider>
                </AuthenticationProvider>
            </ConfigProvider>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
