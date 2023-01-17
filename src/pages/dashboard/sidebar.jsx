import "./sidebar.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import quizesDB from "../../quizesDB.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const sidebar = () => {
  const openSideMenu = (e) => {
    console.log();
    e.target.parentElement.style.height = `${e.target.nextSibling.offsetHeight}px`;
    e.target.nextSibling.style.top = `${0 + e.target.offsetHeight}px`;
  };
  return (
    <>
      <header>
        <div className="close-btn">
          <Link to="/dashboard/name">
            <Logo className="logo" />
          </Link>
        </div>
      </header>

      <div className="main_side_menu">
        <div className="item">
          <Link to="">
            <FontAwesomeIcon icon={faDesktop} /> Dashboard
          </Link>
        </div>

        {quizesDB.map((subj) => {
          return (
            <li
              key={subj.id}
              className="item"
              id={`subj_item_${subj.id}`}
              title={subj.quizTitle}
            >
              <Link className="sub-btn" onClick={() => {}}>
                <FontAwesomeIcon icon={faDesktop} /> {subj.quizTitle}
                <FontAwesomeIcon icon={faAngleRight} className="dropdown" />
              </Link>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default sidebar;
