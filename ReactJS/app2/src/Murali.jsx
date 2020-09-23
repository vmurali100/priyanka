import React, { Component } from "react";
import { connect } from "react-redux";

class Murali extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.dispatch({ type: "MURALI" });
          }}
        >
          Get Murali Amount
        </button>
        <h1>Amount Received From Bank : {this.props.amount}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    amount: state.Mamount,
  };
};

export default connect(mapStateToProps)(Murali);
