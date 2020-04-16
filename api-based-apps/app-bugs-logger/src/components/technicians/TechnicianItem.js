import React from "react";
import PropTypes from "prop-types";

const TechnicianItem = ({technician}) => {
  const {firstName, lastName} = technician;

  return (
    <li className="collection-item">
      {firstName} {lastName}
      <a href="#!" className="secondary-content">
        <i className="material-icons grey-text">delete</i>
      </a>
    </li>
  );
};

TechnicianItem.propTypes = {
  technician: PropTypes.object.isRequired,
};

export default TechnicianItem;
