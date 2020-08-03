import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Hello From Parent",
      showImage: false,
    };
  }

  changeText = () => {
    this.setState({
      title: "I am Changed From Child",
      showImage: !this.state.showImage,
    });
  };
  render() {
    return (
      <div>
        {this.state.showImage && (
          <img
            src="https://static.wixstatic.com/media/fb0bbe_d673da7867224136bd9336035fa17db3~mv2.jpg/v1/fill/w_1024,h_364,al_c,q_85,usm_0.66_1.00_0.01/Bangalore%20to%20Chennai%20One%20Way%20Taxi.webp"
            alt=""
          />
        )}
        <h1>{this.state.title}</h1>
        <Child changeFunc={this.changeText} />
      </div>
    );
  }
}
