import { Navigate, Outlet } from "react-router-dom";
import { ContextUser } from "../context/userContext";
const ProtectedRoutes = () => {
  const { isLoggedIn }: any = ContextUser();
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  return <Outlet/>
};

export default ProtectedRoutes;
