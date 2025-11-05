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
  const [loaded,setLoaded] = useState(false);
  const [searchedData,setSearchedData] = useState([]);
  useEffect(()=>{
    const cleanUp = async () => {
      const groups:any = (await getDoc(doc(db,"departments",user.id))).data();
      if(groups?.departments){

        setData(groups.departments);
        setSearchedData(groups.departments);
      }
      setLoaded(true);
    };
    return ()=>{cleanUp()};
  },[]);
  const onChangeHandler = (e:any) => {
    setSearchedData(data.filter((item:any)=>item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())));
  };
  return (
    <>
    <title>Manage Departments</title>
    <div className='max-w-[1200px] gap-5 flex flex-col items-center md:shadow-lg rounded mx-auto container my-12 p-5'>
      <div className='w-full flex md:flex-row flex-col gap-5 items-center justify-between'>
        <div className='text-2xl font-semibold'>Manage Groups</div>
        <div className='flex md:w-auto w-full md:flex-row flex-col gap-3'><input onChange={onChangeHandler} type="text" placeholder='Search Here...'/>
        <button>Search</button>
        
        </div>
        <button className='md:w-auto w-full' onClick={()=>navigate("/add-department")}>Add Group +</button>
        </div>
     <Table cols={["#","name","action"]} loaded={loaded} edit_url={"/edit-department"} button_text="Edit Details" data={searchedData}/>
    </div>
    </>
  )
}

export default ManageDepartments