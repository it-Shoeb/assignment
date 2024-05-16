import "./opportunity.css";
import timer from "../../assets/icons/bx_time-five.svg";
import step from "../../assets/icons/steps.svg";
import scribble from "../../assets/icons/scribble final version-24.svg";

export default function Opportunity() {
  return (
    <>
      <div className="opportunity-container">
        <div className="opportunity-heading">
          Don't miss out on this
          <span className="purple">limited-time opportunity</span> to learn for
          <span className="purple">Free</span>!
        </div>

        <div className="progresBar-container">
          <div className="floatingArrow">
            <img src={scribble} alt="" />
          </div>
          <div className="progressBar-heading">100% Refund Offer 😎 </div>
          <div className="progreBar">20 seats left</div>
          <div className="progressBar-timer">
            <img src={timer} alt="" /> Offer ends in 10:00Mins
          </div>
        </div>

        <div className="steps-container">
          <div className="steps-heading">How does it work?</div>
        </div>
      </div>

      <div className="topCompanies-container">
        <div className="topCompanies-heading">Top Companies Hiring <span className="gradient">Full Stack Developer</span></div>
        <div className="companies-logos">
          <div className="company-logo">Logo</div>
          <div className="company-logo">Logo</div>
          <div className="company-logo">Logo</div>
          <div className="company-logo">Logo</div>
          <div className="company-logo">Logo</div>
          <div className="company-logo">Logo</div>
          <div className="company-logo">Logo</div>
          <div className="company-logo">Logo</div>
          <div className="company-logo">Logo</div>
          <div className="company-logo">Logo</div>
          <div className="company-logo">Logo</div>
          <div className="company-logo">Logo</div>
        </div>
      </div>
    </>
  );
}
