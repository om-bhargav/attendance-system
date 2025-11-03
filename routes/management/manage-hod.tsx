import React from "react";
import ManageLayout from "../../components/manageLayout";
import { Route } from "react-router-dom";
import Dashboard from "../../components/user/manage-hods/dashboard";
import AddHOD from "../../components/user/manage-hods/add-hod";
const manageHod =(
    <Route
      element={<ManageLayout management="HOD's"/>}
    > 
      <Route path="manage-hods" element={<Dashboard/>}></Route>
      <Route path="add-hod" element={<AddHOD/>}></Route>
    </Route> 
  );

export default manageHod;
