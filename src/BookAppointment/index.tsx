import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import BookAppointment from './BookAppointment';
import Confirmation from './Confirmation';

function BookAppointmentIndex() {
    const { path } = useRouteMatch();
    
    return (
        <div>
            <Switch>
                <Route exact path={path}>
                    <BookAppointment/>
                </Route>
                <Route path={`${path}/success`}>
                    <Confirmation />
                </Route>
            </Switch>
        </div>
    );
}

export default BookAppointmentIndex;
