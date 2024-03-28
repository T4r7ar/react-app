import logo from"../img/logo/Logo(White).png"
import FColumns from "./f-columns"
import FSubscribe from "./f-subscribe"
import "./footer.css"

function Footer(){
          return(
                    <div className="footer-bg">
                              <div className="container">
                                        <div className="footer">
                                                  <div className="footer-logo">
                                                            <img src={logo} alt=""/>
                                                  </div>
                                                  <div className="footer-content">
                                                            <div className="footer-columns">
                                                                      <FColumns />
                                                            </div>

                                                            <div className="f-subscribe">
                                                                      <FSubscribe />
                                                            </div>
                                                  </div>

                                        </div>
                                                  <div className="copyright">Copyright 2024</div>
                              </div>
                    </div>
          )
}

export default Footer