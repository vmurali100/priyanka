import React from "react";
import About from "./About";
import "./App.css";
import Education from "./Education";
import Experience from "./Experience";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
