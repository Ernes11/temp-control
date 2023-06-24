// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { Auth0Provider } from "@auth0/auth0-react";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Auth0Provider
//     domain={domain}
//     clientID={clientID}
//     redirectUri={window.location.origin}
//   >
//     <App />
//   </Auth0Provider>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);