import PropTypes from "prop-types";
import { createContext, useState } from "react";
import {
  addToLocalStorage,
  removeFromLocalStorage,
  getFromLocalStorage,
} from "../helpers/localStorage.js";

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [user, setUser] = useState(getFromLocalStorage("user") || "");

  const handleLogout = () => {
    removeFromLocalStorage("user");
    setUser("");
  };

  const handleLogin = (username) => {
    addToLocalStorage("user", username)
    const newUser = getFromLocalStorage("user");
    setUser(newUser);
  };

  return (
    <LoginContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </LoginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.element,
};
