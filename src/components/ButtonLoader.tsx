import React from 'react'
import {LucideLoader2} from "lucide-react";
const Loading = () => {
  return (
    <div className='flex justify-center items-center'><LucideLoader2 className='scale-105 animate-spin [animation-duration:2s]'/></div>
  )
}

export default Loading;