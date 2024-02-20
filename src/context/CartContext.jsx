import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CartContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.element,
};
