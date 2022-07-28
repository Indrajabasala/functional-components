import React from 'react';

import axios from 'axios';

class GD extends React.Component {
          
    state={
        name:'',
        persons:[]
    }

    componentDidMount() {
        this.getlist();
    }

        getlist=()=> {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res=> {
                  const persons=res.data;
                  this.setState({persons})
        })
    }

    delete=(e, id)=>{ 
        axios.delete('https://jsonplaceholder.typicode.com/users/' + id)
        .then(res=>{
            this.getlist();
        })
    }

    render() {
        return(
            <>
            {this.state.persons.map(each=> {
                return(
                    <>
                    <li>{each.name}</li>
                    <button onClick={(e) => this.delete(e, each.id)}>x</button>
                    </>
                )
            } )}
              </>
        )
    }
}

export default GD