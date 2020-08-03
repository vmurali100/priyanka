import React, { Component } from "react";

export default class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>Name :{this.props.myAddress.myName}</p>
        <p>Area: {this.props.myAddress.area}</p>
        <p>City :{this.props.myAddress.city}</p>
        <p>Pin:{this.props.myAddress.pin}</p>
      </div>
    );
  }
}
