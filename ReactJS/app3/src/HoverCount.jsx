import React, { Component } from "react";
import { HocComponent } from "./HocComponent";
import RefsDemo from "./RefsDemo";

class HoverCount extends Component {
  render() {
    let { hoveredCount, hadleMouseHover } = this.props;
    return (
      <div>
        <h1 onMouseOver={hadleMouseHover}>Hovered {hoveredCount} times</h1>
        <RefsDemo />
      </div>
    );
  }
}

export default HocComponent(HoverCount);
