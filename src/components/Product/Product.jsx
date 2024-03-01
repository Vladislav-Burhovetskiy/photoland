import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import SpinnerLoading from "../Spinner/SpinnerLoading";
import "./Product.scss";

export default function Product({ camera }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Link to={`/photoland/product/${camera.id}`}>
      <div className="product">
        {camera.isNew && <div className="product-badge">NEW</div>}
        <div className="product-image__container">
          {isLoading && <SpinnerLoading />}
          <img
            className={`product-image ${isLoading && "hidden"}`}
            src={camera.image}
            alt={camera.title}
            onLoad={handleImageLoad}
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
