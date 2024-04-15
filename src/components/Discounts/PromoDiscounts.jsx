import { MdDiscount } from "react-icons/md";
import "./PromoDiscounts.scss";

export default function PromoDiscounts() {
  return (
    <div className="discounts">
      <div className="discounts-title__container">
        <h1 className="discounts-title">Discounts</h1>
        <MdDiscount className="discounts-icon" />
      </div>
      <p className="discounts-description">
        Copy your discount name and use it in the cart
      </p>
      <dl className="discounts-list">
        <dt className="discounts-list__term">SAVE 35% ALL DSLR CAMERAS:</dt>
        <dd className="discounts-list__definition">DSLR DISCOUNT</dd>
        <dt className="discounts-list__term">
          SAVE 25% ALL MIRRORLESS CAMERAS:
        </dt>
        <dd className="discounts-list__definition">MIRRORLESS DISCOUNT</dd>
        <dt className="discounts-list__term">SAVE 20% ON YOUR FIRST ORDER:</dt>
        <dd className="discounts-list__definition">FIRST ORDER DISCOUNT</dd>
      </dl>
    </div>
  );
}
