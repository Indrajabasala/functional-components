import React ,{useState} from 'react';


function List()  {
    const[data,setData]=useState({name:'',email:''})
    const[state,setState]= useState([])


    const handleChange=(e)=>{
        setState(prevData => ({...prevData, [e.target.name] : e.target.value }));

    }
   const onSubmit =()=> {
       alert();
       setData(prevData => ([...prevData, {name:data.name, email:data.email} ]));
    setState({name:'', email:''})
    }

    // const onAdd = () =>{
    //     setNames(prevData => ([...prevData, {name:state.name, email:state.email} ]));
    //     setState({name:'', email:''})
        
       let {name,email}= data;

    return(
        <>
        <input name='name' value={name} onChange={handleChange} ></input>
        <input name='email' value={email} onChange={handleChange} ></input>
        <button onClick={onSubmit}>add</button>
        </>
    )
}

export default List

