import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import TeacherDashboard from "../pages/u/teacher/dashboard";
import Settings from "../pages/u/settings";
import UserLayout from "../components/user/userLayout";
import ManageStudents from "../routes/management/manage-students";
import ViewAttendance from "../components/user/view-attendance";
import MarkAttendance from "../components/user/mark-attendance";
const teacherRoutes = (
  <Route element={<UserLayout />}>
    <Route path="dashboard" element={<TeacherDashboard />}></Route>
    <Route path="settings" element={<Settings />}></Route>
    <Route path="view-attendance/:id" element={<ViewAttendance />}></Route>
    <Route path="mark-attendance/:type" element={<MarkAttendance />}></Route>
    {ManageStudents}
  </Route>
);

export default teacherRoutes;
