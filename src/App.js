import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CalendarOptimization from "./components/CalendarOptimization";
import PostEventAnalysis from "./components/PostEventAnalysis";
import { Route, BrowserRouter, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact from="/" render={(props) => <Home {...props} />} />
            <Route
              exact
              path="/calendaroptimization"
              render={(props) => <CalendarOptimization {...props} />}
            />
            <Route
              exact
              path="/posteventanalysis"
              render={(props) => <PostEventAnalysis {...props} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
