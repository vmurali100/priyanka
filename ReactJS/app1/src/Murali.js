import React, { useState } from "react";
import Priya from "./Priya";
import Address from "./Address";

// function Murali() {
//   let [address, setAddress] = useState({}); //Hooks

//   return (
//     <div>
//       <h1>Hello From - {}</h1>
//       <Address myAddress={address} />
//     </div>
//   );
// }
const Murali = () => {
  let [address, setAddress] = useState({
    myName: "Priyanka From Murali",
    city: "Bangalore",
    area: "Whitefield",
    pin: 560066,
  }); //Hooks

  return (
    <div>
      <button
        onClick={() => {
          setAddress({
            ...address,
            area: "Chennasandra",
            city: "Chennai",
            pin: 560026,
          });
        }}
      >
        Change NAME
      </button>

      <h2>Murali Component With Return</h2>
      <Address myAddress={address} />
    </div>
  );
};
// const Murali = () => <h2>Murali Component Without Return</h2>;

export default Murali;
