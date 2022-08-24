import React, { Component } from "react";
import { connect } from "react-redux";
import {
  decreaseCartAction,
  deleteCartItemAction,
  increaseCartAction,
} from "./redux/actions/cartAction";
import { convertNumberLocaleUS } from "./utils.jsx/System.utils";

export class CartItemList extends Component {
  render() {
    let totalPrice = 0;
    let emptyCart = (
      <p className="mx-auto text-slate-600 text-3xl uppercase p-10">
        Your cart is empty
      </p>
    );
    if (!this.props.cart.length) {
      totalPrice = 0;
      return emptyCart;
    }
    return (
      <div className="product__table w-full ">
        <div className="heading w-full flex items-center uppercase text-center fw-semibold text-base text-white bg-sky-500">
          <div className="px-3 w-1/12">#</div>
          <div className="px-3 w-2/12">img</div>
          <div className="px-3 w-2/12">name</div>
          <div className="px-3 w-2/12">unit price</div>
          <div className="px-3 w-2/12">quantity</div>
          <div className="px-3 w-2/12">total</div>
          <div className="px-3 w-1/12">action</div>
        </div>
        <div className="body">
          {this.props.cart.map((cartItem, idx) => {
            totalPrice += cartItem.getItemTotalPrice();
            return (
              <div
                className="content flex items-center text-center"
                key={cartItem.id.toString() + idx}
              >
                <div className="px-3 w-1/12">
                  <span className="item__order text-lg block mx-auto">
                    {idx + 1}
                  </span>
                </div>
                <div className="px-3 w-2/12">
                  <div className="item__img w-full h-full p-1">
                    <div className="img-wrapper flex items-center justify-center">
                      <img
                        src={cartItem.image}
                        alt=""
                        className="object-cover max-w-full min-w-full min-h-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-3 w-2/12">
                  <h5 className="item__name text-base font-medium block mx-auto">
                    {cartItem.name}
                  </h5>
                </div>
                <div className="px-3 w-2/12">
                  <div className="price text-red-800 text-lg font-semibold block mx-auto">
                    <span className="currency">$</span>
                    <span className="number">{cartItem.price}</span>
                  </div>
                </div>
                <div className="px-3 w-2/12">
                  <div className="quantity-adjust flex items-center justify-center gap-1">
                    <div
                      className="btn btn-adjust btn-down text-[#ccc] cursor-pointer w-8 h-8 flex items-center justify-center rounded-sm px-1 py-2 border border-zinc-200 focus:border-slate-500 hover:border-slate-500 hover:text-slate-700 duration-500 "
                      onClick={() => {
                        this.props.handleDecreaseCartItem(cartItem);
                      }}
                    >
                      <span className="fa-solid fa-minus"></span>
                    </div>
                    <input
                      type="text"
                      className="product__quantity text-center outline-none w-8 h-8 border border-x-0 border-zinc-200 focus:outline-none focus:bborder-slate-500 focus:border-x-[1px] hover:border-slate-500 hover:border-x-[1px] duration-500"
                      value={cartItem.quantityInCart}
                    />
                    <div
                      className="btn btn-adjust btn-up text-[#ccc] cursor-pointer w-8 h-8 flex items-center justify-center rounded-sm px-1 py-2 border border-zinc-200 focus:border-slate-500 hover:border-slate-500 hover:text-slate-700 duration-500"
                      onClick={() => {
                        this.props.handleIncreaseCartItem(cartItem);
                      }}
                    >
                      <span className="fa-solid fa-plus"></span>
                    </div>
                  </div>
                </div>
                <div className="px-3 w-2/12 ">
                  <div className="item__total-price text-lg font-semibold text-center text-red-800 hover:text-red-700 duration-700">
                    <span className="number">
                      {convertNumberLocaleUS(cartItem.getItemTotalPrice())}
                    </span>
                  </div>
                </div>
                <div className="px-3 w-1/12 text-center">
                  <span
                    onClick={() => {
                      this.props.handleDeleteCartItem(cartItem);
                    }}
                    className="fa-solid fa-trash-can cursor-pointer text-lg text-red-400 hover:scale-125 hover:text-red-700 duration-500"
                  ></span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="footer border-t-[1px] border-t-slate-400">
          <div className="cart__total-price text-right py-3">
            <span className="title uppercase font-medium text-lg">Total</span>
            <span className="char">:</span>
            <span className="price text-lg text-red-400 font-medium ml-3">
              {convertNumberLocaleUS(totalPrice)}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncreaseCartItem: (value) => {
      dispatch(increaseCartAction(value));
    },
    handleDecreaseCartItem: (value) => {
      dispatch(decreaseCartAction(value));
    },
    handleDeleteCartItem: (value) => {
      dispatch(deleteCartItemAction(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItemList);
