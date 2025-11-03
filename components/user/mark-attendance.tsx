import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
const markAttendance = () => {
  const [course,setCourse] = useState("");
  const [subject,setSubject] = useState("");
  return (
    <div className="max-w-[1200px] gap-2 flex flex-col items-center md:shadow-lg rounded mx-auto container my-12 p-5">
      <div className="text-2xl font-bold">Mark Attendance</div>
     
    </div>
  );
}

export default markAttendance