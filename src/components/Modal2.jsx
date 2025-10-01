import React, { useState } from "react";
import { IoCloseOutline, IoArrowBack, IoChevronDown } from "react-icons/io5";
import { FaUniversity } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Modal2Style.css";
import PaymentModal from "../components/Modal3"; 

const CheckoutModal = ({ cartItems, onClose, onProceed, onBack }) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const subtotal = cartItems
    .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
    .toFixed(2);
  const deliveryFee = 1000;
  const serviceFee = 500;
  const total = (parseFloat(subtotal) + deliveryFee + serviceFee).toFixed(2);

  const labelMap = {
    card: "Pay with card",
    transfer: "Pay with Bank Transfer",
    bank: "Pay with Bank",
  };

  return (
    <div className="checkout_modal_overlay" onClick={onClose}>
      <div className="checkout_modal_container" onClick={(e) => e.stopPropagation()}>
        <div className="checkout_modal_header">
          <div className="checkout_header_icons">
            <button className="checkout_back_btn" onClick={onBack}>
              <IoArrowBack />
            </button>
            <button className="checkout_close_btn" onClick={onClose}>
              <IoCloseOutline />
            </button>
          </div>
          <h4>Review your address and place your order</h4>
        </div>

        <div className="checkout_modal_content">
          <div className="checkout_options">
            <div className="checkout_option_row">
              <span>
                <FaUniversity /> Choose your payment type
              </span>
              <button
                className="checkout_option_btn"
                onClick={() => setShowPaymentModal(true)}
              >
                {selectedPaymentMethod ? labelMap[selectedPaymentMethod] : "Choose"}
              </button>
            </div>

            <div className="checkout_option_row" style={{ marginTop: "10px" }}>
              <span>
                <FaMapMarkerAlt /> Change your address
              </span>
              <button className="checkout_option_btn">Change</button>
            </div>

            <div className="checkout_option_row" style={{ marginTop: "10px" }}>
              <span>Delivery Instruction</span>
              <div className="checkout_custom_dropdown">
                <div className="checkout_dropdown_header disabled">
                  <IoChevronDown />
                </div>
              </div>
            </div>
            <div className="checkout_option_row" style={{ marginTop: "10px" }}>
              <span>Vendor note</span>
              <div className="checkout_custom_dropdown">
                <div className="checkout_dropdown_header disabled">
                  <IoChevronDown />
                </div>
              </div>
            </div>
            <hr className="checkout_separator" />
          </div>

          <div className="checkout_order_summary">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <div className="checkout_summary_item">
                  <span>Subtotal ({cartItems.length} item{cartItems.length !== 1 ? "s" : ""})</span>
                  <span>₦{subtotal}</span>
                </div>
                <div className="checkout_summary_item">
                  <span>Delivery fee</span>
                  <span>₦{deliveryFee}</span>
                </div>
                <div className="checkout_summary_item">
                  <span>Service fee</span>
                  <span>₦{serviceFee}</span>
                </div>
                <div className="checkout_summary_item total">
                  <span>Total</span>
                  <span>₦{total}</span>
                </div>
              </>
            )}
          </div>

          <div className="checkout_modal_footer">
            <button className="checkout_proceed_btn" onClick={onProceed} disabled={cartItems.length === 0}>
              Proceed
            </button>
            <button className="checkout_cancel_btn" onClick={onClose} disabled={cartItems.length === 0}>
              Cancel order
            </button>
          </div>
        </div>
      </div>

      {showPaymentModal && (
        <PaymentModal
          initialSelection={selectedPaymentMethod}
          onClose={() => setShowPaymentModal(false)}
          onSelect={(method) => {
            setSelectedPaymentMethod(method);
            setShowPaymentModal(false);
          }}
        />
      )}
    </div>
  );
};

export default CheckoutModal;


















// import React from "react";
// import { IoCloseOutline } from "react-icons/io5";
// import { IoArrowBack } from "react-icons/io5"; 
// import { IoChevronDown } from "react-icons/io5"; 
// import { FaUniversity } from "react-icons/fa"; 
// import { FaMapMarkerAlt } from "react-icons/fa"; 
// import "./Modal2Style.css";

// const CheckoutModal = ({ cartItems, onClose, onProceed, onBack }) => {
  
//   const subtotal = cartItems
//     .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
//     .toFixed(2);
//   const deliveryFee = 1000; 
//   const serviceFee = 500; 
//   const total = (parseFloat(subtotal) + deliveryFee + serviceFee).toFixed(2);

//   return (
//     <div className="checkout_modal_overlay" onClick={onClose}>
//       <div
//         className="checkout_modal_container"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="checkout_modal_header">
//           <div className="checkout_header_icons">
//             <button className="checkout_back_btn" onClick={onBack}>
//               <IoArrowBack />
//             </button>
//             <button className="checkout_close_btn" onClick={onClose}>
//               <IoCloseOutline />
//             </button>
//           </div>
//           <h4>Review your address and place your order</h4>
//         </div>

//         <div className="checkout_modal_content">
//           <div className="checkout_options">
//             <div className="checkout_option_row">
//               <span>
//                 <FaUniversity /> Choose your payment type
//               </span>
//               <button className="checkout_option_btn">Choose</button>
//             </div>
//             <div className="checkout_option_row" style={{ marginTop: "10px" }}>
//               <span>
//                 <FaMapMarkerAlt /> Change your address
//               </span>
//               <button className="checkout_option_btn">Change</button>
//             </div>
//             <div className="checkout_option_row" style={{ marginTop: "10px" }}>
//               <span>Delivery Instruction</span>
//               <div className="checkout_custom_dropdown">
//                 <div className="checkout_dropdown_header disabled">
//                   <IoChevronDown />
//                 </div>
//               </div>
//             </div>
//             <div className="checkout_option_row" style={{ marginTop: "10px" }}>
//               <span>Vendor note</span>
//               <div className="checkout_custom_dropdown">
//                 <div className="checkout_dropdown_header disabled">
//                   <IoChevronDown />
//                 </div>
//               </div>
//             </div>
//             <hr className="checkout_separator" /> 
//           </div>

//           <div className="checkout_order_summary">
//             {cartItems.length === 0 ? (
//               <p>Your cart is empty.</p>
//             ) : (
//               <>
//                 <div className="checkout_summary_item">
//                   <span>Subtotal ({cartItems.length} item{cartItems.length !== 1 ? "s" : ""})</span>
//                   <span>₦{subtotal}</span>
//                 </div>
//                 <div className="checkout_summary_item">
//                   <span>Delivery fee</span>
//                   <span>₦{deliveryFee}</span>
//                 </div>
//                 <div className="checkout_summary_item">
//                   <span>Service fee</span>
//                   <span>₦{serviceFee}</span>
//                 </div>
//                 <div className="checkout_summary_item total">
//                   <span>Total</span>
//                   <span>₦{total}</span>
//                 </div>
//               </>
//             )}
//           </div>

//           <div className="checkout_modal_footer">
//             <button className="checkout_proceed_btn" onClick={onProceed} disabled={cartItems.length === 0}>
//               Proceed
//             </button>
//             <button className="checkout_cancel_btn" onClick={onClose} disabled={cartItems.length === 0}>
//               Cancel order
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutModal;