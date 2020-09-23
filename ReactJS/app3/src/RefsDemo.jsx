import React, { Component } from "react";

export default class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.inputRef = React.createRef();
  }

  handleClick = () => {
    console.log(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <h2>Hello From Refs</h2>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleClick}>Get Value</button>
      </div>
    );
  }
  componentDidMount() {
    console.log(this.inputRef);
  }
}
