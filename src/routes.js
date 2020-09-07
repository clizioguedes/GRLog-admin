import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom' 

import Dashboard from './pages/Dashboard'

import Logon from './pages/Logon'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Dashboard} exact></Route>
                <Route path='/logon' component={Logon}></Route>
            </Switch>
        </BrowserRouter>
    )
}