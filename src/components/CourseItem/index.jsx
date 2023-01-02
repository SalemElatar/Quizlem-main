// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ActiveTag from "../ActiveTag";
import FolderIcn from "./folder.png";
import DecideActive from "./DecideActive";

const CourseItem = ({ subj }) => {
  const handleing = (e) => {
    e.preventDefault();
  };
  const EnhancedComponent = DecideActive(
    ActiveTag,
    subj.active ? "green" : "blue"
  );

  // const [isActive, setIsActive] = useState(course.active);
  // const toggleActive = () => {
  //   isActive ? setIsActive(true) : setIsActive(false);
  // };

  return (
    <Link to={`${subj.title}`} className="active_item p-2 mb-2">
      <img src={FolderIcn} />
      <h6 onContextMenu={(e) => handleing(e)}>{subj.title}</h6>
      <EnhancedComponent />
    </Link>
  );
};

export default CourseItem;
