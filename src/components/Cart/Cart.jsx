import PropTypes from "prop-types";
// import { useState } from "react";
import CartItem from "../CartItem/CartItem";
import { useCartContext } from "../../hooks/useCartContext";
import { FiX } from "react-icons/fi";
import "./Cart.scss";

export default function Cart() {
  const { setCartIsOpen, cart, totalAmount } = useCartContext();

  return (
    <div className="cart">
      <div className="cart-close" onClick={() => setCartIsOpen(false)}>
        <FiX />
      </div>
      {cart.map(item => <CartItem key={item.id} item={item} />)}
      <p>$ {totalAmount}</p>
    </div>
  );
}

Cart.propTypes = {
  openCart: PropTypes.func,
};
