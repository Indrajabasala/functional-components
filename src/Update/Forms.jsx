import React from 'react';


class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.name= React.createRef();
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        alert(this.name.current.value);
    }

    render() {
        return(
            <>
            <form onSubmit={this.handleSubmit}>
            <label>input:</label><input type="text"  style={{marginTop:"180px"}}ref={this.name}></input>
           <button type="submit">Click</button>
           {/* <input name="Submit" type="submit"/> */}
            </form>
            </>
        )
    }
}

export default Forms