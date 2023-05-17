import React from "react";
import Cookies from "js-cookie";

import { Routes, Route, Navigate } from "react-router-dom";

import NotFound from "./components/404";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Layout from "./layout/Layout";

function App() {
  function LoginRoute(props) {
    if (Cookies.get("token") !== undefined) {
      return <Navigate to={"/"} />;
    } else if (Cookies.get("token") === undefined) {
      return props.children;
    }
  }

  const UserRoute = (props) => {
    if (Cookies.get("token") === undefined) {
      return <Navigate to={"/login"} />;
    }
    return props.children;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <UserRoute>
            <Layout>
              <Home />
            </Layout>
          </UserRoute>
        }
      />
      <Route
        path="/login"
        element={
          <LoginRoute>
            <Login />
          </LoginRoute>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
