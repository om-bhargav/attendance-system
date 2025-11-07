import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import StudentDashboard from "../pages/u/student/dashboard";
import Settings from "../pages/u/settings";
import UserLayout from "../components/user/userLayout";
import ViewAttendance from "../components/user/view-attendance";
import MarkAttendance from "../components/user/mark-attendance";
const studentRoutes = (
  <Fragment>
    <Route element={<UserLayout />}>
      <Route path="dashboard" element={<StudentDashboard />}></Route>
      <Route path="settings" element={<Settings />}></Route>
      <Route path="view-attendance/:id" element={<ViewAttendance />}></Route>
    </Route>
  </Fragment>
);

export default studentRoutes;
