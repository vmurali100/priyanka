import React, { Component } from "react";

export const HocComponent = (ActualComponent) => {
  class Sample extends Component {
    constructor(props) {
      super(props);

      this.state = {
        clickCount: 0,
        hoveredCount: 0,
      };
      console.log(props);
    }

    handleClickCount = () => {
      this.setState({ clickCount: this.state.clickCount + 1 });
    };
    hadleMouseHover = () => {
      this.setState({ hoveredCount: this.state.hoveredCount + 1 });
    };

    render() {
      return (
        <ActualComponent
          clickCount={this.state.clickCount}
          hoveredCount={this.state.hoveredCount}
          handleClickCount={this.handleClickCount}
          hadleMouseHover={this.hadleMouseHover}
        />
      );
    }
  }
  return Sample;
};
