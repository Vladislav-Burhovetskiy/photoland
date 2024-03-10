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
      <div className="cart-items">
        <div className="cart-close" onClick={() => setCartIsOpen(false)}>
          <FiX />
        </div>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-options">
        <p className="cart-options__total">Total: $ {totalAmount}</p>
        {cart.length ? (
          <div className="cart-options__buttons">
            <button>Clear cart</button>
            <button>Checkout</button>
          </div>
        ) : (
          <p>Your cart is empty...</p>
        )}
      </div>
    </div>
  );
}

Cart.propTypes = {
  openCart: PropTypes.func,
};
