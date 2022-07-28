import React from 'react';

import axios from 'axios';


class SamplePost extends React.Component {
     state={
         username:'',
         persons:[],
         
     }

     componentDidMount() {
        this.getList();
      }

      getList = () =>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
      }
    

     handleChange=(e)=> {
         this.setState({  
            [e.target.name] : e.target.value   
         })
         
     }

     handlesave=(e)=> {
         e.preventDefault();
      
         const user = {
            name: this.state.username,
           };


     axios.post(`https://jsonplaceholder.typicode.com/users`, {user})
     .then(res => {
       this.getList();
     })

    }

    delete = (e, id) =>{
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
          this.getList();
        })
   
    }

     render() {
         return(
             <>
             <form onSubmit={this.handlesave}>
            username: <input type="text" name="username" value={this.state.username}  onChange={this.handleChange}   ></input> <br/> <br/>
               <button> sumbit</button>
              </form>

              <ul>
        { this.state.persons.map((person, i) =>{ 
        return(
        
            <div  key={i}>
        <li>{person.name}</li>
        <button onClick={(e) => this.delete(e,person.id)}> delete</button>
        </div>) })}
      </ul>
             </>
         )
     }
    }


    

export default SamplePost