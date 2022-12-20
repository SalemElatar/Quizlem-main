import { Link, useNavigate } from "react-router-dom";
// import Logo from "../../components/Logo";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Usersdb from "../../users.json";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import "./signUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const signedUser = Usersdb.find((signed_user) => {
      return signed_user.email == e.target.children[2].value;
    });
    if (
      (signedUser.password == e.target.children[6].value) &
      (signedUser.userName == e.target.children[4].value)
    ) {
      navigate(`/dashboard/${signedUser.userName}`);
    }

    console.log(signedUser);
  };

  return (
    <div className="signUp-page">
      <div className="row">
        <div className="userform col-5 offset-1 ">
          {/* <FontAwesomeIcon icon={faEnvelope} /> */}
          <form method="post" onSubmit={handleSubmit}>
            <div className="mb-5 sign_h">
              <h3>Sign up</h3>
            </div>

            <label htmlFor="Email">Email</label>
            <input
              type="email"
              id="wf-sign-up-email"
              placeholder=""
              maxLength="256"
              name="Email"
              className="form-field w-input"
              required=""
            />
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              className="form-field w-input"
              maxLength="256"
              name=""
              placeholder=""
              id="wf-sign-up-name"
              required=""
            />
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              id="wf-sign-up-password"
              placeholder=""
              maxLength="256"
              name="Password"
              className="form-field w-input"
              required=""
            />

            <input
              type="submit"
              value="Create an account"
              className="userformbutton"
            />
            <div className="form-divider"></div>
            <div className="w-users-userformfooter ">
              <span className="text-color-gray-500">
                Already have an account?
              </span>
              <Link to="/log-in">Log In</Link>
            </div>
          </form>
        </div>

        <div className="account-right-block col-5">
          <div className="account-content-wrap">
            <div className="account-heading-wrap">
              <div className="header-badge-white">
                <div className="header-badge-light">
                  <div>New</div>
                </div>
                <div>Friend</div>
              </div>
              <h1>
                Welcome to <br />
                <Logo />
              </h1>
            </div>
            <div className="account-testimonial-wrap">
              <div className="mt-5">
                <p className="paragraph-large">
                  &quot;It’s intuitive, functional, easy-to-setup and presents
                  content in an interactive”.
                </p>
                <div className="account-author-wrap">
                  <div className="account-avatar">
                    <img
                      src="./src/assets/Testimonial_Avatar.webp"
                      loading="lazy"
                      alt=""
                      className="image-cover"
                    />
                  </div>
                  <div className="account-author-details">
                    <div className="paragraph-regular">David Smith</div>
                    <div className="footnote">UI Designer</div>
                  </div>
                </div>
              </div>
              <FontAwesomeIcon
                icon={faQuoteRight}
                className="account-quote-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
