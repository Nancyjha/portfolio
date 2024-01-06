import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
 import Skillsection from "./Skillsection"
 import Portfoliosection from "./Portfoliosection"
 import Contactform from "./Contactform"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
  path: "contact",
  element: <Contactform/>,
  },
  {
    path: "portfolio",
    element: <Portfoliosection />,
  },
  {
    path: "skill",
    element: <Skillsection />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);