import { Link } from "react-router-dom";
import FolderIcn from "./folder.png";

const CourseItem = ({ quizItem }) => {
  return (
    <>
      <Link
        to={`${quizItem.subject}/${quizItem.id}`}
        className="active_item p-2 mb-2"
      >
        <img src={FolderIcn} />
        <h6 onContextMenu={(e) => handleing(e)}>{quizItem.quizTitle}</h6>
      </Link>
    </>
  );
};

export default CourseItem;
