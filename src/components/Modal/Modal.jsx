import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import "./Modal.scss";

export default function Modal({ title, text, toggleModal, authLink }) {
  const DOMElement = document.getElementById("modal");

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-info">
        <h3 className="modal-title">{title}</h3>
        <p className="modal-text">{text}</p>
        <Link
          className="modal-close"
          onClick={toggleModal}
          to={authLink}
        >
          <FiX className="modal-close__btn" />
        </Link>
      </div>
    </div>,
    DOMElement
  );
}
