import React from "react";
import { Route } from "react-router-dom";
import ManageLayout from "../../components/manageLayout";
import Dashboard from "../../components/user/manage-teachers/dashboard";
import AddTeacher from "../../components/user/manage-teachers/add-teacher";
const manageTeachers = (
    <Route
      element={<ManageLayout management="Teachers"  />}
    > 
      <Route path="manage-teachers" element={<Dashboard/>}></Route>
      <Route path="add-teacher" element={<AddTeacher/>}></Route>
    </Route>
  );

export default manageTeachers;
 