import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/Home";
import Login from "../pages/login";
import Signup from "../pages/signup";
const basicRoutes = () => {
  return (
    <Fragment>
 
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
      </Route>
    </Fragment>
  );
};

export default basicRoutes;
