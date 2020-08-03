import React, { Component } from "react";

export default class Child extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.changeFunc();
          }}
        >
          Change Text
        </button>
      </div>
    );
  }
}
