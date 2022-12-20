import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as Themetoggle } from "../assets/themelogo.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";

const PublicNav = () => {
  const currentLoc = useLocation();
  console.log(currentLoc.pathname == "/sign");
  return (
    <div
      className="main-nav"
      id="main-nav"
      style={
        currentLoc.pathname !== "/"
          ? {
              background: "#3a8c7b",
              color: "#000",
            }
          : {}
      }
    >
      <div className="container">
        <div className="row">
          <div className="logo col-3">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className="col-6 offset-3 row list-unstyled text-center my-2 py-3 fs-6 fw-bold ">
            <li className="col">
              <Link to="/about">About</Link>
            </li>
            <li className="col">
              <Link to="/guide">How It Works</Link>
            </li>
            <li className="col">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="col  ">
              <Link to="/sign" className=" rounded-5 login_btn">
                Login
              </Link>
            </li>
            <li className="toggle_theme p-1 col">
              <Themetoggle />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PublicNav;
