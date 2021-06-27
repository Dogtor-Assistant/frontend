import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Doctor from './Doctor';
import Menu from './Menu';
import Patient from './Patient';
import SignupSuccess from './SignupSuccess';

function Signup() {
    const { path } = useRouteMatch();
    
    return (
        <div>
            <Switch>
                <Route exact path={path}>
                    <Menu />
                </Route>
                <Route path={`${path}/patient`}>
                    <Patient />
                </Route>
                <Route path={`${path}/doctor`}>
                    <Doctor />
                </Route>
                <Route path={`${path}/success`}>
                    <SignupSuccess />
                </Route>
            </Switch>
        </div>
    );
}

export default Signup;
