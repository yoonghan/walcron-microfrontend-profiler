import Contact from "./routes/contact";
import Basic from "./routes/basic";
import { RouteObject } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import { NavigatorListener } from "./routes/navigatorListener";

type Props = {
  onSignIn: () => void;
  onSignOut: () => void;
};

const routes = (
  appName = "profiler",
  containerName = "container",
  errorElement = <ErrorPage />,
  props: Props = {
    onSignIn: () => {
      /* Do nothing */
    },
    onSignOut: () => {
      /* Do nothing */
    },
  }
): RouteObject => ({
  path: "/",
  element: (
    <NavigatorListener appName={appName} containerName={containerName}>
      <Root />
    </NavigatorListener>
  ),
  errorElement,
  children: [
    {
      path: "contacts/:contactId",
      element: <Contact />,
    },
    {
      path: "basic",
      element: <Basic />,
    },
    {
      path: "auth/login",
      element: <SignIn {...props} />,
    },
    {
      path: "auth/logout",
      element: <SignOut {...props} />,
    },
  ],
});

export default routes;
