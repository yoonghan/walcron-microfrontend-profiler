import "./index.css";
import reportWebVitals from "./webvital/reportWebVitals";
import consoleReportHandler from "./webvital/consoleReportHandler";
import mount from "./mount";

mount(document.getElementById("root") as HTMLElement, true);

//Change to google analytics once ready
reportWebVitals(consoleReportHandler);
