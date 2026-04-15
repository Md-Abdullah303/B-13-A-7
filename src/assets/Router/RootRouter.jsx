import { createBrowserRouter } from "react-router";
import Layout from "../../leyout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import TimeLine from "../pages/TimeLine/TimeLine";
import StatusPage from "../pages/Status/StatusPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
        {index: true, Component: HomePage},
        {path: '/home', Component: HomePage},
        {path: '/timeline', Component: TimeLine},
        {path: '/stats', Component: StatusPage}
    ],
    errorElement: <h1>eror page 404 go back</h1>
  },
]);
