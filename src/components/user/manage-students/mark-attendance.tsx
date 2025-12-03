import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ContextUser } from "../../../context/userContext";
import { db } from "../../../firebase";
import useFetchDepartments from "../../custom/useFetchDepartment";
import useFetchUsers from "../../custom/useFetchUsers";
import MarkAttendanceTable from "../../MarkAttendanceTable";
import SubmitButton from "../../SubmitButton";
const markAttendance = () => {
  const { user }: any = ContextUser();
  const [users, setUsers, usersLoaded, setUsersLoaded] =
    useFetchUsers("student");
  const [departments, setDepartments, departmentsLoaded, setDepartmentsLoaded] =
    useFetchDepartments(user.college_id);
  const [displayedStudents,setDisplayedStudents] = useState(users);
  const [group, setGroup] = useState("default");
  const [subject, setSubject] = useState("default");
  const [subjets,setSubjects] = useState([]);
  const attendanceHandler = async (form_data:FormData) => {
    const attendance_data = Object.fromEntries(form_data);
    const size = Object.keys(attendance_data).length/2;
    const date = (new Date()).toLocaleDateString().replaceAll("/","-");
    let response:any = (await getDoc(doc(db,"departments",user.id))).data();
    console.log(response);
    // const dep = response.departments.findIndex((item:any)=>item.id===group);
    // const sub = response.departments[dep].subjects.findIndex((item:any)=>item.id===subject);
    // response.departments[dep].subjects[sub].attendance.push(date);
    // await setDoc(doc(db,"departments",user.id),response);
    // for(let i=0;i<size;i++){
    //   const id = attendance_data[`student-${i}-id`] as string;
    //   const present = attendance_data[`student-${i}-status`];
    //   const user_data:any = (await getDoc(doc(db,"users",id))).data();
    //   let currentAttendance = user_data["attendance"] ?? {};
    //   if(present==="present"){
    //     if(currentAttendance[subject]===undefined){
    //       currentAttendance[subject] = [];
    //     }
    //     currentAttendance[subject].push(date);
    //     await setDoc(doc(db,"users",id),{
    //       attendance:JSON.stringify(currentAttendance)
    //     },{merge:true});
    //   }
    // }
    toast.success("Attendance Marked Successfully!");
  };
  return (
    <>
      <title>Mark Students Attendance</title>
      <div className="max-w-[1200px] gap-2 flex flex-col items-center md:shadow-lg rounded mx-auto container my-12 p-5">
        <div className="text-2xl font-bold">Mark Students Attendance</div>
        <div className="grid md:grid-cols-2 gap-5 w-full my-5">
          <select
            value={group}
            onChange={(e) => {
              const new_students = users.filter((item:any)=>item.group===e.target.value);setDisplayedStudents(new_students);
                if(e.target.value!=="default"){
                const filtered_data = departments.filter((item:any)=>item.id===e.target.value)[0];
                  setSubjects(filtered_data.subjects)
                }else{
                  setSubjects([]);
                }
              setGroup(e.target.value);
            }}
            className="outline-none p-3 border border-gray-500 rounded"
          >
              <option value="default">Select Group</option>
            {
              departments.map((department:any)=>{
                return <option key={department.id} value={department.id}>{department.name}</option>
              })
            }
          </select>
          <select
            value={subject}
            onChange={(e) =>{setSubject(e.target.value)}}
            className="outline-none p-3 border border-gray-500 rounded"
          >
            <option value="default">Select Subject</option>
            {
              subjets.map((item:any)=>{
                return <option key={item.id} value={item.id}>{item.value}</option>
              })
            }
          </select>
        </div>
        {((group !== "default" && subject !== "default")) ? (
          <form className="grid w-full gap-7" action={attendanceHandler}>

          <MarkAttendanceTable data={displayedStudents} cols={["name"]} />
          <SubmitButton text="Mark Attendance"/>
          </form>
        ):<div className="text-center text-lg font-semibold">Select Options To View Students Data</div>}
      </div>
    </>
  );
};

export default markAttendance;
