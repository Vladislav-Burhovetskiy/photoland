import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DataProvider } from "./context/DataContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { LoginProvider } from "./context/LoginContext.jsx";
import { PaginationProvider } from "./context/PaginationContext.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <LoginProvider>
        <CartProvider>
          <PaginationProvider>
            <App />
          </PaginationProvider>
        </CartProvider>
      </LoginProvider>
    </DataProvider>
  </React.StrictMode>
);
