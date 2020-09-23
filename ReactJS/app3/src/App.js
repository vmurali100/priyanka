import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClickCounter from "./ClickCounter";
import HoverCount from "./HoverCount";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="Priyanka">
        <ClickCounter />
        <HoverCount />
      </UserProvider>
    </div>
  );
}

export default App;
