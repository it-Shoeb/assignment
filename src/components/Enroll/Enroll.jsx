import './enroll.css'
import tag from '../../assets/icons/tag.svg'
export default function Enroll() {
    return(
        <>
            <div className="enroll-card">
                <div className="enroll-fullStack">
                    <div className="blur"></div>
                    <div className="enroll-lhs">
                        <div className="enroll-heading">Enroll for DataScience Bundle @₹1,499 <s>₹2,600</s></div>
                        <div className="enroll-description">Become an Expert in the data science field by enrolling into 6 Extensive courses!</div>
                        <div className="enroll-cta"><img src={tag} alt="" /> Enroll Now</div>
                    </div>
                    <div className="enroll-rhs">
                        <div className="courses">Total number of Courses<div className="count">6</div></div>
                        <div className="certificate">Total number of Certificate<div className="count">6</div></div>
                        <div className="access">Access to Course<div className="count">Lifetime</div></div>
                    </div>
                </div>
                <div className="enroll-dataScience">
                <div className="blur"></div>
                    <div className="enroll-lhs">
                        <div className="enroll-heading">Enroll for DataScience Bundle @₹1,499 <s>₹2,600</s></div>
                        <div className="enroll-description">Become an Expert in the data science field by enrolling into 6 Extensive courses!</div>
                        <div className="enroll-cta"><img src={tag} alt="" /> Enroll Now</div>
                    </div>
                    <div className="enroll-rhs">
                        <div className="courses">Total number of Courses<div className="count">6</div></div>
                        <div className="certificate">Total number of Certificate<div className="count">6</div></div>
                        <div className="access">Access to Course<div className="count">Lifetime</div></div>
                    </div>
                </div>
            </div>
        </>
    )
}