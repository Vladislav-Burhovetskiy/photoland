import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Product.scss";

export default function Product({ camera }) {
  return (
    <Link to={`products/${camera.id}`}>
      <div className="product">
        {camera.isNew && <div className="product-badge">NEW</div>}
        <div className="product-image__container">
          <img
            className="product-image"
            src={camera.image}
            alt={camera.title}
          />
        </div>
        <div className="product-info">
          <p className="product-info__categories">{camera.categories}</p>
          <p className="product-info__title">
            {camera.title.substring(0, 35)}...
          </p>
          <p className="product-info__price">${camera.price}</p>
        </div>
      </div>
    </Link>
  );
}

Product.propTypes = {
  camera: PropTypes.object,
};
