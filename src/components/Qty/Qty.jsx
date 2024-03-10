import PropTypes from "prop-types";
import { useCartContext } from "../../hooks/useCartContext";

import "./Qty.scss";

export default function Qty({ item }) {
  const {updateAmount} = useCartContext();

  return (
    <div className="qty">
      <button
        onClick={() => updateAmount(-1, item.id)}
        className={item.amount === 0 ? "btn-disabled" : ""}
        disabled={item.amount === 0}
      >
        -
      </button>
      <p>{item.amount}</p>
      <button onClick={() => updateAmount(+1, item.id)}>+</button>
    </div>
  );
}

Qty.propTypes = {
  item: PropTypes.object,
};
