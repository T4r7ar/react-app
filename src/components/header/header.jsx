import "./header.css"
import logo from"../img/logo/Logo(Black).png"
import Navigation from "./navigation"
import LoginButton from "./login-btn"

function Header() {

    return(
        <>
            <header>
                <div className="container">
                    <div className="header">
                        <div className="header-logo"><img src={logo} alt=""/></div>
                        <div className="header-nav">
                            <Navigation />
                        </div>
                        <div className="header-button">
                            <LoginButton />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header