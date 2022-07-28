import axios from 'axios';
import React from 'react';

class GET extends React.Component {
     constructor() {
         super();
         this.state={
             username:'',
             names:[]
         }
     }
     componentDidMount() {
         this.getlist();
     }

        getlist=()=> {
         axios.get('https://jsonplaceholder.typicode.com/users')
         .then(res => {
             const names=res.data;
             this.setState({names});
         })
             
     }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSave=(e)=>{
    e.preventDefault();

        const preserve= {
            name:this.state.username,
        };
        console.log("yuyu",preserve)

        axios.post('https://jsonplaceholder.typicode.com/users',{preserve})
        .then(res =>{
    
            this.getlist(res.data);
        })
    }

   delete=(e,id)=> {
       axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
       .then(res=> {
           this.getlist();
       })
   }

    render() {
        return(
            <>
      <label>Username:</label> <input  name='username' value={this.state.username} onChange={this.handleChange}/>
      <button onClick={this.handleSave}>Add</button>
      <ul>
            {this.state.names.map((each,i)=> {
               return(
                   <div key={i}>
                       <li> {each.username}</li>
                       <button onclick={ (e)=>{this.delete(e,each.id)} }></button>
                   </div>
               )
            })}
      </ul>
     </>
        )
    }
}

export default GET