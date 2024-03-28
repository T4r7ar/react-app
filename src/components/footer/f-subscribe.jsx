import send from "../img/icons/send-icon.svg"

function FSubscribe () {
          return (
                    <div className="subscribe-content">
                              <div className="subscribe-title title">
                                       Subscribe
                              </div>
                              <div className="subscribe-input">
                                        <input type="email" className="s-input" placeholder="Enter Email" />
                                        <button className="s-submit--btn"><img src={send} alt="" /></button>
                              </div>
                              <div className="subscribe-desc">
                                        Join our newsletter to stay up to date on features and releases
                              </div>
                    </div>
          )
}

export default FSubscribe