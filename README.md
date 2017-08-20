# NeuroFYI
You don't need to understand how exactly a neural networks, just know what they can do.

This project uses full stack javascript to build neural networks under a web app wrapper.

## Dev Overview

* a lightweight webpack config (for development and production)
* some helpful tooling for development workflow
* production functionality
* Heroku-ready deployment setup

## Running

Install dependencies: `$ yarn`

Fire up a development server: `$ yarn run dev`

Once the server is running, you can visit `http://localhost:3000/`

* Note, you need to source a MONGODB_URI in the environment to your own MongoDB.

## File layout

- **Frontend React**
    - The top level application Container is in `frontend/components/App.js`
    - CSS styles are in `frontend/assets/stylesheets/`
- **Backend Express**
    - Entry point is `backend/server.js`
    - API routes are under `backend/routes/index.js`
    - API routes are served under `http://localhost:3000/api`

## Production Build

To build your production assets and run the server:

```
$ yarn start
```
