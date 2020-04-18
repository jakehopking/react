import React from "react";
import Moment from "react-moment";
import {connect} from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";
import {deleteLog, setCurrent} from "../../actions/logActions";

const LogItem = ({log, deleteLog, setCurrent}) => {
  const {attention, message, technician, date, id} = log;

  const onDelete = (e) => {
    e.preventDefault();
    deleteLog(id);
    M.toast({html: `Log ID${id} successfully deleted!`});
  };

  const onEdit = (e) => {
    e.preventDefault();
    setCurrent(log);
  };

  return (
    <li className="collection-item">
      <div>
        <a
          onClick={onEdit}
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
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, {deleteLog, setCurrent})(LogItem);
