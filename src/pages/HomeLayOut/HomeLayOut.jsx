import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar";
import Footer from "../Footer";

function HomeLayOut() {
  const [theme, setThem] = useState(true);

  return (
    <div className={` ${theme ? "" : "dark"}  dark:bg-white `}>
      <Navbar setThem={setThem} theme={theme}></Navbar>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
}

export default HomeLayOut;
