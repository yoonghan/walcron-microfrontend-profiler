import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./webvital/reportWebVitals";
import consoleReportHandler from "./webvital/consoleReportHandler";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Change to google analytics once ready
reportWebVitals(consoleReportHandler);
