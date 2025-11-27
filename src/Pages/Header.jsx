import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import emekaheaderlogo from "../assets/IMG_4853.JPG";
import CartModal from "../Components/Modal1";
import Modal4 from "../Components/Modal4";
import "./HeaderStyle.css";

const Header = ({ cartItems = [], setCartItems }) => {
  const [showModal, setShowModal] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      <header className="emeka_header">
        <div className="emeka_header_left">
          <img src={emekaheaderlogo} alt="Logo" className="emeka_header_logo" />
          <span className="location">
            <CiLocationOn className="emeka_location" /> Olodi Apapa
            <RiArrowDropDownLine className="emeka_dropdown" />
          </span>
        </div>

        <div className="emeka_header_right">
          <div className="search_container">
            <FaSearch className="search_icon" />
            <input
              type="text"
              placeholder="Search"
              className="emeka_search_bar"
            />
          </div>

          <div
            className="emeka_cart_container"
            onClick={() => setShowModal(true)}
          >
            <FaShoppingCart className="emeka_icon" />
            <span className="cart_count">{cartItems?.length || 0}</span>
          </div>

          <FaUser className="emeka_icon" onClick={() => setProfileOpen(true)} />
          {profileOpen ? (
            <div
              className="profile-dropdown"
              onMouseLeave={() => setProfileOpen(false)}
            >
              <Modal4 />
            </div>
          ) : null}
        </div>
      </header>

      {showModal && (
        <CartModal
          cartItems={cartItems}
          setCartItems={setCartItems}
          onClose={() => setShowModal(false)}
          onRemoveItem={(id) =>
            setCartItems((prev) => prev.filter((item) => item.id !== id))
          }
          onIncreaseQty={(id) =>
            setCartItems((prev) =>
              prev.map((item) =>
                item.id === id
                  ? { ...item, quantity: (item.quantity || 1) + 1 }
                  : item
              )
            )
          }
          onDecreaseQty={(id) =>
            setCartItems((prev) =>
              prev.map((item) =>
                item.id === id
                  ? { ...item, quantity: Math.max(1, (item.quantity || 1) - 1) }
                  : item
              )
            )
          }
        />
      )}
    </>
  );
};

export default Header;
