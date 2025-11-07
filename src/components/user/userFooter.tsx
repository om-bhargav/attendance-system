import React from 'react'

function userFooter() {
  return (
      <div className='px-4 w-full text-white self-center items-center lg:items-start flex flex-col lg:flex-row justify-center lg:justify-between p-3 bg-black'>
      <h1 className="text-3xl font-bold">
        <span className="text-orange-500 text-4xl">P</span>RESENTIFY
      </h1>
      <div className='grid lg:grid-cols-2 gap-5'>
        <div className="flex flex-col justify-center items-center">
          <a href="#" className='text-lg text-gray-400 font-semibold'>Home</a>
        </div>
        <div className="flex flex-col justify-center items-center">
          <a href="#" className='text-lg text-gray-400 font-semibold'>Settings</a>
        </div>
      </div>
    </div>
  )
}

export default userFooter