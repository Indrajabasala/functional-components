import React, { useState } from 'react'

function Practice() {
    const[state,setState]=useState({email:'',userName:''})
    const[names,setNames]=useState([])


    const handleChange=(e)=>{
         setState({ [e.target.name]:e.target.value})
    }

    const handleSubmit=()=> {
       
        setNames(prevData => ([...prevData, {userName:state.userName, email:state.email} ]));
        setNames({email:'',userName:''})

    }
    let(userName,email)=state;
    return(
        <> 
        <input type='text' name='email' value={email} onChange={handleChange}/>
        <input type='text' name='username' value={userName}  onChange={handleChange}/>
        <button onClick={handleSubmit}>  Add</button>
        {names.map((each)=> <li>{each.userName+"---"+ each.email} </li>)}
        </>
    )
}
export default Practice 