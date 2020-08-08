import React, { Component } from "react";
import "./myStyle.css";
import "./normalStyle.css";
import styles from "./styles.module.css";
export default class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props);
  }

  render() {
    let { myName, area, city, pin } = this.props.myAddress; // Destructuring
    let myClass = this.props.applyClass ? "primary" : "";
    return (
      // <div style={this.props.myStyleInfo}>
      //   <p className="error">Name :{myName}</p>
      //   <p>Area: {area}</p>
      //   <p>City :{city}</p>
      //   <p>Pin:{pin}</p>
      // </div>
      <div>
        <h3 className={styles.success}>Hello from comp</h3>
      </div>
    );
  }
}
