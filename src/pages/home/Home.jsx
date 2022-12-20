import { useRef } from "react";
import { Link } from "react-router-dom";
// import Footer from "./Footer";
// import Features from "./Features";
import { ReactComponent as ArrowDown } from "../../assets/arrow-down.svg";
import { ReactComponent as HeaderImg } from "../../assets/agile_tasks.svg";
import { ReactComponent as PaperSheet } from "../../assets/paper_sheet.svg";
import "./home.css";

const HomePage = () => {
  const myRef = useRef(null);

  const scrollFromHeader = () => {
    window.scrollTo({
      top: myRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="mainpage ">
      <header className="mainheader mb-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-7 header-about position-relative">
              <h3 className="h2 text-uppercase mb-3">
                reach the most of your learning <br />
                journey, with the best tech solution
              </h3>
              <p className="hero_p mb-5">
                Test your knowledge with a dynamic questions types, lorem ipsum
                dolor sit amet, consectetur adipiscing elit. donec vel gravida
                quam. sed tempus tincidunt sem eu lacinia.
              </p>
              <div className="mt-5 call_action_hold">
                <Link
                  to="/login"
                  className="call_action text-uppercase py-2 px-4 h3 rounded-4 "
                >
                  join now
                </Link>
              </div>
            </div>

            <div className="col d-flex justify-content-end position-relative mt-5">
              <div className=" position-absolute end-0 row">
                <HeaderImg />
                <PaperSheet className="mt-5" />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center ">
            <ArrowDown className="down_arrow" onClick={scrollFromHeader} />
          </div>
        </div>
      </header>
      <div className="features py-5" id="features" ref={myRef}>
        <h3 className="text-center">We give lorem ipsum</h3>

        <div class="features-body d-grid text-white">
          <section class="feature-item d-flex flex-column gap-1 rounded-4 p-5 first-gradient">
            <i class="feature-icon rounded-pill "></i>
            <strong class="feature-title">Daily Test your self</strong>
            <small class="feature-subtitle text-white-50">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore.
            </small>
            <Link>Read More</Link>
          </section>

          <section class="feature-item d-flex flex-column gap-1 rounded-4 p-5 second-gradient">
            <i class="feature-icon rounded-pill "></i>
            <strong class="feature-title">varient Testing techniuqes</strong>
            <small class="feature-subtitle text-white-50">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore.
            </small>
            <Link>Read More</Link>
          </section>

          <section class="feature-item d-flex flex-column gap-1 rounded-4 p-5 third-gradient">
            <i class="feature-icon rounded-pill "></i>
            <strong class="feature-title">spaced repeation flashcards</strong>
            <small class="feature-subtitle text-white-50">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore.
            </small>
            <Link>Read More</Link>
          </section>
        </div>
      </div>
      <hr />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
