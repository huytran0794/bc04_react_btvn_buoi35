import { CLOSE_DETAIL, VIEW_DETAIL } from "../constant/const";
import { dataShoe } from "../../data/dataShoe";
const initialState = {
  shoeArr: dataShoe,
  currentShoe: {},
};

export let shoeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VIEW_DETAIL:
      return { ...state, currentShoe: payload };
    case CLOSE_DETAIL:
      return { ...state, currentShoe: {} };
    default:
      return state;
  }
};
