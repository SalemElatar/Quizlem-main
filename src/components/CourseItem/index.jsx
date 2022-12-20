// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import ActiveTag from "../../../../../quizlem-react/src/components/ActiveTag";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import * as iconin from "@fortawesome/free-solid-svg-icons";
import FolderIcn from "./folder.png";

const CourseItem = ({ subj }) => {
  // const [isActive, setIsActive] = useState(course.active);
  // const toggleActive = () => {
  //   isActive ? setIsActive(true) : setIsActive(false);
  // };
  // console.log(iconin.faArrowLeftRotate);

  return (
    <Link to={`${subj.title}`} className="active_item p-2 mb-2">
      <img src={FolderIcn} />
      <h6>{subj.title}</h6>
    </Link>
  );
};

export default CourseItem;
