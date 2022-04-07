import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline } from "@mui/material";

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline/>  
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
