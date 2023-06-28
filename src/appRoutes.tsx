import Contact from "./routes/contact";
import Basic from "./routes/basic";
import { RouteObject } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";

const routes = (path: string, errorElement = <ErrorPage />): RouteObject => ({
  path,
  element: <Root />,
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
  ],
});

export default routes;
