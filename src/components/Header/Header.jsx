import { useState } from "react";
import { Link } from "react-router-dom";
import { SlBag } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useCartIsOpen } from "../../hooks/useCartIsOpen";
import SearchForm from "../SearchForm/SearchForm";
import Cart from "../Cart/Cart";
import CategoryMenuMobile from "../CategoryMenuMobile/CategoryMenuMobile";
import Logo from "../../images/logo.png";
import "./Header.scss";

export default function Header() {
  const { cartIsOpen, setCartIsOpen } = useCartIsOpen();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const openCart = () => {
    setCartIsOpen(!cartIsOpen);
  };

  return (
    <header className="header">
      <div className="header-container container">
        <div className="header-container__icon-logo">
          <div className="header-menu__icon" onClick={openMenu}>
            <FiMenu strokeWidth={1.3} />
          </div>
          <Link to={"/"}>
            <div className="header-logo">
              <img src={Logo} alt="Logo Photoland" />
            </div>
          </Link>
        </div>
        <div className={`header-menu__mobile ${menuIsOpen && "show"}`}>
          <CategoryMenuMobile openMenu={openMenu} />
        </div>
        <div className="header-search">
          <SearchForm />
        </div>
        <div className="header-actions">
          <button className="header-btn">login-in</button>
          <div className="header-avatar">
            <HiOutlineUserCircle strokeWidth={1} />
          </div>
          <div onClick={openCart} className="header-bag">
            <SlBag />
            <p className="header-bag__count">50</p>
          </div>
          <div className={`header-cart ${cartIsOpen && "show"}`}>
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
}
