import React, { useState } from "react";
import { MdOutlineCancel, MdOutlineMail } from "react-icons/md";
import "./VerifyEmail.css";
import Signup from "./Signup";
import Signin from "./Signin";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const VerifyEmail = ({ onclose, userId, email }) => {
  const [opensignUpModal, setopensignUpModal] = useState(false);
  const [opensignInModal, setopensignInModal] = useState(false);

  const [c1, setC1] = useState("");
  const [c2, setC2] = useState("");
  const [c3, setC3] = useState("");
  const [c4, setC4] = useState("");
  const navigate = useNavigate();

  const input1 = React.useRef();
  const input2 = React.useRef();
  const input3 = React.useRef();
  const input4 = React.useRef();

  const handleInput = (e, setter, nextInput) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;
    setter(value);
    if (value && nextInput) nextInput.current.focus();
  };

  const handleBackspace = (e, prevInput) => {
    if (e.key === "Backspace" && !e.target.value && prevInput) {
      prevInput.current.focus();
    }
  };

  const otpStyle = {
    display: "flex",
    borderRadius: "8px",
    width: "80px",
    border: "1px solid black",
    height: "80px",
    textAlign: "center",
    fontSize: "20px"
  };


  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const otp = `${c1}${c2}${c3}${c4}`;

  const handleClick = async () => {
    try {
      const res = await axios.post(`${BaseUrl}/auth/verify-otp/${userId}`, {
        otp,
      });

       console.log("VERIFY RESPONSE:", res.data);

         if (!res.data?.token) {
      toast.error("Verification successful but token missing. Cannot login.");
      return;
    }
      localStorage.setItem("userId", res.data.data._id);
      localStorage.setItem("token", res.data.token);
      toast.success("Email verified successfully!");

      navigate("/Dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
      console.error("API error:", error.response?.data || error.message);
    }
  };
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
            justifyContent: "center",
            height: "100%",
          }}
        >
          <input
            ref={input1}
            maxLength={1}
            value={c1}
            onChange={(e) => handleInput(e, setC1, input2)}
            onKeyDown={(e) => handleBackspace(e, input1, null)}
            style={otpStyle}
          />

          <input
            ref={input2}
            maxLength={1}
            value={c2}
            onChange={(e) => handleInput(e, setC2, input3)}
            onKeyDown={(e) => handleBackspace(e, input1, input1)}
            style={otpStyle}
          />

          <input
            ref={input3}
            maxLength={1}
            value={c3}
            onChange={(e) => handleInput(e, setC3, input4)}
            onKeyDown={(e) => handleBackspace(e, input2, input2)}
            style={otpStyle}
          />

          <input
            ref={input4}
            maxLength={1}
            value={c4}
            onChange={(e) => handleInput(e, setC4, null)}
            onKeyDown={(e) => handleBackspace(e, input3, input3)}
            style={otpStyle}
          />
        </div>

        <div
          style={{
            width: "60%",
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
              cursor: "pointer",
              background: "orange",
            }}
            onClick={handleClick}
            type="button"
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
              style={{
                color: "orange",
                textDecoration: "none",
                cursor: "pointer",
              }}
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
            />
          )}

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
