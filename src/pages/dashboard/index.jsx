import { Route, Routes } from "react-router-dom";
import Sidebar from "./sidebar.jsx";
import Header from "./Header.jsx";
import UserHome from "../UserHome";
import SubjectPage from "../SubjectPage";
import QuizPage from "../QuizPage";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard row">
      <div className="sidebar col-2" id="sidebar">
        <Sidebar />
      </div>
      <div className="dashboard_view col-10 offset-2">
        <div className="container">
          <Header />
          <Routes>
            <Route path="" element={<UserHome />} />
            <Route path=":subjectpage" element={<SubjectPage />} />
            <Route path=":subjectpage/:quizpage" element={<QuizPage />} />
            <Route
              path=":subjectpage/:quizpage/*"
              element={<div>404 error</div>}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
