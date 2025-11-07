import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextUser } from "../../../context/userContext";
import { db } from "../../../firebase";
import Table from "../../table";
const dashboard = () => {
  const {user}:any = ContextUser();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loaded, setloaded] = useState(false);
   const [searchedData,setSearchedData] = useState([]);
  useEffect(() => {
    const cleanUp = async () => {
      const response: any = await getDocs(collection(db, "users"));
      const newEnteries:any = [];
      response.docs.forEach((item: any) => {
        const teacher_data = item.data();
        if (teacher_data.role === "student" && teacher_data.college_id===user.college_id) {
          newEnteries.push({...item.data(),id:item.id});
        }
      })
      setData(newEnteries);
      setSearchedData(newEnteries);
      setloaded(true);
    };
    return () => {
      cleanUp();
    };
  }, []); 
      const onChangeHandler = (e:any) => {
    setSearchedData(data.filter((item:any)=>item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())));
  };
  return ( 
    <>
    <title>Manage Students</title>
    <div className="max-w-[1200px] gap-5 flex flex-col items-center md:shadow-lg rounded mx-auto container my-12 p-5">
      <div className="w-full flex flex-col gap-5">
        <div className="ml-auto flex justify-between md:flex-row flex-col gap-4 items-center md:w-[60%] w-full">
          <div className="text-2xl font-semibold">Manage Student's</div>
          <div className="flex md:w-auto w-full md:flex-row flex-col gap-3">
            <input onChange={onChangeHandler} type="text" placeholder="Search Here..." />
            <button>Search</button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 w-full gap-3">
          {/* <button
            className="whitespace-nowrap"
            onClick={() => navigate("/download-attendance")}
            >
            Download Attendance
          </button> */}
          <button
            className="whitespace-nowrap"
            onClick={() => navigate("/download-credentials/student")}
            >
            Download Credentials
          </button>
          <button
            className="whitespace-nowrap"
            onClick={() => navigate("/mark-student-attendance")}
            >
            Mark Attendance 
          </button>
          <button
            className="whitespace-nowrap"
            onClick={() => navigate("/add-student")}
          >
            Add Student +
          </button>
        </div>
      </div>
      <div className="grid w-full text-center gap-4">
        <div className="text-2xl font-semibold">Student's List</div>
          <Table
          loaded={loaded}
          cols={["#", "name", "action"]}
          edit_url={"/view-attendance"}
          data={searchedData} 
          button_text="View Attendance"
          />
      </div>
    </div>
        </>
  );
};

export default dashboard;
