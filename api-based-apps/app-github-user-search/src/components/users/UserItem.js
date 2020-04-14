import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const UserItem = ({user: {avatar_url, login, html_url}}) => {
  // ☝️ alt destructuring
  // const {avatar_url, login, html_url} = props.user;
  return (
    <div className="card text-center">
      <img src={avatar_url} alt="" className="round-img" style={{width: "60px"}} />
      <h3>{login}</h3>
      <Link className="btn btn-dark btn-sml my-1" to={`/users/${login}`}>
        More
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
