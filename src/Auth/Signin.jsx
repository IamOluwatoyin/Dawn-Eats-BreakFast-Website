import React from "react";
import { MdOutlineCancel, MdOutlineMail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Signin.css";

const Signin = ({ onclose, onSwitchToSignup }) => {
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
          <h1>Sign In</h1>
          <span style={{ color: "grey" }}>sign in to continue</span>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <h5>Email Address</h5>
          <div
            style={{
              width: "100%",
              height: "60px",
              display: "flex",
              alignItems: "center",
              border: "1px solid black ",
              borderRadius: "8px",
              padding: " 0 10px",
            }}
          >
            <MdOutlineMail style={{ fontSize: "18px" }} />
            <input
              style={{
                flex: "1",
                height: "100%",
                outline: "none",
                border: "none",
              }}
            />
          </div>
        </div>

        <div
          style={{
            width: "100%",
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <h5>Password</h5>
          <div
            style={{
              width: "100%",
              height: "60px",
              display: "flex",
              alignItems: "center",
              border: "1px solid black ",
              borderRadius: "8px",
              padding: " 0 10px",
            }}
          >
            <input
              type="password"
              style={{
                flex: "1",
                height: "100%",
                outline: "none",
                border: "none",
              }}
            />
          </div>
        </div>

       
        <div
          style={{
            width: "100%",
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <button
            style={{
              width: "100%",
              height: "40px",
              borderRadius: "8px",
              padding: "10px",
            }}
          >
            Sign In
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <p style={{ color: "grey" }}>New to DawnEats?</p>

          <p 
            style={{ color: "orange", textDecoration: "none", cursor: "pointer" }}
            onClick={onSwitchToSignup}
          >
            {" "}
            Sign up
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signin;
