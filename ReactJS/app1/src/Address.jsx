import React, { Component } from "react";

export default class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { myName, area, city, pin } = this.props.myAddress; // Destructuring
    return (
      <div>
        <p>Name :{myName}</p>
        <p>Area: {area}</p>
        <p>City :{city}</p>
        <p>Pin:{pin}</p>
      </div>
    );
  }
}
