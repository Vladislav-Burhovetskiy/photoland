import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import "./Form.scss";

export default function Form(props) {
  const { onSubmit, type, placeholder, buttonContent, toggleModal } = props;
  const [inputValue, setInputValue] = useState("");
  const [isAnimating, setIsAnimating] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timeout);
  });

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      onSubmit();
      setInputValue("");
    } else {
      setIsAnimating(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`shared-form ${isAnimating && "shake"}`}
    >
      <input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="shared-form__btn"
        onClick={() => inputValue && toggleModal()}
      >
        {buttonContent}
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  buttonContent: PropTypes.node.isRequired,
};
