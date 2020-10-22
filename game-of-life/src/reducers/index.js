import { combineReducers } from "redux";
import gridReducer from "./gridReducer";
import displayReducer from "./displayReducer";

export default combineReducers({ display: displayReducer, grid: gridReducer });