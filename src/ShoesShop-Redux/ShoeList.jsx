import React, { Component } from "react";
import { connect } from "react-redux";
import Shoe from "./Shoe";
class ShoeList extends Component {
  render() {
    let { shoeList } = this.props;
    let wrapperClassName = `
      column
    `;
    return (
      <div className="shoe__list">
        <div className="wrapper flex flex-wrap ">
          {shoeList.map((shoe, idx) => {
            return <Shoe key={shoe.id.toString() + idx} shoe={shoe} />;
          })}
        </div>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    shoeList: state.shoeReducer.shoeArr,
  };
};

export default connect(mapStateToProps)(ShoeList);
