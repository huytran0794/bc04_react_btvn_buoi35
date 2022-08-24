import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { shoeReducer } from "./shoeReducer";

export let rootReducer = combineReducers({
  shoeReducer,
  cartReducer,
});
