import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <div className="navbar navbar-expand-lg w-100 d-flex align-items-end">
      <Link to={"/create"}>
        <FontAwesomeIcon
          className="fa-solid fa-icon icon-create"
          icon={faUserPlus}
        />
      </Link>
    </div>
  );
};

export default Navigation;
