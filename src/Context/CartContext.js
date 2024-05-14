import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    // storing the localstorege
    // JSON.parse(localStorage.getItem("cart")) ||
    []
  );

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    // updateing the data in the localstore
    // const updatedCart = [...cartItems, product];
    // setCartItems(updatedCart);
    // localStorage.setItem("cart", JSON.stringify(updatedCart));

    // single product adding multiple times
    if (existingProduct) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // removing the product from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };
  // claer the cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
