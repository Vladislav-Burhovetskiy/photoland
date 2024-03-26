import ReactDOM from "react-dom";
import { FiX } from "react-icons/fi";
import "./Modal.scss";

export default function Modal({ title, text, toggleModal }) {
  const DOMElement = document.getElementById("modal");

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-info">
        <h3 className="modal-title">{title}</h3>
        <p className="modal-text">{text}</p>
        <div className="modal-close" onClick={toggleModal}>
          <FiX className="modal-close__btn" />
        </div>
      </div>
    </div>,
    DOMElement
  );
}
