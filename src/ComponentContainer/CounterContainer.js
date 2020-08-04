import {connect} from "react-redux";
import Counter from "../components/Counter";
import {DECREASE, INCREASE, TOTAL} from "../redux/action";

const defaultState = {
        counters: []
}
const mapStateToProps = (state = defaultState, props) => {
        console.log(state, props)
        return {
                count: state.counters[props.index],
        }
}
const increase = (index) => {
        return {
                type: INCREASE,
                index: index
        }
}
const decrease = (index) => {
        return {
                type: DECREASE,
                index: index
        }
}
const total = (number) => {
        return {
                type: TOTAL,
                number
        }
}
const mapDispatchProps = (dispatch) => {
        return {
                increase: (...args) => dispatch(increase(...args)),
                decrease: (...args) => dispatch(decrease(...args)),
                totalCount: (...args) => dispatch(total(...args))
        }
}
export const CounterContainer = connect(mapStateToProps, mapDispatchProps)(Counter)
