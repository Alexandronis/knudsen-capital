import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "./style/main.scss";

import Header from "./components/layout/header";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Portfolio from "./components/pages/portfolio";
import Contact from "./components/pages/Contact";
import ClientPage from "./components/layout/clientPage";
import NotFoundPage from "./components/templates/404";
import CharitableContributions from "./components/pages/CharitableContributions";

function App() {
  return (
    <div className="App">
      <Route
        path={"(.+)"}
        render={() => (
          <>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/client-page" component={ClientPage} />
              <Route exact path="/charitable-contributions" component={CharitableContributions} />
              <Route component={NotFoundPage} />
            </Switch>
          </>
        )}
      />
    </div>
  );
}

export default App;
