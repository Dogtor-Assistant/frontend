import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useIsLoggedIn } from '../authentication';
import { useIsDoctor, useIsPatient } from '../user';

export const DoctorRoute: React.FC<{
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

export const PatientRoute: React.FC<{
        component: React.FC,
        path: string,
        exact: boolean,
    }> = props => {

        const isPatient = useIsPatient();
        const isLoggedIn = useIsLoggedIn;

        return (isPatient && isLoggedIn) ? (
            <Route component={props.component} exact={props.exact} path={props.path} />) :
            (<Redirect to="/login" />);
    };
