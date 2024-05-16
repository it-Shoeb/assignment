import './intership.css'
import certificate from '../../assets/images/certificate.svg'
import intership from '../../assets/images/intership.svg'
import award from '../../assets/icons/award_star.svg'

export default function Intership() {
    return(
        <>
            <div className="Intership-container">
                <div className="intership-heading">Unlock <span className="purple">6 Certificates & Internship Opportunities</span>!</div>
                <div className="intership-section">
                    <div className="certificate-card">
                        <div className="certificate-heading">Get 6 Industry Recognized Certificates!</div>
                        <div className="certificate-image">
                            <img src={certificate} alt="" />
                        </div>
                        <div className="provider">
                            <div className="provide"><img src={award} alt="" />Official and Verified</div>
                            <div className="provide"><img src={award} alt="" />Enhances Credibility</div>
                        </div>
                    </div>
                    <div className="intership-card">
                        <div className="intership-c-heading">Bag Internship Opportunities!</div>
                        <div className="intership-description">With every course, we make you not only industry-ready but also help you crack your first internship.</div>
                        <div className="intership-image">
                            <img src={intership} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}