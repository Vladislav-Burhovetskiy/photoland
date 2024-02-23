import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <CartContext.Provider value={{ cartIsOpen, setCartIsOpen }}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.element,
};
