import React from 'react'

const BasicFooter = () => {
  return (
       <div className='px-4 w-full text-white self-center items-center lg:items-start flex flex-col lg:flex-row justify-center lg:justify-between p-3 bg-black'>
      <h1 className="text-3xl font-bold">
        <span className="text-orange-500 text-4xl">P</span>RESENTIFY
      </h1>
      <div className='grid lg:grid-cols-4 gap-5'>
        <div className="flex flex-col justify-center items-center">
          <h2 className='text-2xl font-bold'>Section 1</h2>
          <ul>
            <li>Tab 1</li>
            <li>Tab 2</li>
            <li>Tab 3</li>
            <li>Tab 4</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className='text-2xl font-bold'>Section 2</h2>
          <ul>
            <li>Tab 1</li>
            <li>Tab 2</li>
            <li>Tab 3</li>
            <li>Tab 4</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className='text-2xl font-bold'>Section 3</h2>
          <ul>
            <li>Tab 1</li>
            <li>Tab 2</li>
            <li>Tab 3</li>
            <li>Tab 4</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className='text-2xl font-bold'>Section 4</h2>
          <ul>
            <li>Tab 1</li>
            <li>Tab 2</li>
            <li>Tab 3</li>
            <li>Tab 4</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BasicFooter