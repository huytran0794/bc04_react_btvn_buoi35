import React, { Component } from "react";
import { connect } from "react-redux";
import { viewCartAction } from "./redux/actions/cartAction";
class Nav extends Component {
  render() {
    return (
      <>
        <nav className="bg-gray-300/30 shadow-lg">
          <div className="container">
            <div className="nav-wrapper flex items-center justify-between py-4 ">
              <div className="nav-brand uppercase text-4xl cursor-pointer text-slate-500 hover:text-slate-700 duration-500">
                ECOMMERCE
              </div>
              <div className="nav-icon ">
                <div
                  onClick={this.props.handleViewCart}
                  className="cart flex items-center relative cursor-pointer"
                >
                  <i className="fa-solid fa-bag-shopping text-[26px]"></i>
                  <div className="cart__total-items absolute top-0 right-[-10px]">
                    <div className="number-items text-white flex items-center justify-center bg-indigo-600 rounded-full w-4 h-4 ">
                      <span className="text-xs">{this.props.cart.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

let mapStateToProps = (state) => ({
  cart: state.cartReducer.cart,
});

let mapDispatchToProps = (dispatch) => {
  return {
    handleViewCart: () => {
      dispatch(viewCartAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
