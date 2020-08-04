import {connect} from "react-redux"
import CounterGroup from "../components/CounterGroup"

const { INIT } = require("../redux/action")
const defaultState = {
      total: 0
}
const mapStateToProps = (state = defaultState) =>{
    return {
        total : state.total
    }
}
const init = (length) =>{
    return {
        type: INIT, 
        length: length
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
        init : (...args) =>dispatch(init(...args)),
        initAtFirst : (...args) =>dispatch(initAtFirst(...args)),

    }
}
export default connect(mapStateToProps,mapDispatchProps)(CounterGroup)