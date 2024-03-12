import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div>
          <h2 className="footer-title">Subscribe to our newsletter</h2>
          <p className="footer-description">
            Be the first to know about the latest news about trends, promotions
            and more!
          </p>
        </div>
        <form className="footer-form">
          <input
            type="email"
            placeholder="Your email..."
            className="footer-form__input"
          />
          <button className="footer-form__btn">Join</button>
        </form>
        <div className="footer-policy">
          <a href="#" className="footer-policy__link">
            Returns Policy
          </a>
          <a href="#" className="footer-policy__link">
            Track Your Order
          </a>
          <a href="#" className="footer-policy__link">
            Shipping & Delivery
          </a>
        </div>
        <div className="footer-social">
          <a href="#">
            <FaYoutube />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className="footer-copy">
        <p>Виконано в &copy; </p>
        <a
          className="footer-copy__link"
          href="https://prometheus.org.ua/"
          target="_blank"
        >
          Prometheus
        </a>
        <p> 2024 / Burhovetskiy</p>
      </div>
    </footer>
  );
}
