import { connect } from "react-redux"
import CounterGroup from "../components/CounterGroup"

const { INCREASE, TOTAL } = require("../redux/action")
const { DECREASE } = require("../redux/action")
const { INIT } = require("../redux/action")
const defaultState = {
    counters: [],
      total: 0
}
const mapStateToProps = (state = defaultState) =>{
    return {
        counters : state.counters,
        total : state.total
    }
}
const increase =  (index) => {
    return {
        type: INCREASE,
        index: index
    }
}
const decrease = (index) =>{
    return {
        type: DECREASE, 
        index: index
    }
}
const init = (length) =>{
    return {
        type: INIT, 
        length: length
    }
}
const total = (length) =>{
    return {
        type: TOTAL, 
       length 
    }
}
const initAtFirst = () =>{
    return {
        type: INIT, 
        length: 0
    }
}
const mapDispatchProps = (dispatch) =>{
    return {
        increase : (...args) => dispatch(increase(...args)),
        decrease : (...args) => dispatch(decrease(...args)),
        init : (...args) =>dispatch(init(...args)),
        initAtFirst : (...args) =>dispatch(initAtFirst(...args)),
        total : (...args) => dispatch(total(...args))
    }
}
export default connect(mapStateToProps,mapDispatchProps)(CounterGroup)