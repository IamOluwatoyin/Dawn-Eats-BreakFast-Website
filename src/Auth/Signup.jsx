
import React, { useState } from "react";
import "./Signup.css";
import { MdOutlineCancel, MdOutlineMail } from "react-icons/md";
import VerifyEmail from "./VerifyEmail";
import { data, Navigate, useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import { toast } from "react-toastify";

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
  const BaseUrl = import.meta.env.VITE_BaseUrl

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
  } else if (user.phone.length !== 10) {
    newErr.phone = "10 digit phone number is required";
  }

  setError(newErr);

  // Stop if there are validation errors comment by Toyin
  if (Object.keys(newErr).length > 0) return;

  //  Call your API if validation passes comment by Toyin
  setloading(true);
  try {
    const res = await axios.post(
      `${BaseUrl}/auth/signup`,
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
     toast.success("Sign up successfully")
    console.log("API success:", res.data);

   
     const userId = res.data?.data?._id;

   
    localStorage.setItem("pendingUserId", userId);
    localStorage.setItem("pendingEmail", user.email); 
    //  Show VerifyEmail modal
    setModal(true);

  } catch (err) {
    console.error("API error:", err.response?.data || err.message);
    toast.error(err.response?.data?.message || "Something went wrong!");
  } finally {
    setloading(false);
  }
};

 
  return (
    <>

      {showModal ? (
        <VerifyEmail onclose={onclose} userId={localStorage.getItem("pendingUserId")}
      email={localStorage.getItem("pendingEmail")}/>
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
                  color:"#FF6E00"
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
                  color:"#FF6E00"
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
              <h5 style={{ color:"#FF6E00", }}>Email Address</h5>
              <div
                style={{
                  width: "100%",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid black ",
                  borderRadius: "8px",
                  padding: " 0 10px",
                  gap:"10px"
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
              <h5 style={{color:"#FF6E00"}}>Phone Number</h5>
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
                  background:"#FF6E00"
                }}
                type="submit"
                // onClick={handleOpen}
              >
                {loading ? <span>loading....</span> : <span>Sign Up</span>}
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
