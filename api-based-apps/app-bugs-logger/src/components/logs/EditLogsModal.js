import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {updateLog, clearCurrent} from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const EditLogsModal = ({updateLog, current, clearCurrent}) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [technician, setTechnician] = useState("");

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTechnician(current.technician);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === "" || technician === "") {
      M.toast({html: "Please enter a message and technician"});
    } else {
      const updateLogData = {
        id: current.id,
        message,
        technician,
        attention,
        date: new Date(),
      };

      updateLog(updateLogData);

      M.toast({html: "Log updated"});

      // Clear fields
      setMessage("");
      setTechnician("");
      setAttention(false);

      clearCurrent();
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
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
            <label htmlFor="message" className={message ? "active" : ""}>
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
              <option value="Jake Hopking">Jake Hopking</option>
              <option value="Mami Hopking">Mami Hopking</option>
              <option value="Milla Hopking">Milla Hopking</option>
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

const modalStyle = {
  width: "75%",
  height: "75%",
};

EditLogsModal.propTypes = {
  updateLog: PropTypes.func.isRequired,
  clearCurrent: PropTypes.func.isRequired,
  current: PropTypes.object,
};

const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, {updateLog, clearCurrent})(EditLogsModal);
