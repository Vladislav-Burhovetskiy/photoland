// import { useState } from "react";
import Form from "../Form/Form";
import ModalSubscribe from "../Modal/ModalSubscribe";
import useToggle from "../../hooks/useToggle";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.scss";

export default function Footer() {
  const [modalIsOpen, toggleModal] = useToggle();

  const handleSubmit = () => {
    toggleModal()
    // записує данні в базу підписників
  };

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
        <Form
          onSubmit={handleSubmit}
          type="email"
          placeholder="Your email..."
          buttonContent="Join"
          className="footer-form"
        />
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
          <a href="#" className="footer-social__link">
            <FaYoutube />
          </a>
          <a href="#" className="footer-social__link">
            <FaFacebook />
          </a>
          <a href="#" className="footer-social__link">
            <FaInstagram />
          </a>
          <a href="#" className="footer-social__link">
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
      {modalIsOpen && <ModalSubscribe toggleModal={toggleModal} />}
    </footer>
  );
}
