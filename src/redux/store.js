import {createStore} from "redux";
import {counterReducer} from "./reducer";

let store = createStore(counterReducer, {
    counters: [],
    total: 0
});
export default store;