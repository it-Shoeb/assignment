import './header.css'

export default function Header() {
    return(
        <>
            <header>
                <div className="primary-navbar">
                    <div className="logo-container">
                        <p className="logo">Logo</p>
                    </div>

                    <div className="header-cta-container">
                        <div className="login cta">Login</div>
                        <div className="signup cta-bg">Signup</div>
                    </div>
                </div>

                <div className="secondry-navbar">
                    <div className="nav-links">
                        <a href="/" className="link active">Overview</a>
                        <a href="/" className="link">Curriculum</a>
                        <a href="/" className="link">Refund</a>
                        <a href="/" className="link">Testimonials</a>
                    </div>
                </div>
                
            </header>
        </>
    )
}