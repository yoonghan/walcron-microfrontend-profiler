import About from "./routes/About";
import Root from "./routes/Root";
import ErrorPage from "./routes/ExtendedErrorPage";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import NavigatorListener from "./routes/NavigatorListener";
import { ReactNode } from "react";
import { RouteObject } from "react-router-dom";
import Profiler from "./components/Profile";

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
      path: "/",
      element: <About />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "profile",
      element: <Profiler />,
    },
    {
      path: "/auth",
      element: <About />,
      children: [
        {
          path: "login",
          element: <SignIn {...props} />,
        },
        {
          path: "logout",
          element: <SignOut {...props} redirect="/auth/login" />,
        },
      ],
    },
  ],
});

export default routes;
