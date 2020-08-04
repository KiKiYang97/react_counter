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
        this.props.initAtFirst()
        // store.dispatch({type: INIT, length: 0})
    }

    componentDidMount() {
        // store.subscribe(
        //     () => {
        //         this.setState({
        //             total: store.getState().total
        //         })
        //     }
        // )
        this.setState({
            total: this.props.total(this.state.length)
        })
    }

    onInputChange = (e) => {
        let newlength = Number(e.target.value);
        // store.dispatch({type: INIT, length})
        this.props.init(newlength)
        this.setState({
            length : newlength
        })
    }


    render() {
        return (
            <div>
                <div>
                    <p>number of contents :</p><input onChange={this.onInputChange}></input>
                </div>
                <div>
                    <p>total:{this.props.total}</p>
                </div>
                {
                    new Array(this.state.length).fill(0).map((value, index) =>
                        <Counter key={index}
                                 total={this.props.total}
                                 index={index}/>
                    )
                }
            </div>
        );
    }
}

export default CounterGroup;