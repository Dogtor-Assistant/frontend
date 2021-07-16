import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Confirmation from './Confirmation';
import Menu from './Menu';

function BookAppointment() {
    const { path } = useRouteMatch();
    
    return (
        <div>
            <Switch>
                <Route exact path={path}>
                    <Menu />
                </Route>
                <Route path={`${path}/success`}>
                    <Confirmation />
                </Route>
            </Switch>
        </div>
    );
}

export default BookAppointment;
