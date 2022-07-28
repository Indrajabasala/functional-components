import React from 'react';

import axios from 'axios';

class API extends React.Component {

    state={
 
        sampledata:[]
    }

    componentDidMount=()=> {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            const sampledata= res.data;
            this.setState({sampledata });
            })

        }

        render() {
            return(
                
                <>
                {this.state.sampledata.map(sample=> <li>{sample.username +"----" + sample.name+ "...." + sample.id}</li>)}
                </>
                
            )
        }               
}

export default API