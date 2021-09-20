import { combineReducers } from "redux";

import {accountReducer} from "./accounrReducer";

const reducers = combineReducers({account: accountReducer});



export default reducers;