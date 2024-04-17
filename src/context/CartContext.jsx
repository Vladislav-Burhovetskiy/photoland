import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import useToggle from "../hooks/useToggle";
import {
  addToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../helpers/localStorage.js";
import findById from "../helpers/findById.js";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartIsOpen, toggleCart] = useToggle();
  const [cart, setCart] = useState(getFromLocalStorage("cartItem") || []);
  const [itemsAmount, setItemsAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [discount, setDiscount] = useState(
    getFromLocalStorage("discount") || ""
  );

  useEffect(() => {
    const amount = cart.reduce((a, b) => a + b.amount, 0);

    const discountPrice = cart.reduce(
      (total, { amount, price, categories }) => {
        let priceAmount = amount * price;

        if (discount === "DSLR" && categories === "dslr") {
          priceAmount *= 0.65;
        } else if (discount === "MIRRORLESS" && categories === "mirrorless") {
          priceAmount *= 0.75;
        } else if (discount === "FIRST ORDER") {
          priceAmount *= 0.8;
        }

        return total + priceAmount;
      },
      0
    );

    const totalPrice = cart.reduce((total, item) => {
      return total + item.amount * item.price;
    }, 0);

    setItemsAmount(amount);
    setTotalAmount(totalPrice);
    setDiscountAmount(totalPrice - discountPrice.toFixed());
    addToLocalStorage("cartItem", cart);
  }, [cart, discount]);

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
    const existingItem = findById(cart, id);
    const existingItemIndex = cart.indexOf(existingItem);
    const updatedCart = [...cart];

    updatedCart[existingItemIndex].amount += num;
    setCart(updatedCart);
  }

  function clearCart() {
    setCart([]);
    removeFromLocalStorage("discount");
    setDiscount("");
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
        totalAmount,
        discountAmount,
        setDiscount,
        discount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.element,
};
