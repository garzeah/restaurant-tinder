<<<<<<< HEAD
import React from "react";
import Link from "./router/Link";
=======
import React from 'react';
import Link from './Link';
>>>>>>> parent of e2fd339... Revert "Revert "changed file structure""

const Header = () => {
  return (
    <div className="ui large menu" style={{background: "#F26666", borderRadius: "0px"}}>
      <div>  
        <Link href="/" className="item" style={{ color: "white" }}>
          Home
        </Link>
      </div>
    </div>
  )
};

export default Header;