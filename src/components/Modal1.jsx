import React from "react";
import cartmodalimage from "../assets/headerlogo.JPG";
import { IoCloseOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./Modal1Style.css";

const CartModal = ({
  cartItems,
  onClose,
  onRemoveItem, 
  onIncreaseQty, 
  onDecreaseQty, 
}) => {
  const handleRemove = (id) => onRemoveItem && onRemoveItem(id);
  const inc = (id) => onIncreaseQty && onIncreaseQty(id);
  const dec = (id) => onDecreaseQty && onDecreaseQty(id);

  return (
    <div className="cart_modal_overlay" onClick={onClose}>
      <div
        className="cart_modal_container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart_modal_header">
          <img src={cartmodalimage} alt="cartLogo" />
          <button className="close_btn" onClick={onClose}>
            <IoCloseOutline />
          </button>
        </div>

        <div className="cart_modal_toprow">
          <h3 className="orders_title">Orders</h3>
          <span className="items_label">Item(s)</span>
        </div>

        <div className="cart_modal_content">
          {cartItems.length === 0 ? (
            <p className="empty_text">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart_item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart_item_image"
                />

                <div className="cart_item_details">
                  <h4 className="cart_item_title">{item.title}</h4>
                  <p className="cart_item_price">
                    ₦{(item.price * (item.quantity || 1)).toFixed(2)}
                  </p>
                </div>

                <button
                  className="delete_icon_btn"
                  title="Remove item"
                  onClick={() => handleRemove(item.id)}
                >
                  <RiDeleteBin6Line />
                </button>

                <div className="cart_item_quantity">
                  <button className="qty_btn" onClick={() => dec(item.id)}>
                    -
                  </button>
                  <span className="qty_value">{item.quantity}</span>
                  <button className="qty_btn" onClick={() => inc(item.id)}>
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart_modal_footer">
          <button className="proceed_btn">Proceed</button>
          <button className="cancel_btn" onClick={onClose}>
            Cancel order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
