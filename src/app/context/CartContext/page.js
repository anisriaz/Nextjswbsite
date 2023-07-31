"use client"

import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const cartFromStorage = localStorage.getItem("cart");
    if (cartFromStorage) {
      setCart(JSON.parse(cartFromStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItemToCart = ({
    product,
    name,
    description,
    colors,
    image,
    price,
  }) => {
    const item = {
      product,
      name,
      description,
      colors,
      image,
      price,
      quantity: 1, // Set the initial quantity to 1
    };

    const isItemExist = cart.find((i) => i.product === item.product);
    let newCartItems;

    if (isItemExist) {
      newCartItems = cart.map((i) =>
        i.product === isItemExist.product ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      newCartItems = [...cart, item];
    }

    setCart(newCartItems);
  };

  const removeItemFromCart = (productId) => {
    const newCartItems = cart.filter((item) => item.product !== productId);
    setCart(newCartItems);
  };

  const incrementItemQuantity = (productId) => {
    const newCartItems = cart.map((item) =>
      item.product === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(newCartItems);
  };

  const decrementItemQuantity = (productId) => {
    const newCartItems = cart.map((item) =>
      item.product === productId ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(newCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        incrementItemQuantity,
        decrementItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;