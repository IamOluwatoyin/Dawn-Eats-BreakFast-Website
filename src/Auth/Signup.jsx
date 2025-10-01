import React, { useState } from "react";
import "./Signup.css";
import { MdOutlineCancel, MdOutlineMail } from "react-icons/md";
import VerifyEmail from "./VerifyEmail";

const Signup = ({ onclose, onSwitchToSignin }) => {
  const [showModal, setModal] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    console.log("clicked");
    setModal(!showModal);
  };

  return (
    <>
      {showModal ? (
        <VerifyEmail onclose={onclose} />
      ) : (
        <div className="form-wrapper">
          <form className="form-holder">
            <div onClick={() => onclose()} className="modal-cancel">
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
              <h1>Sign Up</h1>
              <span style={{ color: "grey" }}>sign up to continue</span>
            </div>

            <div
              style={{
                width: "100%",
                height: "80px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "45%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <h5>First Name</h5>
                <input
                  style={{
                    width: "100%",
                    height: "45px",
                    borderRadius: "8px",
                    padding: "10px",
                  }}
                />
              </div>

              <div
                style={{
                  width: "45%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <h5> Last Name</h5>
                <input
                  style={{
                    width: "100%",
                    height: "45px",
                    borderRadius: "8px",
                    padding: "10px",
                  }}
                />
              </div>
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
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginTop: "20px",
              }}
            >
              <h5>Phone Number</h5>
              <div
                style={{
                  width: "100%",
                  height: "45px",
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid black ",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 12px",
                    gap: "8px",
                    height: "100%",
                  }}
                >
                  <p style={{ borderRight: "2px solid black", padding: "5px" }}>
                    NG
                  </p>
                  <p>234</p>
                </div>
                <input
                  style={{
                    flex: "1",
                    height: "100%",
                    outline: "none",
                    border: "none",
                    padding: "0 10px",
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
                  height: "45px",
                  borderRadius: "8px",
                  padding: "10px",
                  cursor: "pointer",
                }}
                onClick={handleOpen}
              >
                Sign Up
              </button>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "8px",
                marginTop: "20px",
              }}
            >
              <p style={{ color: "grey" }}>Have an account?</p>

              <p
                style={{
                  color: "orange",
                  textDecoration: "none",
                  cursor: "pointer",
                  marginBottom: "20px",
                }}
                onClick={onSwitchToSignin}
              >
                {" "}
                Sign in
              </p>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Signup;
