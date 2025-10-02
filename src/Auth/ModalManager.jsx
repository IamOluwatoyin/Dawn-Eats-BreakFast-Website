import { useState } from "react";
import VerifyEmail from "./VerifyEmail";
import Signup from "./Signup";
import Signin from "./Signin";

const ModalManager = ({ onclose }) => {
  const [activeModal, setActiveModal] = useState("verify");
  // possible values: "verify" | "signup" | "signin"

  if (activeModal === "signup") {
    return (
      <Signup
        onclose={onclose}
        onSwitchToSignin={() => setActiveModal("signin")}
        onSwitchToVerify={() => setActiveModal("verify")}
      />
    );
  }

  if (activeModal === "signin") {
    return (
      <Signin
        onclose={onclose}
        onSwitchToSignup={() => setActiveModal("signup")}
        onSwitchToVerify={() => setActiveModal("verify")}
      />
    );
  }

  return (
    <VerifyEmail
      onclose={onclose}
      onSwitchToSignup={() => setActiveModal("signup")}
      onSwitchToSignin={() => setActiveModal("signin")}
    />
  );
};

export default ModalManager;
