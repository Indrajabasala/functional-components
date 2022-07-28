import React from 'react';

import axios from 'axios';


class SamplePost extends React.Component {
     state={
         username:'',
          sdata:[],
         
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
           this.setState({
               name:""
           })
         
     axios.post(`https://jsonplaceholder.typicode.com/users`, {user})
     .then(res => {
       console.log(res);
       console.log(res.data);
     })


    }

     render() {
         return(
             <>
             <form onSubmit={this.handlesave}>
            username: <input type="text" name="username" value={this.state.username}  onChange={this.handleChange}   ></input> <br/> <br/>
               <button> sumbit</button>
              </form>
             </>
         )
     }
    }

export default SamplePost