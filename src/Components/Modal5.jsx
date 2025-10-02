import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RiShieldCheckFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import logo from "../assets/headerlogo.JPG"; 
import "./Modal5Style.css";
import OrderConfirmationModal from "./Modal6";

const BankTransferModal = ({ amount = "0.00", onClose }) => {
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const numericAmount = Number(amount);
  const displayAmount = !Number.isNaN(numericAmount)
    ? numericAmount.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : amount;

  const staticEmail = "john@gmail.com";
  const accountName = "Paystack Titan";
  const accountNumber = "1234567890";

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(String(text));
    } catch (err) {}
  };

  const handleIveSent = () => {
    setShowConfirmation(true);
  };
  
  return (
  <>
    {!showConfirmation ? (
     
      <div className="bank_modal_overlay" onClick={onClose}>
        <div
          className="bank_modal_container"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="bank_close_btn"
            onClick={(e) => {
              e.stopPropagation();
              onClose && onClose();
            }}
            aria-label="Close"
          >
            <IoCloseOutline />
          </button>

          <div className="bank_modal_header">
            <div className="bank_modal_logo_wrap">
              <img src={logo} alt="Logo" className="bank_logo" />
            </div>
            <div className="bank_modal_header_right">
              <p className="bank_user_email">{staticEmail}</p>
              <div className="bank_amount_row">
                <div className="bank_header_text">
                  Pay <span className="bank_amount_currency">NGN</span>{" "}
                  <span className="bank_amount_value">{displayAmount}</span>
                </div>
              </div>
            </div>
          </div>

          <hr className="bank_divider" />

          <div className="bank_modal_content">
            <p className="bank_instruction">
              Transfer to Paystack Checkout using the details below:
            </p>

            <div className="bank_details_box">
              <div className="bank_detail_row">
                <div className="bank_detail_text">
                  <span className="bank_label">Account Name</span>
                  <strong className="bank_value">{accountName}</strong>
                </div>
              </div>

              <div className="bank_detail_row">
                <div className="bank_detail_text">
                  <span className="bank_label">Account Number</span>
                  <strong className="bank_value">{accountNumber}</strong>
                </div>
                <button
                  className="detail_icon_btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    copyToClipboard(accountNumber);
                  }}
                >
                  <TbCopy />
                </button>
              </div>

              <div className="bank_detail_row">
                <div className="bank_detail_text">
                  <span className="bank_label">Amount</span>
                  <strong className="bank_value">{displayAmount}</strong>
                </div>
                <button
                  className="detail_icon_btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    copyToClipboard(amount);
                  }}
                >
                  <TbCopy />
                </button>
              </div>
            </div>
          </div>

          <hr className="bank_divider thin" />

          <p className="bank_expiry_note">
            This account is for this transaction only and expires in{" "}
            <span className="bank_expiry_time">30 mins</span>
          </p>

          <div className="bank_actions">
            <button
              className="bank_sent_btn"
              onClick={(e) => {
                e.stopPropagation();
                handleIveSent();
              }}
            >
              I’ve sent the money
            </button>
          </div>
        </div>

        <p className="secured_text">
          <RiShieldCheckFill className="secured_icon" />
          Secured with Paystack
        </p>
      </div>
    ) : (
      
      <OrderConfirmationModal
        onClose={() => {
          setShowConfirmation(false);
          onClose && onClose(); 
        }}
        onViewOrder={() => setIsOrderCompleted(true)}
      />
    )}
  </>
);
};

export default BankTransferModal;
