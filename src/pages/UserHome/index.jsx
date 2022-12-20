import { useState } from "react";
import { useParams } from "react-router-dom";
import allCourses from "../../coursesDB.json";
import CourseItem from "../../components/CourseItem";
// import AddNewCourse from "../../components/AddNewCourse";

const UserHome = () => {
  let { username } = useParams();

  return (
    <div className="dashboard">
      <h1>Hello, {username}</h1>
      <h3 className="home_page_h py-2 me-2 rounded-4 fw-bolder">
        active courses
      </h3>
      <div className="active_subjects d-flex flex-row flex-wrap justify-content-between text-center">
        {allCourses.map((subj) => {
          return <CourseItem subj={subj} />;
        })}
      </div>
      {/* <input
        type="button"
        className="add_new rounded-2 px-1 py-1 border-0 "
        value="+ Add New"
        onClick={togglePopup}
      />
      {isOpen && (
        <AddNewCourse addNewCour={addNewCour} togglePop={togglePopup} />
      )} */}
      {/* {allCourses && allCourses.length !== 0 && (
        <div className="courseShelf gx-3 gy-4 row">
          {allCourses.map((course, index) => {
            return <CourseItem key={index} course={course} />;
          })}
        </div>
      )} */}
    </div>
  );
};

export default UserHome;
