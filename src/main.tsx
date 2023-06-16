import { mount } from "./bootstrap";
import reportWebVitals from "./webvital/reportWebVitals";
import consoleReportHandler from "./webvital/consoleReportHandler";

mount(document.getElementById("root") as HTMLElement);
//Change to google analytics once ready
reportWebVitals(consoleReportHandler);
