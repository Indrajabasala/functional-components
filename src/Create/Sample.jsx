import React from 'react';

class Sample extends React.Component {
    constructor() {
        super(); 
        this.state={
            message: 'please subscribe',
             propsData : ''
        }
     }

    handlechange = () => {
        this.setState({
            message: 'thank you for subscribing'
        })
    }

    onChange = () => {
      if(this.props.name === this.state.propsData){
         this.setState({
             propsData:this.props.city 
         })
    }else{
        this.setState({
            propsData:this.props.name 
        })
    }
    }
   
    render() {
        return(
            <>
            <h2>{this.state.message}</h2>
            <button onClick={this.handlechange}>subscribe</button> <br/> <br/>
            <button onClick={this.onChange}>change props</button>
            <h2>this is props <br/>
                {this.state.propsData} 
                </h2>
            </>
        )
    }
} 

export default Sample