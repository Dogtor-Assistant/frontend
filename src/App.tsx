import React from 'react';
import useMetaTags from 'react-metatags-hook';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useColorModeValue } from '@chakra-ui/color-mode';

import BookAppointment from 'BookAppointment';
import DebugMenu from 'DebugMenu';
import Footer from 'Footer';
import Home from 'Home';
import Login from 'Login';
import Navbar from 'Navbar';
import PatientPage from 'PatientPage';
import Calendar from 'Scheduler/Calendar';
import Search from 'Search/Search';
import Signup from 'Signup';
import NotFound from './Notfound/NotFound';
import { DoctorRoute, PatientRoute } from './ProtectedRoutes/ProtectedRoutes';

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

                        <Route path="/bookappointment/:id">
                            <BookAppointment />
                        </Route>

                        <DoctorRoute component={Calendar} exact path="/doctor" />

                        <PatientRoute component={PatientPage} exact path="/patient" />

                        <Route path="/search">
                            <Search />
                        </Route>

                        <Route component={NotFound} />
                    </Switch>
                    
                    <Footer/>
                </div>
            </Router>
            <DebugMenu />
        </>
    );
}

export default App;
