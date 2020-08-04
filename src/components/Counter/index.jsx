import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.props = props

    }

    onIncreaseClick = () => {
        this.props.increase(this.props.index)
        let number = 1
        this.props.totalCount(number)
    }

    onReduceClick = () => {
        this.props.decrease(this.props.index)
        let number = -1
        this.props.totalCount(number)
    }

    render() {
        return (
            <div className="counter">
                <button onClick={this.onIncreaseClick}>+</button>
                <mark>{this.props.count}</mark>
                <button onClick={this.onReduceClick}>-</button>
            </div>
        );
    }
}

export default Counter;