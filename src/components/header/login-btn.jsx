import React, { useState, useEffect } from 'react';

function LoginButton() {
        const [isMobile, setIsMobile] = useState(false);
      
        useEffect(() => {
          const handleResize = () => {
            setIsMobile(window.innerWidth < 375);
          };
      
          handleResize();
      
          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);

    return(
        <>
        {isMobile ? (<button className="mobile-button" onClick={AddUser}>=</button>
        ) : (<button className="button-black" onClick={AddUser}>Login</button>
        )}
        </>
    )
}

function AddUser() {
    console.log("ADDED")
}

export default LoginButton