import { combineReducers } from "redux";
import { infoReducer } from "./infoReducer";

export const rootReducer = combineReducers({ 
    arrInfo: infoReducer })