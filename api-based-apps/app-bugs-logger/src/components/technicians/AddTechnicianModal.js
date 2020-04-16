import React, {useState} from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechnicianModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({html: "Please proivde full name"});
    } else {
      console.log(firstName, lastName);

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

export default AddTechnicianModal;
