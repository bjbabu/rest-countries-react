import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import ErrorBoundary from "./components/ErrorBoundry";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ErrorBoundary fallback="There was an error"> */}
      <App />
      {/* </ErrorBoundary> */}
    </BrowserRouter>
  </React.StrictMode>
);
