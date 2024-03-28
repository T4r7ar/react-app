import User from "./user"
import "./users.css"

function Users() {
          return (
                    <div className="users-bg">
                              <div className="container">
                                        <div className="users">
                                                  <div className="user-1"><User /></div>
                                                  <div className="user-2"><User /></div>
                                                  <div className="user-3"><User /></div>
                                        </div>
                              </div>
                    </div>
          )
}

export default Users