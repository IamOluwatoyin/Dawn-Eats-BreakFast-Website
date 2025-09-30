import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5"; // Back arrow icon
import "./Modal2Style.css";

const CheckoutModal = ({ cartItems, onClose, onProceed, onBack }) => {
  // Calculate subtotal based on cart items
  const subtotal = cartItems
    .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
    .toFixed(2);
  const deliveryFee = 1000; // Fixed delivery fee as per screenshot
  const serviceFee = 500; // Fixed service fee as per screenshot
  const total = (parseFloat(subtotal) + deliveryFee + serviceFee).toFixed(2);

  return (
    <div className="checkout_modal_overlay" onClick={onClose}>
      <div
        className="checkout_modal_container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="checkout_modal_header">
          <button className="back_btn" onClick={onBack}>
            <IoArrowBack />
          </button>
          <h2>Review your address and place your order</h2>
          <button className="close_btn" onClick={onClose}>
            <IoCloseOutline />
          </button>
        </div>

        <div className="checkout_modal_content">
          <div className="checkout_options">
            <span>🏠 Choose your payment type</span>
            <button className="option_btn">Choose</button>
            <span>📍 Change your address</span>
            <button className="option_btn">Change</button>
          </div>

          <div className="checkout_instructions">
            <label>Delivery Instruction</label>
            <select>
              <option value="">Select instruction</option>
              {/* Add options as needed */}
            </select>
            <label>Vendor note</label>
            <select>
              <option value="">Add note</option>
              {/* Add options as needed */}
            </select>
          </div>

          <div className="order_summary">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <div className="summary_item">
                  <span>Subtotal ({cartItems.length} item{cartItems.length !== 1 ? "s" : ""})</span>
                  <span>₦{subtotal}</span>
                </div>
                <div className="summary_item">
                  <span>Delivery fee</span>
                  <span>₦{deliveryFee}</span>
                </div>
                <div className="summary_item">
                  <span>Service fee</span>
                  <span>₦{serviceFee}</span>
                </div>
                <div className="summary_item total">
                  <span>Total</span>
                  <span>₦{total}</span>
                </div>
              </>
            )}
          </div>

          <div className="checkout_modal_footer">
            <button className="proceed_btn" onClick={onProceed} disabled={cartItems.length === 0}>
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;