import React from 'react';
import useMetaTags from 'react-metatags-hook';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useColorModeValue } from '@chakra-ui/color-mode';

import DebugMenu from 'DebugMenu';
import Footer from 'Footer';
import Home from 'Home';
import Login from 'Login';
import Navbar from 'Navbar';
import PatientPage from 'PatientPage';
import Calendar from 'Scheduler/Calendar';
import Signup from 'Signup';
import NotFound from './Notfound/NotFound';
import { DoctorRoute, PatientRoute } from './ProtectedRoutes/DoctorRoute';

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

                        <DoctorRoute component={Calendar} exact path="/doctor" />

                        <Route component={NotFound} />

                        <Route path="/patient">
                            <PatientPage />
                        </Route>
                    </Switch>
                    
                    <Footer/>
                </div>
            </Router>
            <DebugMenu />
        </>
    );
}

export default App;
