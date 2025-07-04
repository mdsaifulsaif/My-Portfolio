import { createBrowserRouter, RouterProvider } from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import HomeLayOut from "../pages/HomeLayOut/HomeLayOut";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import ProjectDetails from "../pages/ProjectDetails";
import Projects from "../pages/Projects";
import Footer from "../pages/Footer";
import SkillsSection from "../pages/SkillsSection";
import ContactForm from "../pages/ContactForm";

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
      {
        path: "/projects",
        Component: Projects,
      },
      {
        path: "/skills",
        Component: SkillsSection,
      },

      {
        path: "/project/:id",
        Component: ProjectDetails,
      },

      {
        path: "/contact",
        Component: ContactForm,
      },
    ],
  },
]);
