import { expect, test, describe } from "@jest/globals";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { CartProvider } from "../context/CartContext";
import { MemoryRouter } from "react-router-dom";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import Cart from "../components/Cart/Cart";

describe("Cart item change quantity functionality", () => {
  const setup = () => {
    const utils = render(
      <MemoryRouter initialEntries={["/photoland/product/1"]}>
        <CartProvider>
          <>
            <ProductInfo />
            <Cart />
          </>
        </CartProvider>
      </MemoryRouter>
    );

    return utils;
  };

  test("increases quantity of an item in the cart", async () => {
    const { getByText } = setup();

    const addToCartButton = getByText("Add to cart");
    fireEvent.click(addToCartButton);

    const increaseButton = getByText("+");
    fireEvent.click(increaseButton);

    await waitFor(() => {
      const quantityDisplay = getByText("2");
      expect(quantityDisplay).toBeInTheDocument();
    });
  });

  test("decreases quantity of an item in the cart", () => {
    const { getByText } = setup();

    const decreaseButton = getByText("-");
    fireEvent.click(decreaseButton);

    const quantityDisplay = getByText("1");
    expect(quantityDisplay).toBeInTheDocument();
  });

  test("changes the total price when the quantity of an item is changed", async () => {
    const { getByTestId, getByText } = setup();

    const initialTotalPrice = parseFloat(
      getByTestId("item-total-price").textContent.slice(2)
    );
    const itemPrice = parseFloat(
      getByTestId("item-price").textContent.split(" ")[1]
    );

    const increaseButton = getByText("+");
    fireEvent.click(increaseButton);

    await waitFor(() => {
      const quantityDisplay = getByText("2");
      expect(quantityDisplay).toBeInTheDocument();
    });

    expect(
      parseFloat(getByTestId("item-total-price").textContent.slice(2))
    ).toBe(initialTotalPrice + itemPrice);

    const decreaseButton = getByText("-");
    fireEvent.click(decreaseButton);

    expect(
      parseFloat(getByTestId("item-total-price").textContent.slice(2))
    ).toBe(initialTotalPrice);
  });
});
