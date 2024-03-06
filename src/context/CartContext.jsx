import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  // const [itemsAmount, setItemsAmount] = useState(0);
  // const [totalAmount, settotalAmount] = useState(0);

  const addToCart = (item) => {
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

    setCartIsOpen(true);
  };

  return (
    <CartContext.Provider value={{ cartIsOpen, setCartIsOpen, addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.element,
};
