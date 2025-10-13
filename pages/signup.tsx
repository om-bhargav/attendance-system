import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import {useNavigate} from "react-router-dom";
const signup = () => {
  const navigate = useNavigate();
  return (
    <div className="grow-1">
      <title>Presentify - Signup Page</title>
      <div className="mx-auto grid gap-2 container border border-gray-300 rounded-lg max-w-[800px] p-3">
        <div>
          <button onClick={()=>navigate("/")} className="w-full md:w-auto flex items-center items-center gap-3 p-2 bg-orange-500 text-white rounded-lg">
            <FaArrowLeft /> Go Back
          </button>
        </div>
        <h1 className="text-3xl font-bold place-self-center">
          <span className="text-orange-500 text-4xl">P</span>RESENTIFY
        </h1>
        <div className="grid gap-3">
          {/* <div>Name</div>
          <div>college</div>
          <div>district</div>
          <div>city</div>
          <div>mobileno.</div>
          <div>Checkbox</div> */}
          <div className="grid">
            <label htmlFor="">Enter Your Name:</label>
            <input
              type="text"
              className="py-2 border border-gray-200 p-2 rounded"
              placeholder="Name"
            />
          </div>
          <div className="grid">
            <label htmlFor="">Enter Your College Name:</label>
            <input
              type="text"
              className="py-2 border border-gray-200 p-2 rounded"
              placeholder="College Name"
            />
          </div>
          <div className="grid">
            <label htmlFor="">Enter Your College District:</label>
            <input
              type="text"
              className="py-2 border border-gray-200 p-2 rounded"
              placeholder="District"
            />
          </div>
          <div className="grid">
            <label htmlFor="">Enter Your City:</label>
            <input
              type="text"
              className="py-2 border border-gray-200 p-2 rounded"
              placeholder="City"
            />
          </div>
          <div className="grid">
            <label htmlFor="">Enter Your Email:</label>
            <input
              type="email"
              className="py-2 border border-gray-200 p-2 rounded"
              placeholder="Email"
            />
          </div>
          <div className="grid">
            <label htmlFor="">Enter Your Phone No:</label>
            <input
              type="text"
              className="py-2 border border-gray-200 p-2 rounded"
              placeholder="Mobile No."
            />
          </div>
          <div className="flex gap-1 items-center justify-start text-gray-600 text-md">
            <input type="checkbox" className="scale-110" /> <div>I consent to my personal data being collected and processed according to the Privacy Policy.</div>
          </div>
          <div className="grid"><button className="rounded text-white text-lg py-1">Register Now</button></div>
        </div>
      </div>
    </div>
  );
};

export default signup;
