import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClickCounter from "./ClickCounter";
import HoverCount from "./HoverCount";
import { UserProvider } from "./UserContext";
import { Murali, Narendra } from "./Narendra";

function App() {
  return (
    <div className="App">
      <UserProvider value="Priyanka">
        {/* <ClickCounter />
        <HoverCount /> */}
        <Murali />
        <Narendra />
      </UserProvider>
    </div>
  );
}

export default App;
