import React, { Component } from "react";

import { HocComponent } from "./HocComponent";
import { UserConsumer } from "./UserContext";
import { ClickChild } from "./ClickChild";

class ClickCounter extends Component {
  render() {
    let { clickCount, handleClickCount } = this.props;
    return (
      <div>
        <button onClick={handleClickCount}>Clicked {clickCount} times</button>
        <ClickChild />
      </div>
    );
  }
}

export default HocComponent(ClickCounter);
