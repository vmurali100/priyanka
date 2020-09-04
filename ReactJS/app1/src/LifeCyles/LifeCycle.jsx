import React, { Component } from "react";
import RemoveComp from "./RemoveComp";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 10,
      isShow: true,
    };
    console.log("constructor method called");
    // this.changeCount = this.changeCount.bind(this);
  }
  //   changeCount() {
  //     this.setState({ count: 15 });
  //   }

  changeCount = () => {
    this.setState({ count: 15 });
  };
  removeComponent = () => {
    this.setState({ isShow: false });
  };
  render() {
    console.log("render method called");

    return (
      <div>
        <button onClick={this.changeCount}>Change Count</button>

        <h2>{this.state.count}</h2>
        <button onClick={this.removeComponent}>Remove Component</button>
        {this.state.isShow && <RemoveComp />}
      </div>
    );
  }
  componentWillUnmount() {
    console.log("componentWillUnmount called");
  }
  componentWillUpdate() {
    console.log("componentWillUpdate called");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }

  componentDidMount() {
    console.log("componentDidMount method called");
  }
}
