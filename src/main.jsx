import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./assets/Router/RootRouter";
import TimelineContextProvider from "./context/TimelineContextProvider/TimelineContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimelineContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </TimelineContextProvider>
  </StrictMode>,
);
