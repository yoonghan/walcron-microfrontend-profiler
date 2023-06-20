import Contact from "./routes/contact";
import Basic from "./routes/basic";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
  {
    path: "basic",
    element: <Basic />,
  },
];

export default routes;
