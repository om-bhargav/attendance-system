import React from 'react'
import {LucideLoader} from "lucide-react";
const Loading = () => {
  return (
    <div className='absolute h-screen w-screen bg-white flex justify-center items-center'><LucideLoader className='scale-130 animate-spin [animation-duration:2s]'/></div>
  )
}

export default Loading;