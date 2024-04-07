import { Link } from "react-router-dom";
import { TbError404 } from "react-icons/tb";
import "./NotFound.scss";

export default function NotFound() {
  return (
    <div className="not-found__container">
      <TbError404 className="not-found__icon"/>
      <h1 className="not-found__title">
        Sorry, the page you were looking for was not found!
      </h1>
      <Link to="/photoland/" className="link-button">
        Return to home
      </Link>
    </div>
  );
}
