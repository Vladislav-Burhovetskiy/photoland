// import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect, test } from "@jest/globals";
// import { CartProvider } from "../context/CartContext";
// import ProductInfo from "../components/ProductInfo/ProductInfo";
// import Cart from "../components/Cart/Cart";

import { render, fireEvent, waitFor } from "@testing-library/react";
import { CartProvider } from "../context/CartContext";
import { MemoryRouter } from "react-router-dom";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import Cart from "../components/Cart/Cart";

test("increases quantity of an item in the cart", async () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/photoland/product/1"]}>
      <CartProvider>
        <>
          <ProductInfo />
          <Cart />
        </>
      </CartProvider>
    </MemoryRouter>
  );

  // Знайти кнопку "Add to cart" на сторінці деталей продукту
  const addToCartButton = getByText("Add to cart");
  fireEvent.click(addToCartButton);

  // Знайти кнопку "Збільшити" та натиснути на неї
  const increaseButton = getByText("+");
  fireEvent.click(increaseButton);

  // Очікування оновлення DOM
  await waitFor(() => {
    // Перевірити, що кількість товару збільшилася на 1
    const quantityDisplay = getByText("2"); // Очікуємо, що кількість буде 2, якщо початкова кількість була 1
    expect(quantityDisplay).toBeInTheDocument();
  });
});

// test("decreases quantity of an item in the cart", () => {
//   const { getByText } = render(
//     <CartProvider>
//       <Cart />
//     </CartProvider>
//   );

//   // Знайти кнопку "Додати в корзину" та натиснути на неї
//   const addToCartButton = getByText("Add to cart");
//   fireEvent.click(addToCartButton);

//   // Знайти кнопку "Збільшити" та натиснути на неї
//   const increaseButton = getByText("+");
//   fireEvent.click(increaseButton);

//   // Знайти кнопку "Зменшити" та натиснути на неї
//   const decreaseButton = getByText("-");
//   fireEvent.click(decreaseButton);

//   // Перевірити, що кількість товару зменшилася на 1
//   const quantityDisplay = getByText("1"); // Очікуємо, що кількість буде 1, якщо початкова кількість була 2
//   expect(quantityDisplay).toBeInTheDocument();
// });
