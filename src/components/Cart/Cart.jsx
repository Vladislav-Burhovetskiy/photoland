import PropTypes from "prop-types";
// import { useState } from "react";
import { useCartContext } from "../../hooks/useCartContext";
import { FiX } from "react-icons/fi";

import "./Cart.scss";

export default function Cart() {
  const { setCartIsOpen } = useCartContext();

  return (
    <div className="cart">
      <FiX className="cart-fix" onClick={() => setCartIsOpen()} />
      Cart
    </div>
  );
}

Cart.propTypes = {
  openCart: PropTypes.func,
};
