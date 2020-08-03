import React from 'react'
import Counter from '../Counter';

class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

            <div>
                {
                    new Array(this.props.value).fill(0).map((value, index) => 
                        <Counter key ={index} /> 
                    )
                }
            </div>
        );
    }
}
export default CounterGroup;