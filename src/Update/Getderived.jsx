import React from 'react';


class Getderived extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            fruit:'banana'
        }
    }
     
    static getDerivedStateFromProps(props,state) {
        return{fruit:'apple'};
    }

    render() {
        return(
            <>
            <h2>getDerivedStateFromProps</h2>
            <h2>{this.state.fruit}</h2>

            </>
        )
    }
}

export default Getderived