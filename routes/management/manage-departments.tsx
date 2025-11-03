import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import ManageDepartments from "../../components/user/manage-departments/manageDepartments";
import AddDepartment from "../../components/user/manage-departments/addDepartment";
import EditDepartment from "../../components/user/manage-departments/editDepartment";
const manageDepartments = (
  <Fragment>
    <Route path="manage-departments" element={<ManageDepartments />}></Route>
    <Route path="add-department" element={<AddDepartment />}></Route>
    <Route path="edit-department/:id" element={<EditDepartment />}></Route>
  </Fragment>
  );
 
export default manageDepartments;
