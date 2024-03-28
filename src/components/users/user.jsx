import ava from "../img/users/Image.svg"
import facebook from "../img/icons/facebook-icon.svg"
import twitter from "../img/icons/twitter-icon.svg"

function User() {
          return(
                    <div className="user-bg">
                              <div className="user">
                                        <div className="user-review">
                                                  “A testimonial describing what the person thinks about this service, product or startup in general.”
                                        </div>
                                        <div className="about-user">
                                                  <div className="user-avatar"><img src={ava} alt="" /></div>
                                                  <div className="user-name">Name Surname</div>
                                                  <div className="user-desc">
                                                            <div className="desc-text">Description</div>
                                                            <div className="desc-icons">
                                                                      <div className="facebook-icon">
                                                                                <img src={facebook} alt="" />
                                                                      </div>
                                                                      <div className="twitter-icon">
                                                                                <img src={twitter} alt="" />
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                    </div>
          )
}

export default User