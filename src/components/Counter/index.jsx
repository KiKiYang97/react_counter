import React from 'react'
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
    }
    static getDerivedStateFromProps(nextsProps,prevState) {
        if(nextsProps.total === 0){
            return {number : nextsProps.total}
        }
        return null;
    }
    onIncreaseClick = () => {
        this.setState((preState) => ({
            number: preState.number + 1
        }));
        this.props.callback(1)
    }
    onReduceClick = () => {
        this.setState((preState) => ({
            number: preState.number - 1
        }));
        this.props.callback(-1)
    }
    render() {
        return (
            <div className="counter">
                <button onClick={this.onIncreaseClick}>+</button>
                <mark>{this.state.number}</mark>
                <button onClick={this.onReduceClick}>-</button>
            </div>
        );
    }
}
export default Counter;