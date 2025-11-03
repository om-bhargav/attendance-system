import { Route } from "react-router-dom";
import DirectorDashboard from "../pages/u/director/dashboard";
import ManageCalander from "../pages/u/director/manage-calander";
import { Fragment } from "react/jsx-runtime";
import UserLayout from "../components/user/userLayout";
import Settings from "../pages/u/settings";
import ManageStudents from "../routes/management/manage-students";
import ManageDepartments from "../routes/management/manage-departments";
import ManageTeachers from "./management/manage-teachers";
import ManageHOD from "./management/manage-hod";
import ViewAttendance from "../components/user/view-attendance";
import MarkAttendance from "../components/user/mark-attendance";
const directorRoutes = (
  <Fragment>
    <Route element={<UserLayout />}>
      <Route path="dashboard" element={<DirectorDashboard />}></Route>
      <Route path="manage-calander" element={<ManageCalander />}></Route>
      <Route path="view-attendance/:id" element={<ViewAttendance />}></Route>
      <Route path="settings" element={<Settings />}></Route>
      <Route path="mark-attendance/:type" element={<MarkAttendance />}></Route>
      {ManageStudents}
      {ManageDepartments}
      {ManageTeachers}
      {ManageHOD}
    </Route>
  </Fragment>
);

export default directorRoutes;
