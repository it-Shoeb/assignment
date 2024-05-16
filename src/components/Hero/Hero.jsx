import './hero.css'
import hat from '../../assets/icons/Graduation hat.svg'
import award from '../../assets/icons/award_star.svg'
import questionMark from '../../assets/icons/interrogation.svg'
import paperPlane from '../../assets/icons/paper-plane.svg'

export default function Hero() {
    return(
        <>
            <div className="hero">
                <div className="hero-lhs">
                    <div className="alumni">
                        <img src={hat} alt="" /> 
                        <p>An <strong>IIT Delhi</strong> Alumni Initiative</p>
                    </div>
                    <div className="hero-content">
                        <p className='hero-heading'>Become an Expert in the field of <span className="purple">Data Science with 6 courses</span></p>
                        <p className='hero-description'>A specially crafted Tech Kickstarter, with <strong>5+ extensive online courses</strong> .</p>
                    </div>
                    <div className="provide-container">
                        <div className="provide">
                            <img src={award} alt="" />Personal Mentorship
                        </div>
                        <div className="provide">
                            <img src={award} alt="" />Internship Assistance
                        </div>
                        <div className="provide">
                            <img src={award} alt="" />Industry Certified Courses
                        </div>
                    </div>

                    <div className="hero-cta-container">
                        <div className="hero-enrollNow cta-bg">Enroll Now <img src={paperPlane} alt="" /></div>
                        <div className="hero-knowMore cta">Know More <img src={questionMark} alt=""/></div>
                    </div>
                </div>
            </div>
        </>
    )
}