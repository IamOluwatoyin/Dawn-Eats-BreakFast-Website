import React, { useState, useEffect } from "react";
import "./ThePlaceProdApi.css";

const ThePlaceProdApi = ({ cartItems, setCartItems }) => {
  const [products, setProducts] = useState([]);

  const breakfast = [
    { id: 1, name: "Oatmeal (with blueberry and toppings)", price: 2000, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419441/Frame_51_hjxaei.png" },
    { id: 2, name: "Akara (bean cake) and pap with milk", price: 2500, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419433/Frame_51_1_qddoqr.png" },
    { id: 3, name: "Moi moi with eggs", price: 1000, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419433/Frame_51_2_izidit.png" },
    { id: 4, name: "Fluffy scrambled eggs and toast bread", price: 3000, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419433/Frame_51_3_re7nbb.png" },
    { id: 5, name: "Spicy chicken breast", price: 4000, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419434/Frame_51_4_g2syby.png" },
    { id: 6, name: "Pancakes", price: 3000, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419434/Frame_51_5_hufrom.png" },
    { id: 7, name: "Fried eggs and fried plantain", price: 1500, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419434/Frame_51_6_fg6bk0.png" },
    { id: 8, name: "Coconut curry rice and grilled chicken", price: 5500, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419434/Frame_51_7_qsryfs.png" },
    { id: 9, name: "Crispy chicken salad and eggs", price: 5000, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419435/Frame_51_8_wucgci.png" },
    { id: 10, name: "Fruit salad", price: 2000, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419434/Frame_51_9_r6u2bv.png" },
    { id: 12, name: "Fried chicken", price: 3000, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419440/Frame_51_13_vcskdn.png" },
    { id: 11, name: "Ewa agoyin and bread", price: 2000, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419435/Frame_51_11_byc6iw.png" },
    { id: 13, name: "Bread and akara", price: 1500, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419440/Frame_51_12_fffnka.png" },
    { id: 14, name: "White rice, stew and chicken", price: 3000, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419440/Frame_51_13_vcskdn.png" },
    { id: 15, name: "Oatmeal with peanut butter", price: 2000, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419440/Frame_51_14_ynycnc.png" },
    { id: 16, name: "Tasty grilled fish", price: 3000, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419441/Frame_51_15_lkdcrh.png" },
  ];

  useEffect(() => {
    setProducts(breakfast);
  }, []);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prev) => prev.filter((item) => item.id !== product.id));
  };

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <div className="prod_product_grid">
      {products.map((product) => (
        <div className="prod_product_card" key={product.id}>
          <div className="prod_image_wrapper">
            <img
              src={product.image}
              alt={product.name}
              className="prod_product_image"
            />
          </div>

          <div className="prod_title_wrapper">
            <h3 className="prod_product_title">{product.name}</h3>
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

//   const breakfast = [
//   { id: 1, name: "Oatmeal (with blueberry and toppings)", price: 2000, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419433/Frame_51_1_qddoqr.png" },
//   { id: 2, name: "Moi moi with eggs", price: 1500, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419433/Frame_51_3_re7nbb.png" },
//   { id: 3, name: "Fluffy scrambled eggs and toast bread", price: 3000, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419434/Frame_51_4_g2syby.png" },
//   { id: 4, name: "Spicy chicken breast", price: 4000, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419434/Frame_51_5_hufrom.png" },
//   { id: 5, name: "Pancakes", price: 2200, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419434/Frame_51_6_fg6bk0.png" },
//   { id: 6, name: "Fried eggs and fried plantain", price: 1500, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419434/Frame_51_7_qsryfs.png" },
//   { id: 7, name: "Coconut curry rice and grilled chicken", price: 5500, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419435/Frame_51_8_wucgci.png" },
//   { id: 8, name: "Crispy chicken salad and eggs", price: 5000, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419434/Frame_51_9_r6u2bv.png" },
//   { id: 9, name: "Fruit salad", price: 2000, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419435/Frame_51_10_km8013.png" },
//   { id: 10, name: "Fried chicken", price: 3000, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419435/Frame_51_11_byc6iw.png" },
//   { id: 11, name: "Ewa agoyin and bread", price: 2000, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419440/Frame_51_12_fffnka.png" },
//   { id: 12, name: "Bread and akara", price: 1500, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419440/Frame_51_13_vcskdn.png" },
//   { id: 13, name: "White rice, stew and chicken", price: 3000, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419440/Frame_51_14_ynycnc.png" },
//   { id: 14, name: "Oatmeal with peanut butter", price: 2000, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419441/Frame_51_15_lkdcrh.png" },
//   { id: 15, name: "Tasty grilled fish", price: 3000, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419441/Frame_51_hjxaei.png" },
//   { id: 16, name: "Akara (bean cake) and pap with milk", price: 2500, image: "https://res.cloudinary.com/ddv0ffqnj/image/upload/v1759419433/Frame_51_1_qddoqr.png" },
// ];

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

//  const handleAddToCart = (product) => {
//   setCartItems((prev) => {
//     const exists = prev.find((item) => item.id === product.id);
//     if (exists) {
//       return prev.map((item) =>
//         item.id === product.id
//           ? { ...item, quantity: (item.quantity || 1) + 1 }
//           : item
//       );
//     }
//     return [...prev, { ...product, quantity: 1 }];
//   });
// };
//   const handleRemoveFromCart = (product) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== product.id));
//   };

//   const isInCart = (id) => {
//     return cartItems.some((item) => item.id === id);
//   };

//   return (
//     <div className="prod_product_grid">
//       {products?.map((product) => (
//         <div className="prod_product_card" key={product.id}>
//           <div className="prod_image_wrapper">
//             <img
//               src={product.image}
//               alt={product.title}
//               className="prod_product_image"
//             />
//           </div>

//           <div className="prod_title_wrapper">
//             <h3 className="prod_product_title">{product.title}</h3>
//           </div>

//           <div className="prod_bottom_row">
//             <p className="prod_product_price">₦{product.price}</p>
//             {isInCart(product.id) ? (
//               <button
//                 className="prod_to_cart_btn remove"
//                 onClick={() => handleRemoveFromCart(product)}
//               >
//                 Remove from Cart
//               </button>
//             ) : (
//               <button
//                 className="prod_to_cart_btn"
//                 onClick={() => handleAddToCart(product)}
//               >
//                 Add to Cart
//               </button>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ThePlaceProdApi;







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







// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./ThePlaceProdApi.css";

// const ThePlaceProdApi = ({ cartItems, setCartItems }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//   const fetchGetProducts = async () => {
//     try {
//       const response = await axios.get(
//         "https://dawneats-backend.onrender.com/api/v1/meals/"
//       );
    
//       setProducts(response.data.data); 
//       console.log(response.data.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };
 

//   fetchGetProducts();
// }, []);


//   const handleAddToCart = (product) => {
//     setCartItems((prev) => {
//       const exists = prev.find((item) => item._id === product._id);
//       if (exists) {
//         return prev.map((item) =>
//           item._id === product._id
//             ? { ...item, quantity: (item.quantity || 1) + 1 }
//             : item
//         );
//       }
//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };

//   const handleRemoveFromCart = (product) => {
//     setCartItems((prev) => prev.filter((item) => item._id !== product._id));
//   };

//   const isInCart = (_id) => {
//     return cartItems.some((item) => item._id === _id);
//   };

//   return (
//     <div className="prod_product_grid">
//       {products?.map((product) => (
//         <div className="prod_product_card" key={product._id}>
//           <div className="prod_image_wrapper">
//             <img
//               src={product?.image?.secure_url || "https://media.istockphoto.com/id/1448028228/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=1024x1024&w=is&k=20&c=UGz65avkK0_EACjoW_BAHDpeHZgVHpxsdSPYNugPaNU="}
//               alt={product.name}
//               className="prod_product_image"
//             />
//           </div>

//           <div className="prod_title_wrapper">
//             <h3 className="prod_product_title">{product.name}</h3>
//           </div>

//           <div className="prod_bottom_row">
//             <p className="prod_product_price">₦{product.price}</p>
//             {isInCart(product._id) ? (
//               <button
//                 className="prod_to_cart_btn remove"
//                 onClick={() => handleRemoveFromCart(product)}
//               >
//                 Remove from Cart
//               </button>
//             ) : (
//               <button
//                 className="prod_to_cart_btn"
//                 onClick={() => handleAddToCart(product)}
//               >
//                 Add to Cart
//               </button>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ThePlaceProdApi;













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

//  const handleAddToCart = (product) => {
//   setCartItems((prev) => {
//     const exists = prev.find((item) => item.id === product.id);
//     if (exists) {
//       return prev.map((item) =>
//         item.id === product.id
//           ? { ...item, quantity: (item.quantity || 1) + 1 }
//           : item
//       );
//     }
//     return [...prev, { ...product, quantity: 1 }];
//   });
// };
//   const handleRemoveFromCart = (product) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== product.id));
//   };

//   const isInCart = (id) => {
//     return cartItems.some((item) => item.id === id);
//   };

//   return (
//     <div className="prod_product_grid">
//       {products?.map((product) => (
//         <div className="prod_product_card" key={product.id}>
//           <div className="prod_image_wrapper">
//             <img
//               src={product.image}
//               alt={product.title}
//               className="prod_product_image"
//             />
//           </div>

//           <div className="prod_title_wrapper">
//             <h3 className="prod_product_title">{product.title}</h3>
//           </div>

//           <div className="prod_bottom_row">
//             <p className="prod_product_price">₦{product.price}</p>
//             {isInCart(product.id) ? (
//               <button
//                 className="prod_to_cart_btn remove"
//                 onClick={() => handleRemoveFromCart(product)}
//               >
//                 Remove from Cart
//               </button>
//             ) : (
//               <button
//                 className="prod_to_cart_btn"
//                 onClick={() => handleAddToCart(product)}
//               >
//                 Add to Cart
//               </button>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ThePlaceProdApi;







// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import "./ThePlaceProdApi.css";

// // const ThePlaceProdApi = ({ cartItems, setCartItems }) => {
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     const fetchGetProducts = async () => {
// //       try {
// //         const response = await axios.get("https://fakestoreapi.com/products");
// //         setProducts(response.data);
// //       } catch (error) {
// //         console.error("Error fetching products:", error);
// //       }
// //     };

// //     fetchGetProducts();
// //   }, []);

// //   const handleAddToCart = (product) => {
// //     setCartItems((prev) => [...prev, product]);
// //   };

// //   const handleRemoveFromCart = (product) => {
// //     setCartItems((prev) => prev.filter((item) => item.id !== product.id));
// //   };

// //   const isInCart = (id) => {
// //     return cartItems.some((item) => item.id === id);
// //   };

// //   return (
// //     <div className="prod_product_grid">
// //       {products?.map((product) => (
// //       <div className="prod_product_card" key={product.id}>
// //   {/* IMAGE DIV */}
// //   <div className="prod_image_wrapper">
// //     <img
// //       src={product.image}
// //       alt={product.title}
// //       className="prod_product_image"
// //     />
// //   </div>

// //   {/* TITLE DIV */}
// //   <div className="prod_title_wrapper">
// //     <h3 className="prod_product_title">{product.title}</h3>
// //   </div>

// //   {/* PRICE + BUTTON DIV */}
// //   <div className="prod_bottom_row">
// //     <p className="prod_product_price">₦{product.price}</p>
// //     {isInCart(product.id) ? (
// //       <button
// //         className="prod_to_cart_btn remove"
// //         onClick={() => handleRemoveFromCart(product)}
// //       >
// //         Remove from Cart
// //       </button>
// //     ) : (
// //       <button
// //         className="prod_to_cart_btn"
// //         onClick={() => handleAddToCart(product)}
// //       >
// //         Add to Cart
// //       </button>
// //     )}
// //   </div>
// // </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default ThePlaceProdApi;
