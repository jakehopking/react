import React, {Fragment, useContext} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

function Navbar({title, icon}) {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const {isAuthenticated, logout, user} = authContext;
  const {clearContacts} = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li>Hey {user && user.name} \\(^_^)// </li>
      <li>
        <a href="#" onClick={onLogout}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li> */}
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-address-book",
};

export default Navbar;
