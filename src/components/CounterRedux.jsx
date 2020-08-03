import React, {Component} from 'react';
import store from "../redux/store";
import {DECREASE, INCREASE, TOTAL} from "../redux/action";

class CounterRedux extends Component {
    constructor(props) {
        super(props);
        this.props = props
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        store.subscribe(
            () => {
                this.setState({
                    count: store.getState().counters[this.props.index]
                })
            }
        )
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    store.dispatch({type: INCREASE, index: this.props.index})
                    store.dispatch({type: TOTAL, total: this.props.total, number: 1})

                }}>
                    +
                </button>
                <mark>{this.state.count}</mark>
                <button onClick={() => {
                    store.dispatch({type: DECREASE, index: this.props.index})
                    store.dispatch({type: TOTAL, total: this.props.total, number: -1})
                }}>
                    -
                </button>
            </div>
        );
    }
}

export default CounterRedux;