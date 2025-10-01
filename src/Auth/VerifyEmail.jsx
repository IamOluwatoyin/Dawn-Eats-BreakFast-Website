import React from "react";
import { MdOutlineCancel, MdOutlineMail } from "react-icons/md";

const VerifyEmail = ({ onclose }) => {
  return (
    <div className="Signin-wrapper">
      <form className="signin-holder">
        <div className="img-logo">
          <img src="/Images/smallLogo.jpg" alt="logo" />
        </div>

        <div onClick={() => onclose()} className="modal-cancel2">
          <MdOutlineCancel />
        </div>
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexDirection: "column",
            textAlign: "center",
            margin: "20px",
          }}
        >
          <h1>Verify Email </h1>
          {/* <span style={{ color: "grey" }}>sign in to continue</span> */}
          <div className="">
            <p>box 1</p>
            <p>box 1</p>
            <p>box 1</p>
            <p>box 1</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VerifyEmail;
