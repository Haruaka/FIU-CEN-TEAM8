import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/index.css";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="body">
            <NavBar />
            <Switch>
              <Route path="/login" exact strict component={Login} />
              <Route path="/body" exact component={Body} />
            </Switch>
            {/* <Body /> */}
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
