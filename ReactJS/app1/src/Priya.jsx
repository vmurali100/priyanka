import React, { Component } from "react";
import Address from "./Address";

class Priya extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myName: "Murali",
      city: "Bangalore",
      area: "Whitefield",
      pin: 560066,
    };
    // this.changeCity = this.changeCity.bind(this);
  }

  // changeCity = () => {
  //   this.setState({ city: "Chennai" });
  // };

  changeCity() {
    this.setState({ city: "Chennai" });
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.changeCity();
          }}
        >
          Change City
        </button>

        <h2>Hello From Class Component - {this.state.myName}</h2>
        <Address myAddress={this.state} />
      </div>
    );
  }
}

export default Priya;
