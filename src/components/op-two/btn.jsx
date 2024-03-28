function Button() {
          return(
              <>
              <button className="button-white" onClick={AddUser}>Action</button> 
              </>
          )
      }
      
      function AddUser() {
          console.log("ADDED")
      }
      
export default Button