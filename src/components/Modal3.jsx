import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaCreditCard, FaUniversity } from "react-icons/fa";
import logo from "../assets/headerlogo.JPG"; 
import "./Modal3Style.css";

const labelMap = {
  card: "Pay with card",
  transfer: "Pay with Bank Transfer",
  bank: "Pay with Bank",
};

const PaymentModal = ({ onClose, onSelect, initialSelection = null }) => {
  const [selected, setSelected] = useState(initialSelection);

  const handleChoose = () => {
    if (selected && onSelect) {
      onSelect(selected);
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="payment_modal_overlay" onClick={onClose}>
      <div className="payment_modal_container" onClick={(e) => e.stopPropagation()}>
        <div className="payment_modal_header">
  <div className="payment_header_top">
    <img
      src={logo}
      alt="Logo"
      className="payment_logo"
    />
    <button className="payment_close_btn" onClick={onClose}>
      <IoCloseOutline />
    </button>
  </div>

  <h4 className="payment_title">How would you like to pay?</h4>
</div>

        <div className="payment_options">
          <label className={`payment_option ${selected === "card" ? "active" : ""}`}>
            <div className="option_left">
              <FaCreditCard className="option_icon" />
              <span className="option_label">Pay with card</span>
            </div>
            <input
              type="radio"
              name="payment"
              value="card"
              checked={selected === "card"}
              onChange={() => setSelected("card")}
              aria-label="Pay with card"
            />
            <span className="fake_radio" aria-hidden />
          </label>

          <label className={`payment_option ${selected === "transfer" ? "active" : ""}`}>
            <div className="option_left">
              <FaUniversity className="option_icon" />
              <span className="option_label">Pay with Bank Transfer</span>
            </div>
            <input
              type="radio"
              name="payment"
              value="transfer"
              checked={selected === "transfer"}
              onChange={() => setSelected("transfer")}
              aria-label="Pay with Bank Transfer"
            />
            <span className="fake_radio" aria-hidden />
          </label>

          <label className={`payment_option ${selected === "bank" ? "active" : ""}`}>
            <div className="option_left">
              <FaUniversity className="option_icon" />
              <span className="option_label">Pay with Bank</span>
            </div>
            <input
              type="radio"
              name="payment"
              value="bank"
              checked={selected === "bank"}
              onChange={() => setSelected("bank")}
              aria-label="Pay with Bank"
            />
            <span className="fake_radio" aria-hidden />
          </label>
        </div>

        <div className="payment_footer">
          <button className="payment_choose_btn" onClick={handleChoose} disabled={!selected}>
            Choose Method
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;