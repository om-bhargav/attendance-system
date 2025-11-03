import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMinus } from "react-icons/fa";
import { v4 } from "uuid";
import SubmitButton from "../../../components/SubmitButton";
import toast from "react-hot-toast";
import { db } from "../../../lib/firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { ContextUser } from "../../../context/userContext";
import { secondaryAuth } from "../../../lib/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
 
const addStudent = () => {
  const navigate = useNavigate();
  const { user }: any = ContextUser();
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    const cleanUp = async () => {
      const deps: any = (await getDoc(doc(db, "departments", user.id))).data();
      setDepartments(deps.departments);
    };
    return () => {
      cleanUp();
    };
  }, []);
  const addStudent = async (form_data: any) => {
    const { name, email, phone, group } = Object.fromEntries(form_data);
    const password = v4();
    try{

      const user_res = await createUserWithEmailAndPassword(
        secondaryAuth,
        email,
      password
    );
    await setDoc(doc(db, "users", user_res.user.uid), {
      name,
      email,
      phone,
      group,
      password,
      college_id:user.college_id,
      role:"student"
    });
    await signOut(secondaryAuth);
  }
  catch(err:any){
    toast.error(err.message.slice(15));
    return;
  }
    navigate("/manage-students");
    toast.success("Student Added Successfully");
  };

  return (
    <>
    <title>Add Student</title>
    <div className="max-w-[1200px] gap-2 flex flex-col items-center md:shadow-lg rounded mx-auto container my-12 p-5">
      <div className="text-2xl font-bold">Add Student</div>
      <form action={addStudent} className="grid gap-3 w-full p-5">
        <div className="grid">
          <label className="text-lg font-semibold">
            Enter Name Of Student:
          </label>
          <input type="text" name="name" required placeholder="Student Name" />
        </div>
        <div className="grid">
          <label className="text-lg font-semibold">
            Enter Email Of Student:
          </label>
          <input
            type="text"
            name="email"
            required
            placeholder="Student Email"
            />
        </div>
        <div className="grid">
          <label className="text-lg font-semibold">
            Enter Phone No. Of Student:
          </label>
          <input
            type="text"
            name="phone"
            required
            placeholder="Student Contact No."
            />
        </div>
        <div className="grid">
          <label className="text-lg font-semibold">
            Select Group Of Student:
          </label>
          <select
            required
            name="group"
            className="text-md border rounded p-2 outline-none"
            >
            {departments.map((item: any) => {
              return <option value={item.id}>{item.name}</option>;
            })}
          </select>
        </div>
        <SubmitButton text="Add Student" />
      </form>
    </div>
            </>
  );
};

export default addStudent;
