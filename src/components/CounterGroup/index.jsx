import React from 'react'
import {CounterContainer} from "../../ComponentContainer/CounterContainer";

class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            length: 0,
        }
        this.props.initAtFirst()
    }

    componentDidMount() {
        this.props.init(this.state.length)
    }

    onInputChange = (e) => {
        let newLength = Number(e.target.value);
        this.props.init(newLength)
        this.setState({
            length: newLength
        })
    }


    render() {
        return (
            <div>
                <div>
                    <p>number of contents :</p>
                    <input onChange={this.onInputChange}/>
                </div>
                <div>
                    <p>total:{this.props.total}</p>
                </div>
                {
                    new Array(this.state.length).fill(0).map((value, index) =>
                        <CounterContainer
                            key={index}
                            index={index}
                        />
                    )
                }
            </div>
        );
    }
}

export default CounterGroup;