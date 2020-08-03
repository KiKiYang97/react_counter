import React from 'react'
import Counter from '../Counter';

class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number : 0,
            total:0
        }
    }
    
    onInputChange = (e) =>{   
        this.setState({
            number : Number(e.target.value),
            total : 0
        })
    }
    
    callback = (number) =>{
        this.setState({
            total : this.state.total + number
        })
    }

    render() {
        return (

            <div>
                <div>
                    number of contents : <input onChange={this.onInputChange}></input>
                </div>
                <div>
                    total:{this.state.total}
                </div>
                {
                    new Array(this.state.number).fill(0).map((value, index) => 
                        <Counter key ={index} 
                        total = {this.state.total} 
                        onInputChange = {this.onInputChange}
                        callback = {this.callback}/> 
                    )
                }
            </div>
        );
    }
}
export default CounterGroup;