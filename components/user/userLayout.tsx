import React from "react";
import UserNavbar from "./userNavbar";
import UserFooter from "./userFooter";
import { Outlet } from "react-router-dom";
function userLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <UserNavbar />
      <div className="flex-grow-1">
        <Outlet />
      </div>
      <UserFooter />
    </div>
  );
}

export default userLayout;
