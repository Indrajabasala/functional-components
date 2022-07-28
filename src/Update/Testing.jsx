import React from 'react';


class Testing extends React.Component {
    constructor() {
        super();
        this.state={
            game:'kabbadi'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ game:'kho-kho'})
        }, 1000);
    }

    render() {
        return(
            <>
            <h2>componentDidMount</h2>
            <h2>{this.state.game}</h2>
            {/* <Testing/> */}
            </>
        )
    }
}
export default Testing