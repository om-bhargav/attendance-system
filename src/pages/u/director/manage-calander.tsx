import React, { useEffect, useState } from "react";
import Calender from "../../../components/calender";
import {getDoc,doc} from "firebase/firestore";
import {db} from "./../../../firebase";
import {ContextUser} from "../../../context/userContext"
import { setDoc } from "firebase/firestore";
import ButtonLoader from "../../../components/ButtonLoader";
import toast from "react-hot-toast";
import useFetchHolidays from "../../../components/custom/useFetchHolidays";
import SectionLoading from "../../../components/SectionLoading";
const manageCalander = () => {
  const year = (new Date()).getFullYear();
  const {user}:any = ContextUser();
  const [loading,setLoading] = useState(false);
  const [holidays,setHolidays,loaded] = useFetchHolidays(user.college_id);
  const clickHandler = (date:string) => {
    if(holidays.includes(date)){
      setHolidays([...holidays.filter((item:string)=>item!=date)]);
    }else{
      setHolidays([...holidays,date]);
    }
  }
  const markHolidays = async ()=>{
    setLoading(true);
    await setDoc(doc(db,"holidays",user.college_id),{holidays:holidays});
    setLoading(false);
    toast.success("Calender Updated");
  };
  return (
    <>
    <title>Manage Calender</title>
    <div className="p-5 mx-auto max-w-[1200px] flex flex-col gap-5 items-center h-auto my-10">
      <div className="text-4xl font-semibold">Calender Of {year}</div>
      {
        loaded ?
        <>
        <div className="w-full gap-5 rounded grid lg:grid-cols-3">
        {
          [...Array.from(Array(12))].map((e,i)=><Calender key={i} holidays={holidays} buttonEvent={clickHandler} month_index={i}/>)
        }
      </div>
      <button disabled={loading || holidays.length===0} onClick={markHolidays} className="w-full p-2 text-lg">
        {loading ? <ButtonLoader/>:"Mark Holidays"}
        </button>
        </>:<SectionLoading/>
      }
    </div>
        </>
  );
};

export default manageCalander;
