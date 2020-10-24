const { Navbar } = require("./Navbar");
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Router>
    </div>
  );
}

export default App;
