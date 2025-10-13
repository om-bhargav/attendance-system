import React from 'react'
import BasicHeader from '../components/BasicHeader'
import { FaBattleNet,FaSchoolCircleCheck,FaBookBookmark   } from "react-icons/fa6";
const Home = () => {
  return (
   <>
   <title>Presentify - Home Page</title>
    <div id="home" className='px-2 lg:max-w-[1400px] scroll-mt-16 self-center flex justify-between items-center'>
      <div className='lg:w-1/2 flex flex-col gap-3 text-center lg:text-left'>
        <h2 className='font-bold text-4xl'>Simplify Attendance Management for Your Entire Campus.</h2>
        <div className='block lg:hidden'><img src="/hero.png" className='w-full'/></div>
        <p className='text-lg'>Seamlessly track attendance for students, professors, and staff. Our all-in-one system provides a centralized platform that unifies attendance data across your institution, from the director's office to the classroom. Gain real-time insights, automate record-keeping, and generate detailed reports that ensure accuracy and simplify compliance. With our intuitive interface and customizable features, you can streamline your administrative processes and focus on what truly matters: a better educational experience for everyone.</p>
        <div className='flex-col lg:flex-row flex gap-2'>
          <button className='cursor-pointer bg-orange-500 text-white px-2 py-1 rounded hover:bg-orange-600'>Get Started</button>
          <button className='cursor-pointer border !bg-transparent px-2 py-1 rounded'>Learn More</button>
        </div>
      </div>
      <div className='hidden lg:block'><img src="/hero.png" className='h-100'/></div>
    </div>

    <div id="goals" className='px-2 scroll-mt-16 lg:max-w-[1400px] gap-5 w-full self-center flex flex-col'>
      <div className='text-4xl font-bold self-center'>Our Vision And Goals</div>
      <div className='flex justify-between flex-wrap gap-3 lg:flex-nowrap'>

      <div className='w-full border border-gray-200 rounded shadow-xl p-2'>
        <div className='justify-self-center grow py-4'><FaBattleNet className='text-7xl'/></div>
        <div className='flex flex-col gap-2'>
        <div className='text-xl font-bold'>Smarter, More Connected Campus</div>
        <div className='text-sm text-justify'>To create a unified, data-driven ecosystem where attendance management is effortless, transparent, and accurate for every member of the academic community. Lorem ipsum dolor sit amet consectetur.</div>
        <button className='cursor-pointer bg-orange-500 text-white px-2 py-1 rounded hover:bg-orange-600'>Learn More</button>
        </div>
      </div>
      <div className='w-full border border-gray-200 rounded shadow-xl p-2'>
        <div className='justify-self-center grow py-4'><FaSchoolCircleCheck className='text-7xl'/></div>
        <div className='flex flex-col gap-2'>
        <div className='text-xl font-bold'>For Fostering Academic Excellence</div>
        <div className='text-sm text-justify'>To create a unified, data-driven ecosystem where attendance management is effortless, transparent, and accurate for every member of the academic community. Lorem ipsum dolor sit amet consectetur.</div>
        <button className='cursor-pointer bg-orange-500 text-white px-2 py-1 rounded hover:bg-orange-600'>Learn More</button>
        </div>
      </div>
      <div className='w-full border border-gray-200 rounded shadow-xl p-2'>
        <div className='justify-self-center grow py-4'><FaBookBookmark className='text-7xl'/></div>
        <div className='flex flex-col gap-2'>
        <div className='text-xl font-bold'>The Future of Campus Management</div>
        <div className='text-sm text-justify'>To create a unified, data-driven ecosystem where attendance management is effortless, transparent, and accurate for every member of the academic community. Lorem ipsum dolor sit amet consectetur.</div>
        <button className='cursor-pointer bg-orange-500 text-white px-2 py-1 rounded hover:bg-orange-600'>Learn More</button>
        </div>
      </div>
      </div>
    </div>

    <div id="reviews" className='px-2 scroll-mt-16 lg:max-w-[1400px] w-full self-center flex flex-col gap-4'>
      <div className='text-4xl font-bold self-center'>What Clients Say About Us</div>
      <div className='grid lg:grid-cols-2 gap-4'>
        
        <div className='w-full shadow-lg border border-gray-200 rounded p-3 flex gap-2'>
          <div>
          <img src="/default.png" className='rounded w-50'/></div>
          <div className='grow'>
            <div className='text-lg font-bold'>Tarun Arora</div>
            <div className='text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ex rerum eaque quibusdam cum repellat deleniti aspernatur, omnis quod aperiam quam dicta soluta itaque, ut exercitationem ad illo similique asperiores vero. Possimus alias voluptatibus necessitatibus amet soluta id dolorem laborum!</div>
          </div>
        </div>
        
        <div className='w-full shadow-lg border border-gray-200 rounded p-3 flex gap-2'>
          <div>
          <img src="/default.png" className='rounded w-50'/></div>
          <div className='grow'>
            <div className='text-lg font-bold'>Ravinder Kumar</div>
            <div className='text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ex rerum eaque quibusdam cum repellat deleniti aspernatur, omnis quod aperiam quam dicta soluta itaque, ut exercitationem ad illo similique asperiores vero. Possimus alias voluptatibus necessitatibus amet soluta id dolorem laborum!</div>
          </div>
        </div>
        
        <div className='w-full shadow-lg border border-gray-200 rounded p-3 flex gap-2'>
          <div>
          <img src="/default.png" className='rounded w-50'/></div>
          <div className='grow'>
            <div className='text-lg font-bold'>Tajendar Singh</div>
            <div className='text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ex rerum eaque quibusdam cum repellat deleniti aspernatur, omnis quod aperiam quam dicta soluta itaque, ut exercitationem ad illo similique asperiores vero. Possimus alias voluptatibus necessitatibus amet soluta id dolorem laborum!</div>
          </div>
        </div>
        
        <div className='w-full shadow-lg border border-gray-200 rounded p-3 flex gap-2'>
          <div>
          <img src="/default.png" className='rounded w-50'/></div>
          <div className='grow'>
            <div className='text-lg font-bold'>Gulshan Kumar</div>
            <div className='text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ex rerum eaque quibusdam cum repellat deleniti aspernatur, omnis quod aperiam quam dicta soluta itaque, ut exercitationem ad illo similique asperiores vero. Possimus alias voluptatibus necessitatibus amet soluta id dolorem laborum!</div>
          </div>
        </div>

      </div>

    </div>

    <div id="aboutus" className='px-2 scroll-mt-16 lg:max-w-[1400px] w-full self-center flex flex-col'>
      <div className='self-center text-4xl font-bold'>About Us</div>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-5'>
      <div><img src="/about-us.png" width={3000}/></div>
      <div className='text-justify'>The idea for this platform was born from a simple observation: attendance tracking was outdated, inefficient, and disconnected. Professors were losing valuable class time, administrators were buried in paperwork, and students had no clear view of their own participation. We saw an opportunity to change this. By combining cutting-edge technology with deep insights into the academic world, we created a solution that streamlines the entire process, provides meaningful data, and helps institutions foster a more connected and accountable learning community.
        The idea for this platform was born from a simple observation: attendance tracking was outdated, inefficient, and disconnected. Professors were losing valuable class time, administrators were buried in paperwork, and students had no clear view of their own participation. We saw an opportunity to change this. By combining cutting-edge technology with deep insights into the academic world, we created a solution that streamlines the entire process, provides meaningful data, and helps institutions foster a more connected and accountable learning community.
      </div>
      </div>
    </div>
    
    <div id="contactus" className='px-2 scroll-mt-16 lg:max-w-[1400px] w-full self-center flex flex-col shadow-2xl p-3 rounded'>
      <div className='self-center text-4xl font-bold'>Contact Us</div>
      <div className='flex flex-col justify-between gap-2'>
        <div className="flex flex-col">
          <label htmlFor="">Enter Your Name:</label>
          <input type="text"  className="border-b outline-none"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Enter Your Email:</label>
          <input type="email" className="border-b outline-none" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Enter Your Country:</label>
          <input type="text"  className="border-b outline-none"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Enter Your Message:</label>
          <textarea name="" id="" rows={5} className="border-b outline-none"></textarea>
        </div>
        <div className="flex flex-col">
          <button className='cursor-pointer bg-orange-500 text-white px-2 py-1 rounded hover:bg-orange-600'>Send</button>
        </div>
      </div>
    </div>
   </>
  )
}

export default Home