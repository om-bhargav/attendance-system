import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextUser } from "../../context/userContext";
import ViewStudentAttendance from "./view-student-attendance";
import ViewOthersAttendance from "./view-others-attendance";
import SectionLoading from "../SectionLoading";
import useFetchUser from "../custom/useFetchUser";
const viewAttendance = () => {
  const { id } = useParams();
  const [user,setUser,loaded,setLoaded] = useFetchUser(id as string);
  return (
    <>
    <title>Attendance Status</title>
      <div className="max-w-[1200px] flex-1 gap-2 flex flex-col md:shadow-lg rounded mx-auto container my-12 p-5">
        
        <div className="w-full px-12 mx-auto flex flex-col gap-4 items-center justify-center text-center">
          <div className="text-2xl font-bold capitalize">Attendance Status Of {user.name || "Loading..."}</div>
        { loaded ? user.role === "student" ? (
            <ViewStudentAttendance id={id} user={user} loaded={loaded} />
          ) : (
            <ViewOthersAttendance id={id} user={user} loaded={loaded} />
          ):<SectionLoading/>
        }
        </div>
      </div>
    </>
  );
};

export default viewAttendance;
