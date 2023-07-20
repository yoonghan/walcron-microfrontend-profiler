import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./appRoutes";
import reportWebVitals from "./webvital/reportWebVitals";
import consoleReportHandler from "./webvital/consoleReportHandler";
import {
  AuthenticationConsumer,
  AuthenticationProvider,
} from "./context/authentication";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthenticationProvider>
      <AuthenticationConsumer>
        {({ onSignIn, onSignOut }) => (
          <RouterProvider
            router={createBrowserRouter([
              routes({
                props: {
                  onSignIn,
                  onSignOut,
                },
              }),
            ])}
          />
        )}
      </AuthenticationConsumer>
    </AuthenticationProvider>
  </React.StrictMode>
);

//Change to google analytics once ready
reportWebVitals(consoleReportHandler);
