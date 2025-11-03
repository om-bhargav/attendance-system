import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import HODDashboard from "../pages/u/hod/dashboard";
import Settings from "../pages/u/settings";
import UserLayout from "../components/user/userLayout";
import ManageStudents from "../routes/management/manage-students";
import ManageTeachers from "./management/manage-teachers";
import ViewAttendance from "../components/user/view-attendance";
import MarkAttendance from "../components/user/mark-attendance";
const hodRoutes = (
  <Fragment>
    <Route element={<UserLayout />}>
      <Route path="dashboard" element={<HODDashboard />}></Route>
      <Route path="settings" element={<Settings />}></Route>
      <Route path="view-attendance/:id" element={<ViewAttendance />}></Route>
      <Route path="mark-attendance/:type" element={<MarkAttendance />}></Route>
      {ManageStudents}
      {ManageTeachers}
    </Route>
  </Fragment>
);

export default hodRoutes;
