import React, {useState} from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddLogsModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [technician, setTechnician] = useState("");

  const onSubmit = () => {
    if (message === "" || technician === "") {
      M.toast({html: "Please enter a message and technician"});
    } else {
      console.log(message, technician, attention);

      // Clear fields
      setMessage("");
      setTechnician("");
      setAttention(false);
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

export default AddLogsModal;
