import "./sidebar.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CoursesDB from "../../coursesDB.json";
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

        {CoursesDB.map((subj) => {
          return (
            <li className="item" id={`subj_item_${subj.id}`} title={subj.title}>
              <Link className="sub-btn" onClick={() => {}}>
                <FontAwesomeIcon icon={faDesktop} /> {subj.title}
                <FontAwesomeIcon icon={faAngleRight} className="dropdown" />
              </Link>

              <div className="sub-menu">
                {subj.lessons.map((lesson) => {
                  return (
                    <Link to="" className="sub-item">
                      {lesson.title}
                    </Link>
                  );
                })}
              </div>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default sidebar;
