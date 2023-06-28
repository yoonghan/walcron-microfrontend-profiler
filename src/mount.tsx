import * as ReactDOM from "react-dom/client";
import {
  //   createBrowserRouter,
  createMemoryRouter,
  RouterProvider,
} from "react-router-dom";
// import routes from "./appRoutes";
// import Root from "./routes/root";
// import ErrorPage from "./error-page";

function mount(element: HTMLElement, development = false) {
  console.log(development);
  const router = createMemoryRouter([
    {
      path: "/",
      element: <div>Hi</div>,
      children: [],
    },
  ]);

  ReactDOM.createRoot(element).render(<RouterProvider router={router} />);
}

export default mount;
