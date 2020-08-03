import React from 'react'
import Counter from '../Counter';

class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number : 0
        }
    }
    onInputChange = (e) =>{
        console.log(typeof e.target.value)
        this.setState({
            number : Number(e.target.value)
        })
    }
    render() {
        return (

            <div>
                <div>
                    number of contents : <input onChange={this.onInputChange}></input>
                </div>
                {
                    new Array(this.state.number).fill(0).map((value, index) => 
                        <Counter key ={index} /> 
                    )
                }
            </div>
        );
    }
}
export default CounterGroup;