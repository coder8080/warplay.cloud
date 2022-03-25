import { combineReducers } from "redux";
import OptionsReducer from "./options/options-reducer";

const rootReducer = combineReducers({ options: OptionsReducer });

export default rootReducer;
