import React from 'react';
import Login from './Login'
import {
    Route,
  } from 'react-router-dom';
const ProtectRoutes = ({Component, ...props}) =>{
    let login = true;
    //let data = JSON.parse(localStorage.getItem(''));
    return(
        <>
        {login ? <Route {...props} >
                    <Component />
            </Route>  :
         <Route {...props} >
                     <Login />
             </Route>  }
        </>
    )
}

export default ProtectRoutes;