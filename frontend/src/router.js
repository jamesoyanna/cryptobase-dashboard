// imports
import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Login, Register, Dashboard, Coin } from './pages';

// export the router
export default
    <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/:coin" component={Coin} />
        </Switch>
    </Router>;