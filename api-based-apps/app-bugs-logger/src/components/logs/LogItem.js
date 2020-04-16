import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

const LogItem = ({log}) => {
  const {attention, message, technician, date, id} = log;
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${attention ? "red-text" : "blue-text"}`}
        >
          {message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID#{id} </span>
          last updated by <span className="black-text">{technician}</span> on{" "}
          <Moment format="YYYY-MM-DD HH:mm:ss">{date}</Moment>
        </span>
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
