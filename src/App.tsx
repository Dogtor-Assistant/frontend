import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Home from 'Home';
import Login from 'Login';

import theme from 'utils/theme';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Router>
                <div>
                    <h1>Dogtor</h1>

                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route path="/login">
                            <Login />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </ChakraProvider>
    );
}

export default App;
