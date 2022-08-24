import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCartAction } from "./redux/actions/cartAction";
import { viewDetailAction } from "./redux/actions/viewDetailAction";
import "./shoeShop.css";
class Shoe extends Component {
  render() {
    let { id, name, price, shortDescription, quantity, image } =
      this.props.shoe;
    let flexCenterClass = "flex justify-center items-center";
    return (
      <div className="shoe card w-3/12 p-5 " id={id} >
        <div className="card__content group h-full flex flex-col gap-4 bg-slate-100 shadow-md hover:shadow-xl rounded-lg p-2 relative duration-500">
          <div className="heading">
            <div
              className={`stock bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold uppercase rounded-[10px] p-1 w-1/3 ${flexCenterClass} gap-1`}
            >
              <span className="title">Stock</span>
              <span className="char">:</span>
              <span className="number">{quantity}</span>
            </div>
          </div>
          <div className="thumb p-3 h-1/2 basis-1/2 flex items-center justify-center ">
            <div className="img-wrapper w-52 h-52 max-w-2xl overflow-hidden group-hover:-translate-x-5 group-hover:-translate-y-16 group-hover:-rotate-12 duration-500">
              <img
                src={image}
                alt=""
                className="min-w-full max-w-full min-h-full object-cover drop-shadow-lg"
              />
            </div>
          </div>
          <div className="details p-2 flex-1 flex flex-col justify-between">
            <div className="name text-2xl mb-3 font-bold text-[#363636]">
              {name}
            </div>
            <div className="short-desc mb-4 txt-ellipsis">
              {shortDescription}
            </div>
            <div className="bottom flex justify-between flex-wrap">
              <div
                onClick={() => {
                  this.props.handleGetShoeDetail(this.props.shoe);
                }}
                className="cursor-pointer bg-gradient-to-r from-red-600 to-red-300 text-white uppercase font-medium rounded-lg flex justify-center items-center px-2"
              >
                View details
              </div>
              <div className="price text-2xl text-red-500 font-semibold text0">
                $ {price}
              </div>
              <div className="links flex items-center">
                <span className="fa-solid fa-heart btn-wish text-2xl mr-5 cursor-pointer hover:scale-125 hover:text-indigo-800 duration-500"></span>
                <span
                  onClick={() => {
                    this.props.handleAddToCart(this.props.shoe);
                  }}
                  className="fa-solid fa-cart-plus btn-add-cart text-2xl cursor-pointer hover:scale-125 hover:text-indigo-800 duration-500"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleGetShoeDetail: (value) => {
      dispatch(viewDetailAction(value));
    },
    handleAddToCart: (value) => {
      dispatch(addToCartAction(value));
    },
  };
};

export default connect(null, mapDispatchToProps)(Shoe);
