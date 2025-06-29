import { createBrowserRouter, RouterProvider } from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import HomeLayOut from "../pages/HomeLayOut/HomeLayOut";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut></HomeLayOut>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: AboutMe,
      },
    ],
  },
]);
