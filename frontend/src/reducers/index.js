import { combineReducers } from "redux";
import mapReducer from "./mapReducer";

const reducers = combineReducers({
    olmap: mapReducer
})

export default reducers;