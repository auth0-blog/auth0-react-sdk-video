import React from "react";
import { Button, Container } from "react-bootstrap";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loading } from "../components";

export const ExternalApi = () => {
  return (
    <Container className="mb-5">
      <h1>External API</h1>
      <p>
        You use will use a button to call an external API using an access token,
        and the API will validate it using the API's audience value.{" "}
        <strong>This route should be private</strong>.
      </p>

      <Button color="primary" className="mt-5">
        Ping API
      </Button>
    </Container>
  );
};

export default withAuthenticationRequired(ExternalApi, {
  onRedirecting: () => <Loading />,
});
