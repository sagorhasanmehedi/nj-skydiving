import "bootstrap/dist/css/bootstrap.min.css";
import { createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Course from "./components/Course/Course";
import Chart from "./components/Chart/Chart";
import Notfound from "./components/Notfound/Notfound";
import Footer from "./components/Footer/Footer";

import "./App.css";
import Header from "./components/Header/Header";

const testcontext = createContext();

function App() {
  return (
    <div className="App">
      <testcontext.Provider value={"hellow world"}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/course">
              <Course />
            </Route>
            <Route exact path="/chart">
              <Chart />
            </Route>
            <Route exact path="*">
              <Notfound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </testcontext.Provider>
    </div>
  );
}

export default App;
