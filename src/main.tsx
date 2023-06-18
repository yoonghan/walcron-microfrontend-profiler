import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import routes from "./appRoutes";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import reportWebVitals from "./webvital/reportWebVitals";
import consoleReportHandler from "./webvital/consoleReportHandler";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: routes,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

//Change to google analytics once ready
reportWebVitals(consoleReportHandler);
