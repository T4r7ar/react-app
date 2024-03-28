import OpButton from "./op-btn"
import "./op.css"

function OrderP() {
          return(
                    <div className="container">
                              <div className="op-main">
                                        <div className="op-main--texts">
                                                  <div className="op-texts">
                                                            <div className="op-main--text">
                                                                      <h1>Medium length display headline</h1>
                                                                      <p>Separated they live in Bookmarks right at the coast of the famous Semantics, large language </p>
                                                            </div>
                                                            <div className="op-button-area">
                                                            <div className="op-button">
                                                                                <OpButton />
                                                                      </div>
                                                                      <div className="op-btn-text">
                                                                                <p>5,000 people like you have purchased this product!</p>
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>
                                        <div className="op-img">
                                        </div>
                              </div>
                    </div>
          )
}

export default OrderP