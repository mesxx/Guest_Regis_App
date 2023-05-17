import React from "react";
import Navbar from "../partials/Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default Layout;
