import { useParams } from "react-router-dom";
import RelatedProduct from "../components/RelatedProduct/RelatedProduct";
// import { useCartIsOpen } from "../../hooks/useCartIsOpen";
import { useDataContext } from "../hooks/useDataContext";
import SpinnerLoading from "../components/Spinner/SpinnerLoading";
import "./ProductDetails.scss";

export default function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading } = useDataContext();

  if (isLoading) {
    return <SpinnerLoading />;
  }

  const camera = data?.find((product) => {
    return product.id === +id;
  });

  return (
    <section className="product-details container">
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
        <p className="product-details__price">${camera?.price}</p>
        <button>Add to cart</button>
        <RelatedProduct />
      </div>
    </section>
  );
}
