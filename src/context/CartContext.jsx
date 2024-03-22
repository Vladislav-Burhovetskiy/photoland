import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import useToggle from "../hooks/useToggle";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartIsOpen, toggleCart] = useToggle();
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartItem")) || []
  );
  const [itemsAmount, setItemsAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const amount = cart.reduce((a, b) => a + b.amount, 0)
    const totalPrice = cart.reduce((a, b) => a + (b.amount * b.price), 0);
    setItemsAmount(amount)
    setTotalAmount(totalPrice);
    localStorage.setItem("cartItem", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item) {
    const newItem = { ...item, amount: 1 };
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].amount++;
      setCart(updatedCart);
    } else {
      setCart([...cart, newItem]);
    }

    !cartIsOpen && toggleCart();
  }

  function removeFromCart(id) {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== id);
    setCart(updatedCart);
  }

  function updateAmount(num, id) {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === id);
    const updatedCart = [...cart];
    updatedCart[existingItemIndex].amount += num;
    setCart(updatedCart);
  }

  function clearCart() {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartIsOpen,
        toggleCart,
        addToCart,
        removeFromCart,
        updateAmount,
        clearCart,
        itemsAmount,
        totalAmount
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.element,
};
