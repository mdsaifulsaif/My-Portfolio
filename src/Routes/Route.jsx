import { createBrowserRouter, RouterProvider } from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import HomeLayOut from "../pages/HomeLayOut/HomeLayOut";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut></HomeLayOut>,
    children: [
      {
        path: "/",
        Component: Home,
      },
    ],
  },
]);
