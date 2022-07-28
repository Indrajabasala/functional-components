import React from 'react';


class Todo extends React.Component{
    state={
        username:'',
        email:'',
        persons:[]
    }

    handleChange = (e) =>{
        this.setState({
           [e.target.name]  : e.target.value
        })
    }

    handleSave = () =>{
        const {username, email, persons} = this.state;
  
        let obj = {
            username,
            email
        }

        this.setState({
            persons : [...persons, obj]
        })
    }
 
    render(){
        const {username, email, persons} = this.state;
        // console.log('username', username, 'email', email, 'persons', persons)
        return(
            <>
            username : <input name='username' value={username} onChange={this.handleChange} />
            email : <input name='email' value={email} onChange={this.handleChange} />

            <button onClick={this.handleSave}>Save</button>


            {persons.map((person, i)=>   <li key={i}>{ person.username + '--' + person.email }   </li>    )}

            </>
        )
    }
}

export default Todo;