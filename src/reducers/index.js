import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import cartReducer from "./cart";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  cart: cartReducer,
  isLogged: loggedReducer,
});

export default allReducers;
