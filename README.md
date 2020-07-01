# Easy User Authentication for React Apps

## Set Up React Application

Install project dependencies:

```bash
yarn
```

Create a `.env` file under the project directory:

```bash
touch .env
```

Populate `.env` with the following:

```bash
REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
```

From your Auth0 application settings, use the **Domain** value for the value of `REACT_APP_AUTH0_DOMAIN` and the **Client ID** value for the value of `REACT_APP_AUTH0_CLIENT_ID`.

Run the project:

```bash
yarn start
```

## Set Up API Server Demo

Create `.env` for the API Server under `src/server`:

```bash
touch src/server/.env
```

Populate `src/server/.env` as follows:

```bash
API_PORT=7000
APP_ORIGIN=http://localhost:3000
AUTH0_AUDIENCE=
AUTH0_ISSUER=
```

Get values for `AUTH0_AUDIENCE` and `AUTH0_ISSUER` from code snippet at:

**Auth0 Dashboard > APIs > Your API > Quick Start > Node.js > `jwt`**

Run the API server:

```bash
node src/server/api-server.js
```

Add `audience` to the .env of the React client located under the project directory:

```bash
REACT_APP_AUTH0_DOMAIN=YOUR-AUTH0-DOMAIN
REACT_APP_AUTH0_CLIENT_ID=YOUR-AUTH0-APP-CLIENT-ID
REACT_APP_AUDIENCE=YOUR-AUTH0-API-AUDIENCE
```

The value of `REACT_APP_AUDIENCE` is the same value of `AUTH0_AUDIENCE` from `src/server/.env`.