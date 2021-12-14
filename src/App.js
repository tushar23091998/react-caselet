import React, { Component } from "react";
import Navbar from "./pages/Shared/Navbar";
import Home from "./pages/Home/Home";
import CalendarOptimization from "./pages/CalendarOptimization/CalendarOptimization";
import PostEventAnalysis from "./pages/PostEventAnalysis/PostEventAnalysis";
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
