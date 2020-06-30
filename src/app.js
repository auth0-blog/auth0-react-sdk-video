import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./components/nav-bar";
import Footer from "./components/footer";
import Home from "./views/home";
import Profile from "./views/profile";
import ExternalApi from "./views/external-api";

import { Container } from "react-bootstrap";

import "./app.css";

import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/loading";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

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
