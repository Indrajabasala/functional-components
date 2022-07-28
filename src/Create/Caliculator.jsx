import React from 'react';


class Caliculator extends React.Component {

      constructor() {
          super();
          this.state={
              data1:'',
              data2:'',
              data3:''
          }
      }

      handlechange=(e)=>{
          this.setState({
                [e.target.name]:e.target.value
                    
          })
        
      }

      handlesave=()=>{
          this.setState({
              data3:parseInt(this.state.data1) + parseInt(this.state.data2)
          })
          }

    render() {

        return(

            <>
            <h2>Calculator</h2>
            <input type="number" name="data1" value={this.state.data1} onChange={this.handlechange}></input>
            <input type="number" name="data2" value={this.state.data2}  onChange={this.handlechange}></input>
            <button onClick={this.handlesave}>add</button>
             <h2>{ this.state.data3} </h2>
            </>
        )
    }
}

export default Caliculator




