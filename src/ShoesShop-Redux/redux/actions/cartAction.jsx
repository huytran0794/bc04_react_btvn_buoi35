import {
  ADD_TO_CART,
  CLOSE_CART,
  DECREASE_ITEM_CART,
  DELETE_FROM_CART,
  INCREASE_ITEM_CART,
  VIEW_CART,
} from "../constant/const";
export const addToCartAction = (shoe) => ({
  type: ADD_TO_CART,
  payload: shoe,
});

export const viewCartAction = () => {
  console.log("this is view cart actions");
  return {
    type: VIEW_CART,
  };
};

export const closeCartAction = () => {
  console.log("this is close cart action");
  return {
    type: CLOSE_CART,
  };
};

export const increaseCartAction = (shoe) => ({
  type: INCREASE_ITEM_CART,
  payload: shoe,
});

export const decreaseCartAction = (shoe) => ({
  type: DECREASE_ITEM_CART,
  payload: shoe,
});

export const deleteCartItemAction = (shoe) => ({
  type: DELETE_FROM_CART,
  payload: shoe,
});
