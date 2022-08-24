import React, { Component } from "react";
import { connect } from "react-redux";
import { closeCartAction } from "./redux/actions/cartAction";
import CartItemList from "./CartItemList";

class Cart extends Component {
  render() {
    return (
      <>
        <div
          className="modal fixed z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3"
          id="cart-modal"
        >
          <div className="modal-content relative max-w-4xl max-h-[calc(90vh-3.5rem)] bg-white shadow-xl rounded-xl">
            <div className="modal-header p-2 border-b flex justify-between items-center">
              <h4 className="uppercase text-xl font-semibold text-transparent ml-4 bg-clip-text bg-gradient-to-r from-[#3d665f] via-indigo-700 to-violet-900">
                Your Shopping Cart
              </h4>
              <div
                onClick={this.props.handleCloseCart}
                className="btn btn-close flex h-full cursor-pointer text-2xl duration-700 text-zinc-600 ml-auto mr-4 hover:scale-125  items-center"
              >
                <span>&times;</span>
              </div>
            </div>
            <div className="modal-body p-2">
              <div className="container">
                <div className="content-wrapper flex flex-wrap">
                  <CartItemList />
                </div>
              </div>
            </div>
            <div className="modal-footer p-2 flex justify-end items-center gap-2">
              <button
                onClick={this.props.handleCloseCart}
                className="btn cursor-pointer bg-gradient-to-r from-[#141e30] to-[#243b55] text-white text-lg text-center font-medium tracking-wider capitalize px-5 py-2 rounded-xl hover:scale-110 duration-500"
              >
                cancel
              </button>
              <button className="btn cursor-pointer bg-gradient-to-r from-[#8BC6EC] to-[#9599E2] text-white text-lg text-center font-medium tracking-wider capitalize px-5 py-2 rounded-xl hover:scale-110 duration-500">
                check out
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={this.props.handleCloseCart}
          className="overlay fixed top-0 left-0 w-screen h-screen pointer-events-auto bg-slate-400/50 z-[2] "
        ></div>
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    open: state.cartReducer.open,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCloseCart: () => {
      dispatch(closeCartAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
