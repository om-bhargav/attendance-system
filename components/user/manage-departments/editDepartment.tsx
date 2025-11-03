import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMinus } from "react-icons/fa"; 
import { v4 } from "uuid";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { ContextUser } from "../../../context/userContext";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import SubmitButton from "../../SubmitButton";
const editDepartment = () => {
  const navigate = useNavigate();
  const {user}:any = ContextUser();
  const [name,setName] = useState("");
  const {id} = useParams();
  const [departments,setDepartments] = useState([]);
  const [inputs, setInputs] = useState<any>([]);
  useEffect(()=>{
    const cleanUp = async ()=>{
      if(user){

        const response:any = (await getDoc(doc(db,"departments",user.id))).data();
        setDepartments(response.departments);
        const department = response.departments.filter((item:any)=>item.id===id)[0];
        setInputs(department.subjects);
        setName(department.name);
      }
    };
    return ()=>{cleanUp()};
  },[]);
  const onChangeHandler = (id: string, subject: string) => {
    const newInputs = inputs.map((item: any) => {
      return item.id === id ? { ...item, value: subject } : item;
    });
    setInputs(newInputs);
  };
  const addSubject = () => {
    setInputs([...inputs, { id: v4() as string, value: "" }]);
  };
  const removeSubject = (id: string) => {
    setInputs(inputs.filter((item: any) => item.id != id));
  };
  const updateGroup = async (form_data:any) => {
    const newObject = departments.map((item:any)=>item.id===id ? {...item,subjects:inputs,name:name}:item);
    await setDoc(doc(db,"departments",user.id),{departments:newObject});
    toast.success("Group Updated Successfully");
    navigate("/manage-departments");
  };
  return (
    <div className="max-w-[1200px] gap-2 flex flex-col items-center md:shadow-lg rounded mx-auto container my-12 p-5">
      <div className="text-2xl font-bold">Edit Group</div>
      <form action={updateGroup} className="grid gap-3 w-full p-5">
        <div className="grid">
          <label className="text-lg font-semibold">Enter Name Of Group:</label>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required placeholder="Enter Name Of Your Group" />
        </div>
        <div className="grid gap-3">
          {inputs.length===0 ? <div>No Subjects Added Yet</div> :inputs.map((item: any, index: number) => (
            <div className="grid gap-3" key={index}>
              <label className="text-lg font-semibold">
                Enter Subject {index + 1}:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  onChange={(e) => onChangeHandler(item.id, e.target.value)}
                  className="w-full"
                  placeholder="Enter Subject Name"
                  required
                  value={item.value}
                />
                <button type="button" onClick={() => removeSubject(item.id)}>
                  <FaMinus />
                </button>
              </div>
            </div>
          ))}
          <button onClick={addSubject} type="button">
            Add Subject
          </button>
        </div>
        <SubmitButton text="Update Details"/>
      </form>
    </div>
  );
};

export default editDepartment;
