import React from 'react';
import ReactDOM from 'react-dom';

import App from 'App';

import { AuthenticationProvider } from 'authentication';
import { GrahQLEnvironmentProvider } from 'environment';

ReactDOM.render(
    <React.StrictMode>
        <AuthenticationProvider>
            <GrahQLEnvironmentProvider>
                <App />
            </GrahQLEnvironmentProvider>
        </AuthenticationProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
