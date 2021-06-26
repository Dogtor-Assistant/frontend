import React from 'react';
import useMetaTags from 'react-metatags-hook';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useColorModeValue } from '@chakra-ui/color-mode';

import DebugMenu from 'DebugMenu';
import Home from 'Home';
import Login from 'Login';
import Navbar from 'Navbar';
import Signup from 'Signup';

function App() {
    const themeColorName = useColorModeValue('white', 'gray.800');
    const themeColor = `var(--chakra-colors-${themeColorName})`;
    useMetaTags({
        metas: [
            {
                content: themeColor,
                name: 'theme-color',
            },
        ],
    }, [themeColor]);

    return (
        <>
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
        </>
    );
}

export default App;
