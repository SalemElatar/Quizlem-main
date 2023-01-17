import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Header = () => {
  let { username } = useParams();
  const navigate = useNavigate();

  return (
    <header className="header" id="header">
      <div className="header_toggle ">
        <div className="backward" id="" onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
      </div>
      <div className="header_img">
        <img src="https://i.imgur.com/hczKIze.jpg" alt="" className="me-2" />
        <span>{username}</span>
      </div>
    </header>
  );
};

export default Header;
