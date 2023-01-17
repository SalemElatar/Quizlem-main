import allQuizes from "../../quizesDB.json";
import CourseItem from "../../components/CourseItem";
// import AddNewCourse from "../../components/AddNewCourse";

const UserHome = () => {
  return (
    <div className="dashboard">
      <div className="home_page_h position-relative">
        <h3 className="py-2 me-2 ps-3 rounded-4 fw-bolder">active quizes</h3>
      </div>
      <div className="active_subjects d-flex flex-row flex-wrap justify-content-between text-center">
        {allQuizes.map((quizItem) => {
          return (
            <Link to={`${quizItem.quizTitle}`} className="active_item p-2 mb-2">
              <img src={FolderIcn} />
              <h6 onContextMenu={(e) => handleing(e)}>{quizItem.quizTitle}</h6>
              {/* <EnhancedComponent /> */}
            </Link>
          );
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
