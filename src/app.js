import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./components/nav-bar";
import Footer from "./components/footer";
import Home from "./views/home";
import Profile from "./views/profile";
import ExternalApi from "./views/external-api";

import { Container } from "react-bootstrap";

import "./app.css";

const App = () => {
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/external-api" component={ExternalApi} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
