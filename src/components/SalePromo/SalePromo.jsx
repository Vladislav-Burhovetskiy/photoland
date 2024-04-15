import { Link } from "react-router-dom";
import PromoImg1 from "../../images/promo_img1.png";
import PromoImg2 from "../../images/promo_img2.png";
import "./SalePromo.scss";

export default function SalePromo() {
  return (
    <div className="sale-promo">
      <div className="sale-promo__info sale-promo__info-1">
        <p className="sale-promo__text">SAVE 35% ALL DSLR CAMERAS</p>
        <div className="sale-promo__photo-1">
          <img src={PromoImg1} alt="Camera promo photo 1" />
        </div>
        <Link className="sale-promo__link" to="/photoland/discounts">
          SHOP NOW
        </Link>
      </div>
      <div className="sale-promo__info">
        <p className="sale-promo__text">SAVE 25% ALL MIRRORLESS CAMERAS</p>
        <div className="sale-promo__photo-2">
          <img src={PromoImg2} alt="Camera promo photo 2" />
        </div>
        <Link className="sale-promo__link" to="/photoland/discounts">
          SHOP NOW
        </Link>
      </div>
    </div>
  );
}
