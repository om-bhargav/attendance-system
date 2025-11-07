import React,{useState,useEffect} from 'react'
import useFetchUsers from "../custom/useFetchUsers";
import useFetchDepartments from "../custom/useFetchDepartment";
import { ContextUser } from "../../context/userContext";
import MarkAttendanceTable from "../MarkAttendanceTable";
import SubmitButton from "../SubmitButton";
import { db } from "../../src/firebase";
import Calender from "../calender";
import toast from "react-hot-toast";
const viewStudentAttendance = ({id,user,loaded}:any) => {
  const { user:c_user }: any = ContextUser();
  const [departments, setDepartments, departmentsLoaded, setDepartmentsLoaded] = useFetchDepartments(user.college_id);
  const [subject, setSubject] = useState("default");
  const [subjets,setSubjects] = useState([]);
  const [clicked,setClicked] = useState(false);
  const [attended,setAttended] = useState([]);
  const [attendanceAnalysis,setAttendanceAnalysis] = useState({
    lectures_delivered:0,
    attended:0,
    percentage:0
  });
    useEffect(()=>{
        if(user.group && departments.length>0){
            const filtered_data = departments.filter((item:any)=>item.id===user.group)[0];
            setSubjects(filtered_data.subjects);
        }
    },[user.group,departments]);
    const showAttendance = () => {
        if(clicked===false) setClicked(true);
        const filtered_data = departments.filter((item:any)=>item.id===user.group)[0];
        const sub = filtered_data.subjects.filter((item:any)=>item.id===subject)[0];
        const aten = sub?.attendance?.length || 0;
        const attendance = JSON.parse(user.attendance)[subject];
        const attendance_length = attendance?.length || 0;
        setAttendanceAnalysis({lectures_delivered:aten,attended:attendance_length,percentage:aten===0 ? 0:((attendance_length/aten)*100)});
        setAttended(attendance);
        toast.success("Attendance Calender Updated!");
    };
    return (
    <>
      <title>View Students Attendance</title>
        <div className="grid md:grid-cols-2 gap-5 w-full my-5">
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="outline-none p-3 border border-gray-500 rounded"
          >
            <option value="default">Select Subject</option>
            {
              subjets.map((item:any)=>{
                return <option key={item.id} value={item.id}>{item.value}</option>
              })
            }
          </select>
          <button disabled={subject==="default"} type="button" onClick={showAttendance}>Show Attendance</button>
        </div>
        {
            clicked && <div className="w-full gap-5 rounded grid lg:grid-cols-3">
        {[...Array.from(Array(12))].map((e, i) => (
          <Calender
            key={i}
            holidays={attended}
            month_index={i}
          />
        ))}
      </div>
      }
      {
        clicked && subject!=="default" && <div className='w-full grid md:grid-cols-3 text-center gap-5 my-5'>
        <div className='text-lg'><div className='font-semibold'>Lectures Delivered:</div><div>{attendanceAnalysis.lectures_delivered}</div></div>
        <div className='text-lg'><div className='font-semibold'>Lectures Attended:</div><div>{attendanceAnalysis.attended}</div></div>
        <div className='text-lg'><div className='font-semibold'>Attendance Percentage:</div><div>{attendanceAnalysis.percentage}%</div></div>
      </div>
    }
    </>)
}

export default viewStudentAttendance