import React from 'react';
import {withRouter} from "react-router-dom";


class Home extends React.Component {

    handleSave=()=> {
        this.props.history.push('/Register');

         }

   render() {
        let data =JSON.parse(localStorage.getItem('userdetails'));


        
        return(
            <>
            <h2> this is home page {data.email}</h2>
            <button onClick={this.handleSave}>Logout</button>
            </>
        )
    }
}
export default withRouter(Home)