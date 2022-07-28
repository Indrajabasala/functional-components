import React, {useState} from 'react';
import {Link} from "react-router-dom";


 function Home() {
     const [data,setdata]=useState("");
     const [data1,setdata1]=useState([])


 const handlechange=(e)=> {
     setdata(e.target.value)
     
 }

 const handlesave=()=> {
     const newdata= data.slice()
     data1.push(newdata)
     setdata('')
     console.log("check", data1)
       
 }

 
    return(
        <>
        <h2>this is home page </h2>
        <input type="text" value={data} onChange={handlechange}></input>
        <button primary  onClick={handlesave}>save </button><br/> <br/>
        <Link to='/Register'>go to register page </Link> 
        
        {
            data1.map((each) =>{
                return(
                    <li>{each}</li> 
            
                )
            })
        }
        
        </>
    )


}

export default Home