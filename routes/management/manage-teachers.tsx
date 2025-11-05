import React from "react";
import { Route } from "react-router-dom";
import ManageLayout from "../../components/manageLayout";
import Dashboard from "../../components/user/manage-teachers/dashboard";
import AddTeacher from "../../components/user/manage-teachers/add-teacher";
import MarkAttendance from "../../components/user/manage-teachers/mark-attendance";
const manageTeachers = (
    <Route
      element={<ManageLayout management="Teachers"  />}
    > 
      <Route path="manage-teachers" element={<Dashboard/>}></Route>
      <Route path="add-teacher" element={<AddTeacher/>}></Route>
      <Route path="mark-teacher-attendance" element={<MarkAttendance/>}></Route>
    </Route>
  );

export default manageTeachers;
 