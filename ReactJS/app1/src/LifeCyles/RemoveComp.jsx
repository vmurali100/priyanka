import React, { Component } from "react";

export default class RemoveComp extends Component {
  render() {
    return (
      <div>
        <h2>I am Going to Remove</h2>
      </div>
    );
  }
  componentWillUnmount() {
    console.log("componentWillUnmount will called");
  }
}
