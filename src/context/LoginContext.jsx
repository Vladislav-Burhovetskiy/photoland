import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [user, setUser] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser("");
  };

  const handleLogin = (username) => {
    localStorage.setItem("user", JSON.stringify(username));
    const newUser = JSON.parse(localStorage.getItem("user"))
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
