import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../handlers/authHandlers";
import userContext from "../context/userContext";
import { useContext } from "react";
import SubmitButton from "../components/SubmitButton";
import { showNotification } from "../handlers/showNotifications";
const login = () => {
  const navigate = useNavigate();
  const context = useContext<any>(userContext);
  const [checked, setIsChecked] = useState(false);
  const loginWrapper = async (fdata:any) => {
    const response = await handleLogin(fdata);
    if(response.user){
      context.setUser(response.user);
      context.setIsLoggedIn(true);
      navigate("/dashboard");
    }
    showNotification(response.notification);
  }
  return (
    <div className="grow-1">
      <title>Presentify - Login Page</title>
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
          action={loginWrapper}
          className="grid gap-3"
        >
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
            <label htmlFor="">Enter Your Password:</label>
            <input
              required
              type="password"
              className="py-2 border border-gray-200 p-2 rounded"
              placeholder="Password"
              name="pass"
            />
          </div>
          <div className="flex gap-1 items-center justify-start text-gray-600 text-md">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="scale-110"
            />{" "}
            <div>Remember Me</div>
          </div>
          <div className="grid">
            <SubmitButton disabled={!checked} text="Login Now" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
