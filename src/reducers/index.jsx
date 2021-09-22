import { combineReducers } from "redux";
import counter from "./counter";
import logged from "./islogged";

const allReducers = combineReducers({counter: counter, logged: logged})

export default allReducers