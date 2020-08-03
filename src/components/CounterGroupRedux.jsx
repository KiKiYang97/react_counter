import React, {Component} from 'react';
import CounterRedux from "./CounterRedux";
import {INIT} from "../redux/action";
import store from "../redux/store";

class CounterGroupRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            length: 0,
            total: 0
        }
        store.dispatch({type: INIT, length: 0})

    }

    componentDidMount() {
        store.subscribe(
            () => {
                this.setState({
                    total: store.getState().total
                })
            }
        )
    }

    render() {
        return (
            <div>
                <p>number of content:</p>
                <input onChange={(e) => {
                    let length = Number(e.target.value);
                    store.dispatch({type: INIT, length})
                    this.setState({
                        length
                    })
                }}/>
                <p>total : {this.state.total}</p>
                {
                    new Array(this.state.length).fill(0).map((value, index) =>
                        <CounterRedux key={index} index={index} total={this.state.total}/>
                    )
                }
            </div>
        );
    }
}

export default CounterGroupRedux;