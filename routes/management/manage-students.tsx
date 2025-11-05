import React from "react";
import { Route } from "react-router-dom";
import ManageLayout from "../../components/manageLayout";
import Dashboard from "../../components/user/manage-students/dashboard";
import AddStudent from "../../components/user/manage-students/add-student";
import MarkAttendance from "../../components/user/manage-students/mark-attendance";
const manageStudents = (
    <Route
      element={<ManageLayout management="Students"/>}
    >
      <Route path="manage-students" element={<Dashboard/>}></Route>
      <Route path="add-student" element={<AddStudent/>}></Route>
      <Route path="mark-student-attendance" element={<MarkAttendance/>}></Route>
    </Route>
  ); 

export default manageStudents;
