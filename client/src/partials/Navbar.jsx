import React, { useContext } from "react";
import Cookies from "js-cookie";
import { Navbar, Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

import { GlobalContext } from "../context/GlobalContext";

export default function Nav() {
  const navigate = useNavigate();
  const { state } = useContext(GlobalContext);
  const { userLogin } = state;
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Guest Page
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button
          className="mx-2"
          onClick={() => {
            navigate("/register");
          }}
        >
          Register
        </Button>
        {Cookies.get("token") ? (
          <Button
            onClick={() => {
              Cookies.remove("token");
              navigate("/login");
            }}
          >
            Logout
          </Button>
        ) : (
          <Button
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href={userLogin?.role === "admin" ? "/admin" : "/"}>
          Home
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
