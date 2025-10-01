import React, { useState } from "react";
import cartmodalimage from "../assets/headerlogo.JPG";
import { IoCloseOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import CheckoutModal from "../components/Modal2"; 
import "./Modal1Style.css";

const CartModal = ({
  cartItems,
  setCartItems,
  onClose,
  onRemoveItem,
  onIncreaseQty,
  onDecreaseQty,
}) => {
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const handleRemove = (id) => onRemoveItem && onRemoveItem(id);
  const inc = (id) => onIncreaseQty && onIncreaseQty(id);
  const dec = (id) => onDecreaseQty && onDecreaseQty(id);

  const handleProceed = () => {
    if (cartItems.length > 0) {
      setShowCheckoutModal(true);
    }
  };

  const handleConfirmOrder = () => {
    setCartItems([]); 
    setShowCheckoutModal(false);
    onClose(); 
    alert("Order confirmed!");
  };

  const handleBackToCart = () => {
    setShowCheckoutModal(false); 
    
  };

  return (
    <>
      <div className="emeka_cart_modal_overlay" onClick={onClose}>
        <div
          className="emeka_cart_modal_container"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="emeka_cart_modal_header">
            <img src={cartmodalimage} alt="cartLogo" />
            <button className="emeka_modal_close_btn" onClick={onClose}>
              <IoCloseOutline />
            </button>
          </div>

          <div className="emeka_cart_modal_toprow">
            <h3 className="emeka_orders_title">Orders</h3>
            <span className="emeka_items_label">Item(s)</span>
          </div>

          <div className="emeka_cart_modal_content">
            {cartItems.length === 0 ? (
              <p className="emeka_empty_text">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="emeka_cart_item">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="emeka_cart_item_image"
                  />
                  <div className="emeka_cart_item_details">
                    <h4 className="emeka_cart_item_title">{item.title}</h4>
                    <p className="emeka_cart_item_price">
                      ₦{(item.price * (item.quantity || 1)).toFixed(2)}
                    </p>
                  </div>
                  <button
                    className="emeka_delete_icon_btn"
                    title="Remove item"
                    onClick={() => handleRemove(item.id)}
                  >
                    <RiDeleteBin6Line />
                  </button>
                  <div className="emeka_cart_item_quantity">
                    <button className="emeka_qty_btn" onClick={() => dec(item.id)}>
                      -
                    </button>
                    <span className="emeka_qty_value">{item.quantity}</span>
                    <button className="emeka_qty_btn" onClick={() => inc(item.id)}>
                      +
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="emeka_cart_modal_footer">
            <button className="emeka_proceed_btn" 
            onClick={handleProceed}
            disabled={cartItems.length === 0} 
            >
              Proceed
            </button>
            <button className="emeka_cancel_btn" onClick={onClose}>
              Cancel order
            </button>
          </div>
        </div>
      </div>

      {showCheckoutModal && (
        <CheckoutModal
          cartItems={cartItems}
          onClose={() => {
            setShowCheckoutModal(false);
            onClose(); 
          }}
          onProceed={handleConfirmOrder}
          onBack={handleBackToCart} 
        />
      )}
    </>
  );
};

export default CartModal;



















// import React from "react";
// import cartmodalimage from "../assets/headerlogo.JPG";
// import { IoCloseOutline } from "react-icons/io5";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import "./Modal1Style.css";

// const CartModal = ({
//   cartItems,
//   onClose,
//   onRemoveItem, 
//   onIncreaseQty, 
//   onDecreaseQty, 
// }) => {
//   const handleRemove = (id) => onRemoveItem && onRemoveItem(id);
//   const inc = (id) => onIncreaseQty && onIncreaseQty(id);
//   const dec = (id) => onDecreaseQty && onDecreaseQty(id);

//   return (
//     <div className="emeka_cart_modal_overlay" onClick={onClose}>
//       <div
//         className="emeka_cart_modal_container"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="emeka_cart_modal_header">
//           <img src={cartmodalimage} alt="cartLogo" />
//           <button className="emeka_modal_close_btn" onClick={onClose}>
//             <IoCloseOutline />
//           </button>
//         </div>

//         <div className="emeka_cart_modal_toprow">
//           <h3 className="emeka_orders_title">Orders</h3>
//           <span className="emeka_items_label">Item(s)</span>
//         </div>

//         <div className="emeka_cart_modal_content">
//           {cartItems.length === 0 ? (
//             <p className="emeka_empty_text">Your cart is empty.</p>
//           ) : (
//             cartItems.map((item) => (
//               <div key={item.id} className="emeka_cart_item">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="emeka_cart_item_image"
//                 />

//                 <div className="emeka_cart_item_details">
//                   <h4 className="emeka_cart_item_title">{item.title}</h4>
//                   <p className="emeka_cart_item_price">
//                     ₦{(item.price * (item.quantity || 1)).toFixed(2)}
//                   </p>
//                 </div>

//                 <button
//                   className="emeka_delete_icon_btn"
//                   title="Remove item"
//                   onClick={() => handleRemove(item.id)}
//                 >
//                   <RiDeleteBin6Line />
//                 </button>

//                 <div className="emeka_cart_item_quantity">
//                   <button className="qty_btn" onClick={() => dec(item.id)}>
//                     -
//                   </button>
//                   <span className="emeka_qty_value">{item.quantity}</span>
//                   <button className="emeka_qty_btn" onClick={() => inc(item.id)}>
//                     +
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         <div className="emeka_cart_modal_footer">
//           <button className="emeka_proceed_btn">Proceed</button>
//           <button className="emeka_cancel_btn" onClick={onClose}>
//             Cancel order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartModal;
