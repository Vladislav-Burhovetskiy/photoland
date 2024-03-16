import ReactDOM from "react-dom";

export default function Modal({ children }) {
  const DOMElement = document.getElementById("modal");

  return ReactDOM.createPortal(children, DOMElement);
}
