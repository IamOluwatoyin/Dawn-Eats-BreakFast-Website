import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import "./OrdersModal.css";

const OrdersModal = ({ onClose, deliveredOrder }) => {
  return (
    <div className="orders_modal_overlay" onClick={onClose}>
      <div
        className="orders_modal_container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="orders_modal_header">
          <button
            className="orders_close_btn"
            onClick={onClose}
            aria-label="Close"
          >
            <IoCloseOutline size={24} />
          </button>
          <h2 className="orders_modal_title">Close</h2>
        </div>

        <div className="orders_modal_content">
          <h3 className="orders_section_title">Orders</h3>
          
          {deliveredOrder ? (
            <div className="orders_delivered_section">
              <h4 className="orders_subsection_title">Delivered</h4>
              
              <div className="order_card">
                <div className="order_card_header">
                  <div className="order_info">
                    <h5 className="order_restaurant">{deliveredOrder.restaurant}</h5>
                    <p className="order_delivery_info">
                      Order delivered by {deliveredOrder.deliveryTime}
                    </p>
                    <p className="order_id">Order #{deliveredOrder.orderId}</p>
                  </div>
                  <div className="order_amount">#{deliveredOrder.amount}</div>
                </div>

                <div className="order_items">
                  {deliveredOrder.items && deliveredOrder.items.map((item, index) => (
                    <p key={index} className="order_item">
                      {item.quantity}x {item.name}
                    </p>
                  ))}
                </div>

                {(deliveredOrder.restaurantContact || deliveredOrder.riderContact) && (
                  <div className="order_contacts">
                    {deliveredOrder.restaurantContact && (
                      <div className="contact_row">
                        <span className="contact_label">Restaurant contact</span>
                        <span className="contact_value">{deliveredOrder.restaurantContact}</span>
                      </div>
                    )}
                    {deliveredOrder.riderContact && (
                      <div className="contact_row">
                        <span className="contact_label">Rider's contact</span>
                        <span className="contact_value">{deliveredOrder.riderContact}</span>
                      </div>
                    )}
                  </div>
                )}

                <button className="reorder_btn">Reorder items</button>
              </div>
            </div>
          ) : (
            <div className="empty_orders_state">
              <p>No orders found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersModal;