import React from "react";
import "./Modal4Style.css";
import { FaUserAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import GetId from "../Auth/GetId";
export const Modal4 = () => {
  const navigate = useNavigate();
//  const handleNavigate = ()=>{
//   navigate("/")
//  }
  return (
    <div className="profilecontainer">
      <div className="userName">
        <FaUserAlt className="profileicon" />
        <GetId/>
      </div>
      <h4 className="text">My order </h4>
      <div className="Logout">
        <div className="Logout-content">
          <h4>Logout</h4>
          <MdLogout className="logouticon" onClick={()=>{localStorage.removeItem("userId")
            navigate("/")}} />
        </div>
      </div>
    </div>
  );
};

