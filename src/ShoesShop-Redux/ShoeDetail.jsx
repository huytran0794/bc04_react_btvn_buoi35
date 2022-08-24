import React, { Component } from "react";
import { connect } from "react-redux";
import { closeDetailAction } from "./redux/actions/viewDetailAction";
import { convertNumberLocaleUS } from "./utils.jsx/System.utils";

class ShoeDetail extends Component {
  render() {
    if (Object.keys(this.props.currentShoe).length !== 0) {
      let {
        id,
        name,
        alias,
        price,
        description,
        shortDescription,
        quantity,
        image,
      } = this.props.currentShoe;
      return (
        <>
          <div
            className="modal fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 max-w-2xl w-3/6 bg-white rounded-xl"
            id="shoe-detail-modal"
          >
            <div className="modal-content">
              <div className="modal-header p-2 flex justify-between">
                <span
                  onClick={() => {
                    console.log();
                    this.props.handleCloseDetailModal();
                  }}
                  className="btn btn-close block h-full cursor-pointer text-xl duration-700 text-zinc-600 ml-auto mr-4 mb-1 hover:scale-110"
                >
                  &times;
                </span>
              </div>
              <div className="modal-body p-2 overflow-auto">
                <div className="container">
                  <div className="content-wrapper flex flex-wrap">
                    <div className="column-left h-full w-5/12 basis-5/12 p-3">
                      <div className="thumb flex items-center justify-center ">
                        <div className="img-wrapper w-56 h-56 max-w-2xl overflow-hidden">
                          <img
                            src={image}
                            alt=""
                            className="min-w-full max-w-full min-h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="column-right h-full w-7/12 basis-7/12 p-3">
                      <div className="details flex flex-col gap-[25px]">
                        <div className="name font-bold text-[#363636]">
                          <span className="alias block mb-4 text-slate-500">
                            {alias}
                          </span>
                          <h3 className="main-name font-bold text-4xl">
                            {name}
                          </h3>
                        </div>
                        <div className="desc text-slate-400">{description}</div>
                        <div className="price text-2xl text-red-500 font-semibold text0">
                          <span className="title">Price</span>
                          <span className="char">:</span>
                          <span className="number">
                            {convertNumberLocaleUS(price)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
          <div
            onClick={this.props.handleCloseDetailModal}
            className="overlay fixed top-0 left-0 w-screen h-screen pointer-events-auto bg-gray-500/40 z-[2]"
          ></div>
        </>
      );
    }
  }
}

let mapStateToProps = (state) => {
  return {
    currentShoe: state.shoeReducer.currentShoe,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleCloseDetailModal: () => {
      dispatch(closeDetailAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoeDetail);
