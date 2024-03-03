import { useParams, useNavigate } from "react-router-dom";
// import RelatedProduct from "../components/RelatedProduct/RelatedProduct";
// import { useCartIsOpen } from "../../hooks/useCartIsOpen";
import { useDataContext } from "../hooks/useDataContext";
import SpinnerLoading from "../components/Spinner/SpinnerLoading";
import "./ProductDetails.scss";

export default function ProductDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useDataContext();

  if (isLoading) {
    return <SpinnerLoading />;
  }

  const camera = data?.find((product) => {
    return product.id === +id;
  });

  return (
    <section className="container">
      <div className="product-details">
        <button className="product-details__back-nav"onClick={() => navigate(-1)}>⟵ go back</button>
        <div className="product-details__photo-container">
          <img
            className="product-details__photo-image"
            src={camera?.image}
            alt={camera?.title}
          />
        </div>
        <div className="product-details__info">
          <p className="product-details__category">
            {camera?.categories} cameras
          </p>
          <h3 className="product-details__title">{camera?.title}</h3>
          <ul className="product-details__description">
            {camera?.description.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="product-details__order">
            <p className="product-details__order-price">${camera?.price}</p>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
      {/* <RelatedProduct /> */}
    </section>
  );
}
