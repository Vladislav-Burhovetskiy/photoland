import { Link } from "react-router-dom";
import { SlBag } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useCartContext } from "../../hooks/useCartContext";
import SearchForm from "../SearchForm/SearchForm";
import Cart from "../Cart/Cart";
import CategoryMenuMobile from "../CategoryMenuMobile/CategoryMenuMobile";
import useToggle from "../../hooks/useToggle";
import { useLoginContext } from "../../hooks/useLoginContext";
import Logo from "../../images/logo.png";
import "./Header.scss";

export default function Header() {
  const { cartIsOpen, toggleCart, itemsAmount } = useCartContext();
  const { user, handleLogout } = useLoginContext();
  const [menuIsOpen, toggleMenu] = useToggle();
  let username = "";

  if (user) {
    username = user[0].toUpperCase() + user.slice(1);
    if (user.length > 9) {
      username = username.substring(0, 6) + "...";
    }
  }

  return (
    <header className="header">
      <div className="header-container container">
        <div className="header-container__icon-logo">
          <div className="header-menu__icon" onClick={toggleMenu}>
            <FiMenu strokeWidth={1.3} />
          </div>
          <Link to={"/photoland/"}>
            <div className="header-logo">
              <img src={Logo} alt="Logo Photoland" />
            </div>
          </Link>
        </div>
        <div className={`header-menu__mobile ${menuIsOpen && "show"}`}>
          <CategoryMenuMobile closeMenu={toggleMenu} />
        </div>
        <div className="header-search">
          <SearchForm />
        </div>
        <div className="header-actions">
          <Link to={"/photoland/login"}>
            <button
              onClick={() => user && handleLogout()}
              className="header-btn"
            >
              {user ? "Logout" : "Login"}
            </button>
          </Link>
          {user ? (
            <p className="header-user">{username}</p>
          ) : (
            <div className="header-avatar">
              <HiOutlineUserCircle strokeWidth={1} />
            </div>
          )}

          <div onClick={toggleCart} className="header-bag">
            <SlBag />
            <p className="header-bag__count">{itemsAmount}</p>
          </div>
          <div className={`header-cart ${cartIsOpen && "show"}`}>
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
}
