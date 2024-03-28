import Button from "./btn"
import "./opt.css"

function Opt () {
          return(
                    <div className="opt-bg">
                              <div className="container">
                                        <div className="opt-content">
                                                  <div className="opt-text">
                                                            <div className="opt-tag">
                                                                      Tagline
                                                            </div>
                                                            <h1>Long headline to turn your <br /> visitors into users</h1>
                                                  </div>
                                                  <div className="opt-btn">
                                                            <Button />
                                                  </div>
                                        </div>
                              </div>
                    </div>
          )
}

export default Opt