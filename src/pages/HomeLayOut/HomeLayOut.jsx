import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar";
import Footer from "../Footer";

function HomeLayOut() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default HomeLayOut;
