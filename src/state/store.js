import { createStore } from "redux";
import {reducers} from './reducer/index'


export const store = createStore(reducers, {})