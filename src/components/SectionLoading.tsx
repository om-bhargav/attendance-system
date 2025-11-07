import React from 'react'
import {Loader2} from "lucide-react";
const SectionLoading = () => {
  return (
    <div className='w-full text-center col-span-full place-self-center flex p-2 my-5'><Loader2 className='mx-auto text-orange-500 scale-150 font-bold animate-spin'/></div>
  )
}

export default SectionLoading