import allQuizes from "../../quizesDB.json";
import QuizItem from "../../components/QuizItem";

const UserHome = () => {
  return (
    <div className="dashboard">
      <div className="home_page_h position-relative">
        <h3 className="py-2 me-2 ps-3 rounded-4 fw-bolder">active quizes</h3>
      </div>
      <div className="active_subjects d-flex flex-row flex-wrap justify-content-between text-center">
        {allQuizes.map((quizItem) => {
          return <QuizItem quizItem={quizItem} key={quizItem.id} />;
        })}
      </div>
    </div>
  );
};

export default UserHome;
