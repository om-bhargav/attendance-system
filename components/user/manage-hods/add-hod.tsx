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
import SectionLoading from "../../../components/SectionLoading";
const addHOD = () => {
  const navigate = useNavigate();
  const { user }: any = ContextUser();
  const [departments, setDepartments] = useState([]);
  const [loaded,setLoaded] = useState<Boolean>(false);
  useEffect(() => {
    const cleanUp = async () => {
      const deps: any = (await getDoc(doc(db, "departments", user.id))).data();
      setDepartments(deps.departments);
      setLoaded(true);
    };
    return () => {
      cleanUp();
    };
  }, []);
  const addHOD = async (form_data: any) => {
    const { name, email, phone, group } = Object.fromEntries(form_data);
    const password = v4();
    try {
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
        college_id: user.college_id,
        role: "hod",
      attendance:{}
      });
      await signOut(secondaryAuth);
    } catch (err: any) {
      toast.error(err.message.slice(15));
      return;
    }
    navigate("/manage-hods");
    toast.success("HOD Added Successfully");
  };

  return (
    <> 
    <title>Add HOD</title>
    <div className="max-w-[1200px] gap-2 flex flex-col items-center md:shadow-lg rounded mx-auto container my-12 p-5">
      <div className="text-2xl font-bold">Add HOD</div>
      {
        loaded ?
        <form action={addHOD} className="grid gap-3 w-full p-5">
        <div className="grid">
          <label className="text-lg font-semibold">Enter Name Of HOD:</label>
          <input type="text" name="name" required placeholder="HOD Name" />
        </div>
        <div className="grid">
          <label className="text-lg font-semibold">Enter Email Of HOD:</label>
          <input
            type="text"
            name="email"
            required
            placeholder="HOD Email"
            />
        </div>
        <div className="grid">
          <label className="text-lg font-semibold">
            Enter Phone No. Of HOD:
          </label>
          <input
            type="text"
            name="phone"
            required
            placeholder="HOD Contact No."
            />
        </div>
        <div className="grid">
          <label className="text-lg font-semibold">
            Select Department Of HOD:
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
        <SubmitButton text="Add HOD" />
      </form>:<SectionLoading/>}
    </div>
    </>
  );
};

export default addHOD;
