import React from 'react';
import Link from './Link';

const Header = () => {
  return (
    <div className="ui large menu" style={{background: "#F65275", borderRadius: "0px"}}>
      <div>  
        <Link href="/" className="item" style={{ color: "white" }}>
          Home
        </Link>
      </div>
    </div>
  )
};

export default Header;