import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { GrStatusGood } from "react-icons/gr"; 
import { MdOutlineDone } from "react-icons/md";
import logo from "../assets/headerlogo.JPG"; 
import "./Modal6Style.css";

const OrderConfirmationModal = ({ onClose, onViewOrder }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="order_conf_modal_overlay" onClick={onClose}>
      <div
        className="order_conf_modal_container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="order_conf_modal_header">
          <div className="order_conf_modal_logo_wrap">
            <img src={logo} alt="Logo" className="order_conf_logo" />
          </div>
          <button
            className="order_conf_close_btn"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close"
          >
            <IoCloseOutline />
          </button>
        </div>

        <div className="order_conf_confirmation_content">
          <div className="order_conf_loading_circle_wrapper">
            {isLoading ? (
              <div className="order_conf_loading_circle">
                <div className="order_conf_loading_spinner"></div>
              </div>
            ) : (
              <div className="order_conf_completion_circle">
                <MdOutlineDone size={70} className="order_conf_completion_icon"/> 
              </div>
            )}
            {!isLoading && (
              <p className="order_conf_completion_text">Order Completed</p>
            )}
          </div>
          {!isLoading && (
            <button
              className="order_conf_view_order_btn"
              onClick={(e) => {
                e.stopPropagation();
                onViewOrder();
              }}
            >
              View Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;