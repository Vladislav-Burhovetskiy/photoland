import "./Cart.scss";
export default function Cart({ isOpen }) {
  return <div className={`cart ${isOpen && "show"}`}>Cart</div>;
}
