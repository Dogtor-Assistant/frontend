import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import DebugMenu from 'DebugMenu';
import Home from 'Home';
import Login from 'Login';
import Navbar from 'Navbar';
import Signup from 'Signup';

import theme from 'utils/theme';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Router>
                <div>
                    <Navbar />

                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route path="/login">
                            <Login />
                        </Route>

                        <Route path="/signup">
                            <Signup />
                        </Route>
                    </Switch>
                </div>
            </Router>
            <DebugMenu />
        </ChakraProvider>
    );
}

export default App;
