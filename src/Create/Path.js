import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import Form from "../Create/Form";
import Login from "../Create/Login"

const DataFile = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Form} />
                <Route exact path="/login" component={Login} />

                {/* <Route path="/" exact>
                    <Form />
                </Route> */}
                {/* <Route path="/login">
                    <Login />
                </Route> */}




            </Switch>
        </BrowserRouter>

    )
}

export default DataFile;

