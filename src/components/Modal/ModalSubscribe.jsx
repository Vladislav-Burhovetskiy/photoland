import PropTypes from "prop-types";
import Modal from "./Modal";
import { FiX } from "react-icons/fi";
import "./ModalSubscribe.scss";

export default function ModalSubscribe({ handleOn }) {
  return (
    <Modal>
      <div className="modal">
        <div className="modal-info">
          <h3 className="modal-title">You are subscribed!</h3>
          <p className="modal-text">
            Wait for the newsletter about the latest products
          </p>
          <div className="modal-close" onClick={handleOn}>
            <FiX className="modal-close__btn" />
          </div>
        </div>
      </div>
    </Modal>
  );
}

ModalSubscribe.propTypes = {
  handleOn: PropTypes.func,
};
