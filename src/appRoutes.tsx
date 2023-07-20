import About from "./routes/About";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import NavigatorListener from "./routes/NavigatorListener";
import { ReactNode } from "react";
import { RouteObject } from "react-router-dom";

type Props = {
  onSignIn: () => void;
  onSignOut: () => void;
};

const routes = ({
  appName = "profiler",
  containerName = "container",
  errorElement = <ErrorPage />,
  props,
}: {
  appName?: string;
  containerName?: string;
  errorElement?: ReactNode;
  props: Props;
}): RouteObject => ({
  path: "/",
  element: (
    <NavigatorListener appName={appName} containerName={containerName}>
      <Root />
    </NavigatorListener>
  ),
  errorElement,
  children: [
    {
      path: "about",
      element: <About />,
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
