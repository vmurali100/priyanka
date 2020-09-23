import React, { Component } from "react";
import { connect } from "react-redux";
import { getPriyankaAmount } from "./actions";

class Priyanka extends Component {
  render() {
    return (
      <div>
        <h2>I am From Priyanka</h2>
        <button
          onClick={() => {
            this.props.dispatch(getPriyankaAmount());
          }}
        >
          Get Priyanka Amount
        </button>
        <h2>Amount Received From Bank : {this.props.amount}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    amount: state.Pamount,
  };
};

export default connect(mapStateToProps)(Priyanka);
