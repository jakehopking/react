import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import {addTechnician} from "../../actions/technicianActions";

const AddTechnicianModal = ({addTechnician}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({html: "Please proivde full name"});
    } else {
      addTechnician({firstName, lastName});
      M.toast({html: `${firstName} ${lastName} successfully added as a new technician!`});

      // Clear fields
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="add-technician-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              First name
            </label>
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

AddTechnicianModal.propTypes = {
  addTechnician: PropTypes.func.isRequired,
};

export default connect(null, {addTechnician})(AddTechnicianModal);
