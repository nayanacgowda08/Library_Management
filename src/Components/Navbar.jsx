// eslint-disable-next-line no-unused-vars
import React from "react";
import "../assets/styles/navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  
  return (
    <>
      <div className="navbar">
        <div className="logo">
          {/* <img
            src="https://i.pinimg.com/236x/77/c6/5f/77c65f9c80a54930091609c2d2f89f52.jpg"
            alt=""
          /> */}
        </div>

        <div className="link">
          <ul>
            <li>
              <NavLink to="/adminportal/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/adminportal/books">BOOKS</NavLink>
            </li>
            <li>
              <NavLink to="/adminportal/addbooks">ADD BOOKS</NavLink>
            </li>
            <li>
              <NavLink  to="/adminportal/users">USERS</NavLink >
            </li>
            <li>
              <NavLink to="/adminportal/addusers">ADD USERS</NavLink>
            </li>
            <li>
              <NavLink to="/adminportal/contact">CONTACT</NavLink>
            </li>
            <li>
              <Link className="" 
               to="/">LOGOUT</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
