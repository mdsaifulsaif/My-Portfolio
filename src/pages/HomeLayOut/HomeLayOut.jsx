import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar";
import Footer from "../Footer";

function HomeLayOut() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default HomeLayOut;
