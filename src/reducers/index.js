import { combineReducers } from "redux";
import counter from "./CounterReducer";

export default combineReducers({
  //mapped to state.counter
  counter
});
