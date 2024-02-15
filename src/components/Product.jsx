import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Product.scss";

export default function Product({ camera }) {
  return (
    <Link>
      <div className="product">
        {/* image */}
        <div className="product-image__container">
          <img
            className="product-image"
            src={camera.image}
            alt={camera.title}
          />
        </div>
        {camera.title}
      </div>
    </Link>
  );
}

Product.propTypes = {
  camera: PropTypes.object,
};
