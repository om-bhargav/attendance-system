import React, { useEffect, useState } from 'react'
import {FaArrowRight} from "react-icons/fa";
import Calender from "../../../components/calender"
import {ContextUser} from "../../../context/userContext";
import useFetchHolidays from "../../../components/custom/useFetchHolidays";
function dashboard() {
  const {user}:any = ContextUser();
  const [holidays,setHolidays] = useFetchHolidays(user.college_id);

  return (
    <>
    <title>Presentify - Dashboard</title>
       <div className='flex flex-col p-5 my-5 justify-center items-start container lg:flex-row max-w-[1200px] gap-5 mx-auto'>
       <div className='max-w-[800px] w-full flex flex-col gap-5'>
          <div className='border border-gray-200 rounded p-3 shadow-lg text-2xl text-center flex flex-col lg:flex-row gap-5 items-center'><img src="/default.png" className='h-20 rounded'/>Welcome, {user.name}</div>
          <div className='border border-gray-200 grid text-center gap-5 rounded py-5 p-3 shadow-lg'>
          <div className='text-2xl font-semibold'>Important Links</div>
          <div className='gap-5 grid text-2xl'>
              <div className='duration-200 rounded hover:text-white flex justify-center items-center hover:bg-orange-500 border p-3'>
                <div className='flex gap-2 items-center'>Manage HOD's <FaArrowRight/></div>
              </div>
              <div className='duration-200 rounded hover:text-white flex justify-center items-center hover:bg-orange-500 border p-3'>
                <div className='flex gap-2 items-center'>Manage Teachers <FaArrowRight/></div>
              </div>
              <div className='duration-200 rounded hover:text-white flex justify-center items-center hover:bg-orange-500 border p-3'>
                <div className='flex gap-2 items-center'>Manage Students <FaArrowRight/></div>
              </div>
              <div className='duration-200 rounded hover:text-white flex justify-center items-center hover:bg-orange-500 border p-3'>
                <div className='flex gap-2 items-center'>Manage Profile <FaArrowRight/></div>
              </div>
          </div>
          </div>
       </div>
       <Calender holidays={holidays}/>
       </div>
    </>
  )
}

export default dashboard