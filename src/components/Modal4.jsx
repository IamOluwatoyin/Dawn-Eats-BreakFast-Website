import React from "react";
import "./Modal4Style.css";
import { FaUserAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
const Modal4 = () => {
  return (
    <div className="profilecontainer">
      <div className="userName">
        <FaUserAlt className="profileicon" />
        <h3>John doe</h3>
      </div>
      <h4 className="text">My order </h4>
      <div className="Logout">
        <div className="Logout-content">
          <h4>Logout</h4>
          <MdLogout className="logouticon" />
        </div>
      </div>
    </div>
  );
};

export default Modal4;
