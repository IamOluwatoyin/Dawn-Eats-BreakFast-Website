import React, { useState } from "react";
import { MdOutlineCancel, MdOutlineMail } from "react-icons/md";
import "./VerifyEmail.css";
import Signup from "./Signup";
import Signin from "./Signin";
import { useNavigate } from "react-router-dom";

const VerifyEmail = ({ onclose}) => {
  const [opensignUpModal, setopensignUpModal] = useState(false);
  const [opensignInModal, setopensignInModal] = useState(false);

  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate("DashBoard")
  }
  
  return (
    <div className="vemail-wrapper">
      <form className="vemail-holder">
        <div className="img-logo">
          <img src="/Images/smallLogo.jpg" alt="logo" />
        </div>

        <div onClick={() => onclose()} className="modal-cancel3">
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
          <span style={{ color: "grey" }}>
            please input code send to your email
          </span>
        </div>
        <div
          style={{
            display: "flex",
            gap: "15px",
            width: "100%",
            alignItems: "center",
            justifyContent:"center",
            height: "100%",
           
          }}
        >
          <input type="" 
             style={{
            display: "flex",
            borderRadius:"8px",
            width: "80px",
            border: "1px solid black",
            height: "80px",}}
          />
          <input type="" 
             style={{
            display: "flex",
            borderRadius:"8px",
            width: "80px",
            border: "1px solid black",
            height: "80px",}}
          />
          <input type="" 
             style={{
            display: "flex",
             borderRadius:"8px",
            width: "80px",
             border: "1px solid black",
            height: "80px",}}
          />
          <input type="" 
              style={{
            display: "flex",
             borderRadius:"8px",
            width: "80px",
             border: "1px solid black",
            height: "80px",}}
           />
        </div>

        <div  style={{
            width: "60%",
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            }}>
           <button
            style={{
              width: "100%",
              height: "40px",
              borderRadius: "8px",
              padding: "10px",
              cursor: "pointer",
              background:"orange"
              
            }}
            onClick={handleClick}
          >
            Verify
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
          <span style={{ color: "grey" }}>Didn't receive the code</span>

          <p
            style={{
              color: "orange",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            {" "}
            Resend
          </p>
        </div>
        <div>
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
            onClick={() => setopensignUpModal(true)}
            // onSwitchToSignup={() => {
            //     setopensignInModal(false);
            //     }}
          >
            {" "}
            Sign up
          </p>
           
          
        </div>
        {opensignUpModal && (
            <Signup
              onclose={() => setopensignUpModal(false)}
               onSwitchToSignin={() => {
                setopensignUpModal(false);
                setopensignInModal(true);
              }}
             
              />)}

               {opensignInModal && (
            <Signin 
              onclose={() => setopensignInModal(false)}
              onSwitchToSignup={() => {
                setopensignInModal(false);
                setopensignUpModal(true);
              }}
            />
          )}
       
     </div>
      </form>
      
    </div>
  );
};

export default VerifyEmail;
