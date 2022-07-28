import React,{useState} from 'react';


function Button() {
    const[Text,setText]=useState("click me please");
    return(
        <button onClick={()=> {setText("thank you")}}>  {Text} </button>
                  
    )
}

export default Button

