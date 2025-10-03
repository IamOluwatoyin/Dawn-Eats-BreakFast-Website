import React, { useState } from "react";
import { MdOutlineCancel, MdOutlineMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signin.css";
import VerifyEmail from "./VerifyEmail";

const Signin = ({ onclose, onSwitchToSignup }) => {
  const [showModal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErr = {};

    if (!email.trim()) {
      newErr.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErr.email = "Invalid email format";
    }

    setError(newErr);

    // stop if validation fails
    if (Object.keys(newErr).length > 0) return;

    setLoading(true);

    try {
      const res = await axios.post(
        "https://dawneats-backend.onrender.com/api/v1/auth/signin",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("SUCCESS:", res.data);

      // store user and token
      localStorage.setItem("userId", res.data.data._id);
      localStorage.setItem("token", res.data.token);

      // ✅ open verify email modal
      setModal(true);

    } catch (error) {
      console.error("API error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showModal ? (
        <VerifyEmail onclose={onclose} />
      ) : (
        <div className="Signin-wrapper">
          <form className="signin-holder" onSubmit={handleSubmit}>
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

            {/* Email Input */}
            <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "8px" }}>
              <h5>Email Address</h5>
              <div
                style={{
                  width: "100%",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid black",
                  borderRadius: "8px",
                  padding: "0 10px",
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
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {error.email && <p style={{ color: "red" }}>{error.email}</p>}
            </div>

            {/* Submit Button */}
            <div style={{ width: "100%", marginTop: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <button
                style={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "8px",
                  padding: "10px",
                  cursor: "pointer",
                }}
                type="submit"
              >
                {loading ? <span>Signing in...</span> : <span>Sign In</span>}
              </button>
            </div>

            {/* Switch to Signup */}
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
                Sign up
              </p>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Signin;
