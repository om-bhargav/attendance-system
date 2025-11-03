import React, { ErrorInfo } from "react";
import { auth,db } from "../lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection,addDoc,setDoc,doc,getDoc } from "firebase/firestore";

export const handleRegister: any = async (target: any) => {
  const { name, email, phoneno, cname, state, city, pass, cpass } =
    Object.fromEntries(target);
  if (pass !== cpass) {
    return { type: "error", message: "Passwords Don't Match" };
  }
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, pass);
    await setDoc(doc(db,"users",user.uid),{
      name, 
      email, 
      phone_no:phoneno, 
      college:cname, 
      state, 
      city,
      role:"director",
      college_id:user.uid
    });
    await setDoc(doc(db,"holidays",user.uid),{holidays:[]});
    await setDoc(doc(db,"departments",user.uid),{departments:[]});
  } catch (err: any) {
    return { type: "error", message: err.message.slice(9).trim() };
  }
  return { type: "success", message: "User Created Successfully!" };
};

export const handleLogin:any = async (target: any) => {
  const {email,pass} = Object.fromEntries(target);

  try {
    const { user } = await signInWithEmailAndPassword(auth,email,pass);
    const userData = await getDoc(doc(db,"users",user.uid));
    return {user:{id:user.uid,...userData.data()},notification:{ type: "success", message: "Welcome To Presentify Panel!"}};
  } catch (err: any) {
    return {notification:{ type: "error", message: err.message.slice(9).trim() }};
  }
  return {};
};
