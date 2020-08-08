import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Priyanka from "./Priyanka";
import Priya from "./Priya";
import Parent from "./Parent";
import List from "./List";
import Stylesheet from "./Stylesheet";
import Form1 from "./Forms/Form1";

ReactDOM.render(
  <React.StrictMode>
    <Form1 />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
