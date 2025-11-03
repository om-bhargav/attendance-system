import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import { handleRegister } from "../handlers/authHandlers";
import SubmitButton from "../components/SubmitButton";
import { showNotification } from "../handlers/showNotifications";
const signup = () => {
  const navigate = useNavigate();
  const [checked, setIsChecked] = useState(false);
  return (
    <div className="grow-1">
      <title>Presentify - Signup Page</title>
      <div className="mx-auto grid gap-2 container border border-gray-300 rounded-lg max-w-[800px] p-3">
        <div>
          <button
            onClick={() => navigate("/")}
            className="w-full md:w-auto flex items-center items-center gap-3 p-2 bg-orange-500 text-white rounded-lg"
          >
            <FaArrowLeft /> Go Back
          </button>
        </div>
        <h1 className="text-3xl font-bold place-self-center">
          <span className="text-orange-500 text-4xl">P</span>RESENTIFY
        </h1>
        <form
          action={async (fdata) => {
            showNotification(await handleRegister(fdata));
          }}
          className="grid gap-3"
        >
          <div className="grid">
            <label htmlFor="">Enter Your Name:</label>
            <input
              required
              type="text"
              className="py-2 border border-gray-200 p-2 rounded"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="grid">
            <label htmlFor="">Enter Your College Name:</label>
            <input
              required
              type="text"
              className="py-2 border border-gray-200 p-2 rounded"
              placeholder="College Name"
              name="cname"
            />
          </div>
          <div className="grid">
            <label htmlFor="">Enter Your College District:</label>
            <input
              required
              type="text"
              className="py-2 border border-gray-200 p-2 rounded"
              placeholder="District"
              name="state"
            />
          </div>
          <div className="grid">
            <label htmlFor="">Enter Your City:</label>
            <input
              required
              type="text"
              className="py-2 border border-gray-200 p-2 rounded"
              placeholder="City"
              name="city"
            />
          </div>
          <div className="grid">
            <label htmlFor="">Enter Your Email:</label>
            <input
              required
              type="email"
              className="py-2 border border-gray-200 p-2 rounded"
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="grid">
            <label htmlFor="">Enter Your Phone No:</label>
            <input
              required
              type="text"
              className="py-2 border border-gray-200 p-2 rounded"
              placeholder="Mobile No."
              name="phoneno"
            />
          </div>
          <div className="grid">
            <label htmlFor="">Enter Your Password:</label>
            <input
              required
              type="password"
              className="py-2 border border-gray-200 p-2 rounded"
              placeholder="Password"
              name="pass"
            />
          </div>
          <div className="grid">
            <label htmlFor="">Enter Your Password Again:</label>
            <input
              required
              type="password"
              className="py-2 border border-gray-200 p-2 rounded"
              placeholder="Confirm Password"
              name="cpass"
            />
          </div>
          <div className="flex gap-1 items-center justify-start text-gray-600 text-md">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="scale-110"
            />{" "}
            <div>
              I consent to my personal data being collected and processed
              according to the Privacy Policy.
            </div>
          </div>
          <div className="grid">
            <SubmitButton
              disabled={!checked}
              text="Register now"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default signup;
