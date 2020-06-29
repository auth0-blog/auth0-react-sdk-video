import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">React.js Sample Project</h1>

    <p className="lead">
      This is a sample application that demonstrates an authentication flow for
      an SPA, using{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://auth0.com/docs/quickstart/spa/react"
      >
        React.js
      </a>
    </p>
  </div>
);

export default Hero;
