import {DECREASE, INCREASE, INIT, TOTAL} from "./action";

const defaultState = {
    counters: [],
    total: 0
}
export default function counterReducer(state = defaultState, action) {
    // let newState = {
    //     counters:state.counters,
    //     total:state.total
    // }
    let newState = {...state}
    switch (action.type) {
        case INCREASE : {
            newState.counters[action.index]++;
            break;
        }
        case DECREASE : {
            newState.counters[action.index]--;
            break;
        }
        case INIT: {
            return {
                counters: new Array(action.length).fill(0),
                total: 0
            }
        }
        case TOTAL: {
            newState.total = newState.total + action.number;
            break;
        }
        default :
            break;
    }
    return newState;
}