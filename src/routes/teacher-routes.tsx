import { Route } from "react-router-dom";
import MarkAttendance from "../components/user/mark-attendance";
import UserLayout from "../components/user/userLayout";
import ViewAttendance from "../components/user/view-attendance";
import Settings from "../pages/u/settings";
import TeacherDashboard from "../pages/u/teacher/dashboard";
import ManageStudents from "./management/manage-students";
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
