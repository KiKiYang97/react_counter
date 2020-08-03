import React from 'react'
import Counter from '../Counter';
import store from "../../redux/store";
import {INIT} from "../../redux/action";

class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
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

    onInputChange = (e) => {
        let length = Number(e.target.value);
        store.dispatch({type: INIT, length})
        this.setState({
            length
        })
    }


    render() {
        return (

            <div>
                <div>
                    <p>number of contents :</p><input onChange={this.onInputChange}></input>
                </div>
                <div>
                    <p>total:{this.state.total}</p>
                </div>
                {
                    new Array(this.state.length).fill(0).map((value, index) =>
                        <Counter key={index}
                                 total={this.state.total}
                                 index={index}/>
                    )
                }
            </div>
        );
    }
}

export default CounterGroup;