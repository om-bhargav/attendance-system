import { useEffect, useState } from "react";
import Table from "../../../components/table";
import { useNavigate } from "react-router-dom"; 
import Loading from "../../Loading";
import { getDoc,doc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { ContextUser } from "../../../context/userContext";
const ManageDepartments = () => {
  const navigate = useNavigate();
  const {user}:any = ContextUser();
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    const cleanUp = async () => {
      const groups:any = (await getDoc(doc(db,"departments",user.id))).data();
      setData(groups.departments);
      setLoading(false);
    };
    return ()=>{cleanUp()};
  },[]);
  return (
    <>
    <title>Manage Departments</title>
    <div className='max-w-[1200px] gap-5 flex flex-col items-center md:shadow-lg rounded mx-auto container my-12 p-5'>
      <div className='w-full flex md:flex-row flex-col gap-5 items-center justify-between'>
        <div className='text-2xl font-semibold'>Manage Groups</div>
        <div className='flex md:w-auto w-full md:flex-row flex-col gap-3'><input type="text" placeholder='Search Here...'/>
        <button>Search</button>
        
        </div>
        <button className='md:w-auto w-full' onClick={()=>navigate("/add-department")}>Add Group +</button>
        </div>
      {loading ? <Loading/>:<Table cols={["#","name","action"]} edit_url={"/edit-department"} button_text="Edit Details" data={data}/>}
    </div>
    </>
  )
}

export default ManageDepartments