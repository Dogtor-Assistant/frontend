import React from 'react';
import ReactDOM from 'react-dom';

import App from 'App';

import { AuthenticationProvider } from 'authentication';
import { ConfigProvider } from 'config';
import { GrahQLEnvironmentProvider } from 'environment';
import { UserDataProvider } from 'user';

ReactDOM.render(
    <React.StrictMode>
        <ConfigProvider>
            <AuthenticationProvider>
                <GrahQLEnvironmentProvider>
                    <UserDataProvider>
                        <App />
                    </UserDataProvider>
                </GrahQLEnvironmentProvider>
            </AuthenticationProvider>
        </ConfigProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
