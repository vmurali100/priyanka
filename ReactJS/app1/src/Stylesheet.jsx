import React, { useState } from "react";
import "./myStyle.css";
import Address from "./Address";

export default function Stylesheet() {
  let [address, setAddress] = useState({
    myName: "Priyanka From Murali",
    city: "Bangalore",
    area: "Whitefield",
    pin: 560066,
  });

  let styleInfo = {
    color: "red",
    background: "pink",
  };
  return (
    <div>
      <h2 style={styleInfo}>Hello from Stylesheet</h2>
      <Address myAddress={address} applyClass={true} myStyleInfo={styleInfo} />
    </div>
  );
}
