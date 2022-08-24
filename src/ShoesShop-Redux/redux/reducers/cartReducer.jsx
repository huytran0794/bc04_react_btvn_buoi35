import {
  ADD_TO_CART,
  CLOSE_CART,
  DECREASE_ITEM_CART,
  DELETE_FROM_CART,
  INCREASE_ITEM_CART,
  VIEW_CART,
} from "../constant/const";
import { Product } from "../model/Product.model";
const initialState = {
  cart: [],
  open: false,
};

export let cartReducer = (state = initialState, { type, payload }) => {
  let idx = -1;
  switch (type) {
    case ADD_TO_CART:
      idx = state.cart.findIndex((item) => item.id === payload.id);
      // convert data to object Product Model
      if (idx === -1) {
        let {
          id,
          name,
          alias,
          price,
          description,
          shortDescription,
          quantity,
          image,
        } = payload;
        let cartItemObject = new Product(
          id,
          name,
          alias,
          price,
          description,
          shortDescription,
          quantity,
          image,
          1
        );

        state.cart = [cartItemObject, ...state.cart];
      } else {
        state.cart[idx].quantityInCart++;

        state.cart = [...state.cart];
      }
      return { ...state };
    case VIEW_CART:
      return { ...state, open: true };
    case CLOSE_CART:
      return { ...state, open: false };
    case INCREASE_ITEM_CART:
      idx = state.cart.findIndex((item) => item.id === payload.id);
      if (idx > -1) {
        state.cart[idx].quantityInCart++;
      }
      return { ...state, cart: [...state.cart] };
    case DECREASE_ITEM_CART:
      idx = state.cart.findIndex((item) => item.id === payload.id);
      if (idx > -1) {
        state.cart[idx].quantityInCart--;
        if (state.cart[idx].quantityInCart === 0) {
          state.cart.splice(idx, 1);
          return { ...state, cart: [...state.cart] };
        }
      }
      return { ...state, cart: [...state.cart] };
    case DELETE_FROM_CART:
      idx = state.cart.findIndex((item) => item.id === payload.id);
      if (idx > -1) {
        state.cart.splice(idx, 1);
      }
      return { ...state, cart: [...state.cart] };
    default:
      return state;
  }
};
