import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ContextUser } from "../context/userContext";
import { FaArrowRight } from "react-icons/fa";
const Header = () => {
  const { pathname } = useLocation();
  const [tab, setTab] = useState(1);
  const {user}:any = ContextUser();
  return (
    <div className="shadow py-2 px-4 flex justify-between items-center sticky top-0 bg-white">
      <h1 className="text-3xl font-bold">
        <span className="text-orange-500 text-4xl">P</span>RESENTIFY
      </h1>
      <ul className={`hidden ${pathname==="/" ? "lg:flex":""} gap-2`}>
        <li>
          <a
            onClick={() => {
              setTab(1);
            }}
            className={
              tab === 1
                ? "bg-orange-500 text-white px-2 py-1 rounded"
                : "px-2 py-1"
            }
            href="#home"
          >
            Home
          </a>
        </li>
        <li>
          <a
            onClick={() => setTab(2)}
            className={
              tab === 2
                ? "bg-orange-500 text-white px-2 py-1 rounded"
                : "px-2 py-1"
            }
            href="#goals"
          >
            Our Goals
          </a>
        </li>
        <li>
          <a
            onClick={() => setTab(3)}
            className={
              tab === 3
                ? "bg-orange-500 text-white px-2 py-1 rounded"
                : "px-2 py-1"
            }
            href="#reviews"
          >
            Reviews
          </a>
        </li>
        <li>
          <a
            onClick={() => setTab(4)}
            className={
              tab === 4
                ? "bg-orange-500 text-white px-2 py-1 rounded"
                : "px-2 py-1"
            }
            href="#aboutus"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            onClick={() => setTab(5)}
            className={
              tab === 5
                ? "bg-orange-500 text-white px-2 py-1 rounded"
                : "px-2 py-1"
            }
            href="#contactus"
          >
            Contact Us
          </a>
        </li>
      </ul>

      <div className="flex-row flex gap-3 items-center">
        {
          !user ?
          <>
          <Link to="/login" className="whitespace-nowrap cursor-pointer">
          Login
        </Link>
        <Link
        to="/signup"
        className="whitespace-nowrap cursor-pointer bg-orange-500 text-white px-2 py-1 rounded hover:bg-orange-600"
        >
          Signup
        </Link>
          </>:
          <Link className="flex items-center gap-3 whitespace-nowrap cursor-pointer bg-orange-500 text-white rounded p-3 hover:bg-orange-600" to="/dashboard">Go To Dashboard <FaArrowRight/></Link> 
        }
      </div>
    </div>
  );
};

export default Header;
