import React, { Component } from "react";
import Address from "./Address";

export default class Priya1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myName: "Priyanka",
      city: "Bangalore",
      area: "Whitefield",
      pin: 560066,
    };
  }

  render() {
    return (
      <div>
        <Address myAddress={this.state} />
      </div>
    );
  }
}
