import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Home from 'Home';
import Login from 'Login';

function App() {
    return (
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
    );
}

export default App;
