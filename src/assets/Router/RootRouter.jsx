import { createBrowserRouter } from "react-router";
import Layout from "../../leyout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import TimeLine from "../pages/TimeLine/TimeLine";
import StatusPage from "../pages/Status/StatusPage";
import FriendDetails from "../pages/FriendDetails/FriendDetails";
import ErorPage from "../pages/ErorPage/ErorPage";
import ErrorFriendFound from "../pages/ErrorFriendFound/ErrorFriendFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { index: true, Component: HomePage },
      { path: "/home", Component: HomePage },
      { path: "/timeline", Component: TimeLine },
      { path: "/stats", Component: StatusPage },
      { 
        path: "/profile/:id", 
        Component: FriendDetails,
        loader: ()=> fetch('/data.json'),
        errorElement: ErrorFriendFound,
    },
    ],
    errorElement: <ErorPage></ErorPage>,
  },
]);
