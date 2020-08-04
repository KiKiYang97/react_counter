import {DECREASE, INCREASE, INIT, TOTAL} from "./action";

export default function counterReducer(state, action) {
    switch (action.type) {
        case INCREASE : {
            state.counters[action.index]++;
            break;
        }
        case DECREASE : {
            state.counters[action.index]--;
            break;
        }
        case INIT: {
            return {
                counters: new Array(action.length).fill(0),
                total: 0
            }
        }
        case TOTAL: {
            state.total = state.total + action.number;
            break;
        }
        default :
            break;
    }
    return state;
}