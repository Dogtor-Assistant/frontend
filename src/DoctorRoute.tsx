import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useIsLoggedIn } from './authentication';
import { useIsDoctor } from './user';

const DoctorRoute: React.FC<{
        component: React.FC,
        path: string,
        exact: boolean,
    }> = props => {

        const isDoctor = useIsDoctor();
        const isLoggedIn = useIsLoggedIn;

        return (isDoctor && isLoggedIn) ? (
            <Route component={props.component} exact={props.exact} path={props.path} />) :
            (<Redirect to="/login" />);
    };
export default DoctorRoute;
