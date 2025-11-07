import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContextUser } from "../../context/userContext";
function userNavbar() {
  const { user }: any = ContextUser();
  return (
    <div className="shadow py-2 px-4 flex justify-between items-center sticky top-0 bg-white">
      <h1 className="text-3xl font-bold">
        <span className="text-orange-500 text-4xl">P</span>RESENTIFY
      </h1>
      <ul className="hidden md:flex gap-8">
        <li>
          <Link
            className="border-orange-500 hover:border-b-3 duration-100 outline-none"
            to="/dashboard"
          >
            Home
          </Link>
        </li>
        {user.role !== "student" && (
          <li>
            <Link
              className="border-orange-500 hover:border-b-3 duration-100 outline-none"
              to="/manage-students"
            >
              Users
            </Link>
          </li>
        )}
        {user.role === "director" && (
          <Fragment>
            <li>
              <Link
                className="border-orange-500 hover:border-b-3 duration-100 outline-none"
                to="/manage-calander"
              >
                Calender
              </Link>
            </li>
            <li>
              <Link
                className="border-orange-500 hover:border-b-3 duration-100 outline-none"
                to="/manage-departments"
              >
                Groups
              </Link>
            </li>
          </Fragment>
        )}
        <li>
          <Link
            className="border-orange-500 hover:border-b-3 duration-100 outline-none"
            to="/settings"
          >
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default userNavbar;
