import PropTypes from "prop-types";
import CartItem from "../CartItem/CartItem";
import { useCartContext } from "../../hooks/useCartContext";
import { FaCartShopping } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FiX } from "react-icons/fi";
import "./Cart.scss";

export default function Cart() {
  const { setCartIsOpen, cart, totalAmount, clearCart } = useCartContext();

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
        <div className="cart-options__total">
          <p>Total:</p>
          <p>$ {totalAmount}</p>
        </div>
        {cart.length ? (
          <div className="cart-options__buttons">
            <button onClick={clearCart}>Clear cart</button>
            <button className="cart-options__checkout-btn">
              Checkout
              <FaArrowRight className="cart-options__checkout-arrow" />
            </button>
          </div>
        ) : (
          <div>
            <FaCartShopping className="cart-options__empty" />
            <p>Your cart is empty...</p>
          </div>
        )}
      </div>
    </div>
  );
}

Cart.propTypes = {
  openCart: PropTypes.func,
};
