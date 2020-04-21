import React from 'react';
import {Link} from "react-router-dom";

const Navbar = ({title}) => {
  return (
      <nav>
        <div className="nav-wrapper">
         <Link to="/" className="brand-logo">{title}</Link>
         <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar;
