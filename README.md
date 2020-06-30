# Easy User Authentication for React Apps

## Get Started

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