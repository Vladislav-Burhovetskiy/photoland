import PropTypes from "prop-types";

import "./Qty.scss";

export default function Qty({ item }) {
  return (
    <div className="qty">
      Qty
    </div>
  );
}

Qty.propTypes = {
  item: PropTypes.object,
};
