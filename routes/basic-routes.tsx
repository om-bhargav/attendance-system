import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/Home";
import Login from "../pages/login";
import Signup from "../pages/signup";
import DownloadCredentials from "../components/user/download-credentials";
import MarkAttendance from "../components/user/mark-attendance";
import DownloadAttendance from "../components/download-attendance";
const basicRoutes = () => {
  return (
    <Fragment>
 
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="download-credentials/:type" element={<DownloadCredentials />}></Route>
        <Route path="mark-attendance/:type" element={<MarkAttendance />}></Route>
        <Route path="download-attendance" element={<DownloadAttendance />}></Route>
      </Route>
    </Fragment>
  );
};

export default basicRoutes;
