import React from 'react'
import store from "../../redux/store";
import {DECREASE, INCREASE, TOTAL} from "../../redux/action";

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            count: 0
        }
    }

    componentWillUnmount() {
        this.setState = () => null
    }

    componentDidMount() {
        // store.subscribe(
        //     () => {
        //         this.setState({
        //             count: store.getState().counters[this.props.index]
        //         })
        //     }
        // )
        this.setState({
            count: this.props.counters[this.props.index]
        })
    }

    onIncreaseClick = () => {
        // store.dispatch({type: INCREASE, index: this.props.index})
        // store.dispatch({type: TOTAL, total: this.props.total, number: 1})
        this.props.increase(this.props.index)
        let number = 1
        this.props.total(number)
    }
    onReduceClick = () => {
        // store.dispatch({type: DECREASE, index: this.props.index})
        // store.dispatch({type: TOTAL, total: this.props.total, number: -1})
        this.props.decrease(this.props.index)
        let number = -1
        this.props.total(number)
    }

    render() {
        return (
            <div className="counter">
                <button onClick={this.onIncreaseClick}>+</button>
                <mark>{this.state.count}</mark>
                <button onClick={this.onReduceClick}>-</button>
            </div>
        );
    }
}

export default Counter;