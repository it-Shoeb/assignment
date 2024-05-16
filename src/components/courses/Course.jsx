import "./course.css";
import onlineLearning from "../../assets/icons/Online learning.svg";
import graduated from "../../assets/icons/Graduated.svg";
import questionMark from "../../assets/icons/Question mark.svg";
import complete from "../../assets/icons/Complete.svg";
import eye from "../../assets/icons/eye.svg";

export default function Course() {
  return (
    <>
      <div className="courses">
        <div className="achievements">
          <div className="achievement">
            <img className="purple" src={onlineLearning} alt="" />
            <div className="achievement-content">
              <p className="achievement-heading purple">24</p>
              <p className="achievement-name">Course</p>
            </div>
          </div>
          <div className="vr"></div>
          <div className="achievement">
            <img className="purple" src={graduated} alt="" />
            <div className="achievement-content">
              <p className="achievement-heading purple">30K+</p>
              <p className="achievement-name">Learners</p>
            </div>
          </div>
          <div className="vr"></div>
          <div className="achievement">
            <img className="purple" src={questionMark} alt="" />
            <div className="achievement-content">
              <p className="achievement-heading purple">100K+</p>
              <p className="achievement-name">Doubts Solved</p>
            </div>
          </div>
          <div className="vr"></div>
          <div className="achievement">
            <img className="purple" src={complete} alt="" />
            <div className="achievement-content">
              <p className="achievement-heading purple">10K+</p>
              <p className="achievement-name">Students Projects</p>
            </div>
          </div>
        </div>

        <div className="course-curriculum">
          <div className="course-heading">
            <div className="course-description">
              Full Stack COURSE LEARNING PATH
            </div>
            <div className="course-details">
              <span className="gradient">Full Stack Developer</span> Course
              Curriculum
            </div>
          </div>

          <div className="courses-content">
            <div className="course">
              <div className="course-lhs">
                <div className="course-lhs-heading">C++</div>
                <div className="course-lhs-description">
                  Learn C++ for strong programming fundamentals.
                </div>
              </div>
              <div className="course-rhs">
                <div className="view cta-b">
                  <img src={eye} alt="" />
                  View Curriculum
                </div>
              </div>
            </div>

            <div className="course">
              <div className="course-lhs">
                <div className="course-lhs-heading">MERN Stack</div>
                <div className="course-lhs-description">
                  Master the MERN stack for high-demand projects.
                </div>
              </div>
              <div className="course-rhs">
                <div className="view cta-b">
                  <img src={eye} alt="" />
                  View Curriculum
                </div>
              </div>
            </div>

            <div className="course">
              <div className="course-lhs">
                <div className="course-lhs-heading">
                  Data Structure & Algorithm
                </div>
                <div className="course-lhs-description">
                  Excel in Data Structures and Algorithms for interview success.
                </div>
              </div>
              <div className="course-rhs">
                <div className="view cta-b">
                  <img src={eye} alt="" />
                  View Curriculum
                </div>
              </div>
            </div>

            <div className="course">
              <div className="course-lhs">
                <div className="course-lhs-heading">Competitve Programming</div>
                <div className="course-lhs-description">
                  Excel in Data Structures and Algorithms for interview success.
                </div>
              </div>
              <div className="course-rhs">
                <div className="view cta-b">
                  <img src={eye} alt="" />
                  View Curriculum
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
