
import React, { useState } from "react";
import "./Signup.css";
import { MdOutlineCancel, MdOutlineMail } from "react-icons/md";
import VerifyEmail from "./VerifyEmail";
import { data, Navigate, useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";

const Signup = ({ onclose, onSwitchToSignin }) => {
  const [showModal, setModal] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    console.log("clicked");
    setModal(!showModal);
  };
  const navigate = useNavigate()
  const [user, setUser] =useState({
    firstName: "",
    lastName:"",
    email:"",
    phone:""
  })
  const [loading, setloading] = useState(false);
  const [error, setError] = useState({});

  const validateForm = async (e) => {
  e.preventDefault();

  let newErr = {};

  if (!user.firstName.trim()) {
    newErr.firstName = "First name is required";
  }
  if (!user.lastName.trim()) {
    newErr.lastName = "Last name is required";
  }
  if (!user.email) {
    newErr.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
    newErr.email = "Invalid format";
  }
  if (!/^\d+$/.test(user.phone)) {
    newErr.phone = "Phone number must contain only digits";
  } else if (user.phone.length !== 11) {
    newErr.phone = "11 digit phone number is required";
  }

  setError(newErr);

  // Stop if there are validation errors
  if (Object.keys(newErr).length > 0) return;

  //  Call your API if validation passes
  setloading(true);
  try {
    const res = await axios.post(
      "https://dawneats-backend.onrender.com/api/v1/auth/signup",
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("API success:", res.data);

    //  Clear form
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });

    //  Show VerifyEmail modal
    setModal(true);

  } catch (error) {
    console.error("API error:", error.response?.data || error.message);
    alert(error.response?.data?.message || "Something went wrong!");
  } finally {
    setloading(false);
  }
};

 
  return (
    <>

      {showModal ? (
        <VerifyEmail onclose={onclose} />
      ) : (
        <div className="form-wrapper">
          <form className="form-holder"  onSubmit={validateForm}>
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
                  type="text"
                  onChange={(e) =>
            setUser({ ...user, firstName: e.target.value })
          }
                />
              </div>
               {error.firstName && <p style={{ color: "red" }}>{error.firstName}</p>}


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
                  type="text"
                  onChange={(e) =>
            setUser({ ...user, lastName: e.target.value })
          }
                />
              </div>
               {error.lastName && <p style={{ color: "red" }}>{error.lastName}</p>}

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
                  type="email"
                  onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
                />
              </div>
               {error.email && <p style={{ color: "red" }}>{error.email}</p>}

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
                  onChange={(e) =>
            setUser({ ...user, phone: e.target.value })
          }
                />
              </div>
               {error.phone && <p style={{ color: "red" }}>{error.phone}</p>}

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
                type="submit"
                // onClick={handleOpen}
              >
                {loading ? <span>Signning....</span> : <span>Sign Up</span>}
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
