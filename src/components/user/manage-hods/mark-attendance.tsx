import { arrayUnion, doc, setDoc } from "firebase/firestore";
import {useEffect} from "react";
import toast from "react-hot-toast";
import { db } from "../../../firebase";
import useFetchUsers from "../../custom/useFetchUsers";
import MarkAttendanceTable from "../../MarkAttendanceTable";
import SectionLoading from "../../SectionLoading";
import SubmitButton from "../../SubmitButton";
import { ContextUser } from "../../../context/userContext";
const markAttendance = () => {
  const { user }: any = ContextUser();
  const [users, setUsers, usersLoaded, setUsersLoaded] =useFetchUsers("hod");
    const attendanceHandler = async (form_data:FormData) => {
      const attendance_data = Object.fromEntries(form_data);
      const size = Object.keys(attendance_data).length/2;
      const date = (new Date()).toLocaleDateString().replaceAll("/","-");
      for(let i=0;i<size;i++){
        const id = attendance_data[`student-${i}-id`] as string;
        const present = attendance_data[`student-${i}-status`];
        if(present==="present"){
          await setDoc(doc(db,"users",id),{
            attendance:arrayUnion(date)
          },{merge:true});
        }
      }
          toast.success("Attendance Marked Successfully!");
    };

  return (
    <>
      <title>Mark HOD's Attendance</title>
      <div className="max-w-[1200px] gap-2 flex flex-col items-center md:shadow-lg rounded mx-auto container my-12 p-5">
        <div className="text-2xl font-bold">Mark HOD's Attendance</div>
        {usersLoaded ?

          users.length>0 ? (
          <form action={attendanceHandler} className="grid w-full gap-7 my-7">

          <MarkAttendanceTable data={users} cols={["name"]} />
          <SubmitButton text="Mark Attendance"/>
          </form>
        ):<div className="text-center text-lg font-semibold">No Data Yet</div>:<SectionLoading/>}
      </div>
    </>
  );
};

export default markAttendance;
