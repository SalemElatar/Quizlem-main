import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import CoursesDB from "./coursesDB.json";
import Public from "./pages/public";
import Dashboard from "./pages/dashboard/index";
import SignUp from "./pages/sign-up/SignUp";
import Admin from "./pages/admin";
// import Login from "./pages/login/Login";

function App() {
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    setAllCourses(CoursesDB);
  }, []);

  const addNewCour = (newCourseTitle) => {
    const newCourse = {
      title: newCourseTitle,
      active: false,
      progress: "65%",
      avTests: 5,
    };
    setAllCourses(allCourses.concat([newCourse]));
    localStorage.setItem(
      "courses",
      JSON.stringify(allCourses.concat([newCourse]))
    );
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Public />} />
        <Route path="admin" element={<Admin />} />
        <Route path="sign" element={<SignUp />} />

        {/* <Route path="/login" element={<Login />} /> */}

        <Route
          path="dashboard/:username/*"
          element={
            <Dashboard allCourses={allCourses} addNewCour={addNewCour} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
