import React, {useState} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {addLog} from "../../actions/logActions";

import M from "materialize-css/dist/js/materialize.min.js";
import TechnicianSelectOptions from "../technicians/TechnicianSelectOptions";

const AddLogsModal = ({addLog}) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [technician, setTechnician] = useState("");

  const onSubmit = () => {
    if (message === "" || technician === "") {
      M.toast({html: "Please enter a message and technician"});
    } else {
      const newLog = {
        message,
        technician,
        attention,
        date: new Date(),
      };

      addLog(newLog);
      M.toast({html: `Log added by ${technician}`});

      // Clear fields
      setMessage("");
      setTechnician("");
      setAttention(false);
    }
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter bug</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Bug message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="technician"
              value={technician}
              className="browser-default"
              onChange={(e) => setTechnician(e.target.value)}
            >
              <option value="" disabled>
                Select technician
              </option>
              <TechnicianSelectOptions />
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={() => setAttention(!attention)}
                />
                <span>Needs attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves blue btn" onClick={onSubmit}>
          Enter
        </a>
      </div>
    </div>
  );
};

AddLogsModal.propTypes = {
  addLog: PropTypes.func.isRequired,
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

export default connect(null, {addLog})(AddLogsModal);
