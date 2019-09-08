import React from 'react';
import {NavbarLink} from "../../models/navbar-link";
import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/img/logo/logo.svg"

const Navbar: React.FC<{ links: NavbarLink[] }> = ({links}) => {
  return (
    <nav className="fixed-top navbar navbar-expand-md d-block px-0">
      <div className="body-wrapper">
        <div className="d-flex justify-content-between">
          <Link className="navbar-brand" to="/">
            <img className="img-brand" src={logo} alt="Test"/>
          </Link>

          <div className="collapse navbar-collapse">
            <div className="navbar-nav ml-auto text-nowrap">
              {links.map((link: NavbarLink) => (
                <NavLink exact to={link.link} key={link.link}
                         className="nav-item nav-link font-weight-bold">{link.title}</NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
