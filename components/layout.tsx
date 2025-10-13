import React from "react";
import BasicHeader from "../components/BasicHeader";
import BasicFooter from "../components/BasicFooter";
import { Outlet } from "react-router-dom";
const layout = () => {
  return (
    <div className="flex flex-col gap-10 min-h-screen">
      <BasicHeader />
      <Outlet />
      <BasicFooter />
    </div>
  );
};

export default layout;
