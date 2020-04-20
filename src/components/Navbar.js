import React from 'react';
import {Link} from "react-router-dom";

const Navbar = ({title}) => {
  return (
      <nav>
        <div className="nav-wrapper">
         <a href="#" className="brand-logo">{title}</a>
         <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/add">ADD ACTOR</Link>
          </li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar;
