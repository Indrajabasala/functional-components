import React,{useState,useEffect} from 'react';

function Todo() {
const[state, setState] = useState({name:'', email:''})
const [names, setNames] = useState([])
    

const handleChange =(e)=>{
    setState(prevData => ({...prevData, [e.target.name] : e.target.value }));
}

const onAdd = () =>{
    setNames(prevData => ([...prevData, {name:state.name, email:state.email} ]));
    setState({name:'', email:''})
    
}
    let {name, email} = state;
    return(
        <>
            <input name='name' value={name} onChange={handleChange} />
            <input name='email' value={email} onChange={handleChange} />
            <button onClick={onAdd}>Add</button>
            <hr />
            {names.map(each => <li>{each.name}========{each.email}</li>)}
        </>
    
    )
}

export default Todo