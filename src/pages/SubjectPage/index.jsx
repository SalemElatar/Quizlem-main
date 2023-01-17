import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CoursesDB from "../../coursesDB.json";
import Quizes from "../../quizesDB.json";

const SubjectPage = () => {
  const [thisCourse, setThisCourse] = useState([]);
  useEffect(() => {
    setThisCourse(
      CoursesDB.find((courseItem) => {
        return courseItem.title == subjectpage;
      })
    );
  }, []);
  let { subjectpage } = useParams();

  return (
    <div className="Subject_page">
      <h1 className="">{thisCourse.title}</h1>
      <div className="quizes">
        <ul>
          {Quizes.filter((rq) => {
            return rq.subjCourseId === thisCourse.id;
          }).map((quiz, index) => {
            return (
              <li key={index} className="rounded-5 p-3">
                <h3 className="h5">
                  <Link to={quiz.id}>{quiz.quizTitle}</Link>
                </h3>
                <span className="grey-color">{`Score 0 / ${quiz.questonsList.length}`}</span>
                <hr />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SubjectPage;
