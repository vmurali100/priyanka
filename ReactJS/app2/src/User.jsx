import React, { Component } from "react";
import { connect } from "react-redux";

class User extends Component {
  render() {
    console.log(this.props);
    return <div></div>;
  }
}

// To Receive a State and Create an Object
const mapStateToProps = (state) => {
  return {
    details: state,
  };
};

export default connect(mapStateToProps, {})(User);
