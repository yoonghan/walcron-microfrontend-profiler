import Contact from "./routes/contact";
import Basic from "./routes/basic";

const routes = [
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
