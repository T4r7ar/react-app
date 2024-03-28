function OpButton() {
          return(
              <>
              <button className="button-black" onClick={AddUser}>Action</button> 
              </>
          )
      }
      
      function AddUser() {
          console.log("ADDED")
      }
      
export default OpButton