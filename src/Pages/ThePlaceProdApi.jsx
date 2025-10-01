import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ThePlaceProdApi.css";

const ThePlaceProdApi = ({ cartItems, setCartItems }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchGetProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchGetProducts();
  }, []);

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prev) => prev.filter((item) => item.id !== product.id));
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <div className="prod_product_grid">
      {products?.map((product) => (
        <div className="prod_product_card" key={product.id}>
          <div className="prod_image_wrapper">
            <img
              src={product.image}
              alt={product.title}
              className="prod_product_image"
            />
          </div>

          <div className="prod_title_wrapper">
            <h3 className="prod_product_title">{product.title}</h3>
          </div>

          <div className="prod_bottom_row">
            <p className="prod_product_price">₦{product.price}</p>
            {isInCart(product.id) ? (
              <button
                className="prod_to_cart_btn remove"
                onClick={() => handleRemoveFromCart(product)}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                className="prod_to_cart_btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThePlaceProdApi;







// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./ThePlaceProdApi.css";

// const ThePlaceProdApi = ({ cartItems, setCartItems }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchGetProducts = async () => {
//       try {
//         const response = await axios.get("https://fakestoreapi.com/products");
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchGetProducts();
//   }, []);

//   const handleAddToCart = (product) => {
//     setCartItems((prev) => [...prev, product]);
//   };

//   const handleRemoveFromCart = (product) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== product.id));
//   };

//   const isInCart = (id) => {
//     return cartItems.some((item) => item.id === id);
//   };

//   return (
//     <div className="prod_product_grid">
//       {products?.map((product) => (
//       <div className="prod_product_card" key={product.id}>
//   {/* IMAGE DIV */}
//   <div className="prod_image_wrapper">
//     <img
//       src={product.image}
//       alt={product.title}
//       className="prod_product_image"
//     />
//   </div>

//   {/* TITLE DIV */}
//   <div className="prod_title_wrapper">
//     <h3 className="prod_product_title">{product.title}</h3>
//   </div>

//   {/* PRICE + BUTTON DIV */}
//   <div className="prod_bottom_row">
//     <p className="prod_product_price">₦{product.price}</p>
//     {isInCart(product.id) ? (
//       <button
//         className="prod_to_cart_btn remove"
//         onClick={() => handleRemoveFromCart(product)}
//       >
//         Remove from Cart
//       </button>
//     ) : (
//       <button
//         className="prod_to_cart_btn"
//         onClick={() => handleAddToCart(product)}
//       >
//         Add to Cart
//       </button>
//     )}
//   </div>
// </div>
//       ))}
//     </div>
//   );
// };

// export default ThePlaceProdApi;
