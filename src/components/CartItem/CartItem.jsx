import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Qty from "../Qty/Qty";
import { CiCircleRemove } from "react-icons/ci";
import { useCartContext } from "../../hooks/useCartContext";

import "./CartItem.scss";

export default function CartItem({ item }) {
  const { removeFromCart } = useCartContext();

  return (
    <div className="cart-item">
      <Link to={`product/${item.id}`}>
        <div className="cart-item__image">
          <img src={item.image} alt={item.title} />
        </div>
      </Link>
      <div className="cart-item__details">
        <div className="cart-item__info">
          <Link to={`product/${item.id}`}>
            <h3 className="cart-item__title">{item.title}</h3>
          </Link>
          <div>
            <CiCircleRemove
              className="cart-item__remove"
              onClick={() => removeFromCart(item.id)}
            />
          </div>
        </div>
        <div className="cart-item__qty-container">
          <Qty item={item} />
          <p className="cart-item__price-subtotal">$ {item.price * item.amount}</p>
        </div>
        <p className="cart-item__price">${item.price} per piece</p>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object,
};
