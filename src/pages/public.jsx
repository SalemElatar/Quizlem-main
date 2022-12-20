import { Routes, Route /*useLocation*/ } from "react-router-dom";
import PublicNav from "./PublicNav";
import HomePage from "./home/Home";
import AboutPage from "./About";
import "./public.css";

function Public() {
  // const currentLoc = useLocation();
  // if (currentLoc) {
  //   console.log(document.getElementById("body").classList);
  //   document.getElementById("body").classList.add("bg_color");
  // }

  return (
    <div className={`public`}>
      <PublicNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="guide" element={<div></div>} />
        <Route path="/*" element={<div>404 error</div>} />
      </Routes>
    </div>
  );
}

export default Public;
