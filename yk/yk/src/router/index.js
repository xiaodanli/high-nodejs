import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import ClassHome from '../views/class_home'

function Router(){
    return <BrowserRouter>
        <Switch>
            <Route path='/' component={ClassHome}/>
        </Switch>
    </BrowserRouter>
}

export default Router