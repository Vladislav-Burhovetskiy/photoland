import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import CartItem from "../CartItem/CartItem";
import Modal from "../Modal/Modal";
import { useCartContext } from "../../hooks/useCartContext";
import { useLoginContext } from "../../hooks/useLoginContext";
import useToggle from "../../hooks/useToggle";
import { addToLocalStorage } from "../../helpers/localStorage.js";
import { FaCartShopping } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FiX } from "react-icons/fi";
import "./Cart.scss";

export default function Cart() {
  const {
    toggleCart,
    cart,
    totalAmount,
    discountAmount,
    clearCart,
    setDiscount,
    discount,
  } = useCartContext();

  const { user } = useLoginContext() || {};
  const [modalIsOpen, toggleModal] = useToggle();

  function handleOrder() {
    if (user) {
      clearCart();
    }
    toggleModal();
    toggleCart();
  }

  function handlerDiscount(e) {
    const discountValue = e.target.value.toUpperCase();
    setDiscount(discountValue);
    addToLocalStorage("discount", discountValue);
  }

  const modalTitle = user ? "Ordered Successfully!" : "Login first!";
  const modalText = user
    ? "We will contact you after processing the order"
    : "Please login first to place an order";

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-close" onClick={() => toggleCart()}>
          <FiX />
        </div>
        {cart?.map((item) => (
          <CartItem key={uuidv4()} item={item} />
        ))}
      </div>
      <div className="cart-options">
        <input
          type="text"
          className="cart-options__discount"
          placeholder="ENTER DISCOUNT"
          onChange={(e) => handlerDiscount(e)}
          value={discount}
        />
        <div className="cart-options__total">
          <p>Total:</p>
          <p className={discountAmount && "line-through"}>$ {totalAmount}</p>
        </div>
        <div className="cart-options__discount-amount">
          <p>discount: - ${discountAmount}</p>
          <p>$ {totalAmount - discountAmount}</p>
        </div>
        {cart.length ? (
          <div className="cart-options__buttons">
            <button onClick={clearCart}>Clear cart</button>
            <button
              disabled={!totalAmount}
              className={`cart-options__checkout-btn ${
                !totalAmount ? "btn-disabled" : ""
              }`}
              onClick={toggleModal}
            >
              Purchase
              <FaArrowRight className="cart-options__checkout-arrow" />
            </button>
          </div>
        ) : (
          <div>
            <FaCartShopping className="cart-options__empty" />
            <p className="cart-options__empty-text">Your cart is empty...</p>
          </div>
        )}
      </div>
      {modalIsOpen && (
        <Modal title={modalTitle} text={modalText} toggleModal={handleOrder} />
      )}
    </div>
  );
}

Cart.propTypes = {
  openCart: PropTypes.func,
};
