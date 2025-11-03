import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import {FaGraduationCap,FaUserGraduate,FaUser} from "react-icons/fa";
import {ContextUser} from "../context/userContext";
const urls = [
  {
    name: "HOD",
    slug: "/manage-hods",
    icon:<FaUser/>
  },
  {
    name: "Teacher",
    slug: "/manage-teachers",
    icon: <FaUserGraduate />,
  },
  {
    name: "Student",
    slug: "/manage-students",
    icon: <FaGraduationCap />,
  }
];
const mp = new Map([
  ["admin",0],
  ["hod",1],
  ["teacher",2],
  ["student",3]
]);
const manageLayout = ({...props}) => {
  const {user}:any = ContextUser();
  const [userRole,setUserRole] = useState('student');
  useEffect(()=>{
    if(user.role) {
      setUserRole(user.role);
    }
  },[user.role]);
  return (
    <div className="flex lg:min-h-screen">
      <div className="min-h-[100%] p-5 hidden lg:w-100 shadow-lg lg:flex flex-col gap-5 text-center">
        <div className="text-3xl font-bold">Manage Users</div>
        <ul className="grid gap-5 text-xl ">
          {
            urls.slice(mp.get(userRole)).reverse().map(({icon,name,slug}:any)=>(
                  <li key={slug}><Link className="bg-orange-500 text-white rounded p-3 flex gap-3 items-center" to={`${slug}`}>{icon} {name}</Link></li>
            ))
          }
        </ul>
      </div>
      <div className="w-full">

      <Outlet />
      </div>
    </div>
  );
};

export default manageLayout;
