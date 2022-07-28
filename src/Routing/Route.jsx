import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import ProtectRoutes from './protectedRoutes'

const File =()=> {
    return(
        <BrowserRouter>
        <Switch>

            <ProtectRoutes path='/Home' Component={Home} />
             
             <Route path="/Login">
                <Login/>
            </Route>
            <Route path="/">
                <Register/>
            </Route>

        </Switch>
        </BrowserRouter>
    )
}

export default File