import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Home';
import Branch from './Branch';
import Register from './Register'

const DataFile = () => {

  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/Branch" >
          <Branch />
        </Route>



      </Switch>
    </BrowserRouter>

  )
}

export default DataFile;

