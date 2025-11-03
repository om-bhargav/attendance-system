import { useEffect, useState } from "react";
import Table from "../../../components/table";
import { useNavigate } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { ContextUser } from "../../../context/userContext";
import Loading from "../../../components/Loading";
const dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loaded, setloaded] = useState(false);
  useEffect(() => {
    setloaded(true);
    const cleanUp = async () => {
      const response: any = await getDocs(collection(db, "users"));
      const newEnteries:any = [];
      response.docs.forEach((item: any) => {
          const teacher_data = item.data();
          if (teacher_data.role === "student") {
            newEnteries.push({...item.data(),id:item.id});
          }
        })
        setData(newEnteries);
    };
    return () => {
      cleanUp();
    };
  }, []);
  return (
    <>
    <title>Manage Students</title>
    <div className="max-w-[1200px] gap-5 flex flex-col items-center md:shadow-lg rounded mx-auto container my-12 p-5">
      <div className="w-full flex flex-col gap-5">
        <div className="ml-auto flex justify-between md:flex-row flex-col gap-4 items-center md:w-[60%] w-full">
          <div className="text-2xl font-semibold">Manage Student's</div>
          <div className="flex md:w-auto w-full md:flex-row flex-col gap-3">
            <input type="text" placeholder="Search Here..." />
            <button>Search</button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 w-full gap-3">
          <button
            className="whitespace-nowrap"
            onClick={() => navigate("/add-department")}
            >
            Download Attendance
          </button>
          <button
            className="whitespace-nowrap"
            onClick={() => navigate("/add-department")}
            >
            Download Credentials
          </button>
          <button
            className="whitespace-nowrap"
            onClick={() => navigate("/add-department")}
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
        {loaded ? (
          <Table
          cols={["#", "name", "action"]}
          edit_url={"/view-attendance"}
          data={data} 
          button_text="View Attendance"
          />
        ) : (
          <Loading />
        )}
      </div>
    </div>
        </>
  );
};

export default dashboard;
