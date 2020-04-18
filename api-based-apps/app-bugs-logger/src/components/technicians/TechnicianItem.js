import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
import {deleteTechnician} from "../../actions/technicianActions";

const TechnicianItem = ({technician, deleteTechnician}) => {
  const {firstName, lastName, id} = technician;

  const onDelete = () => {
    deleteTechnician(id);
    M.toast({html: `${firstName} ${lastName} successfully deleted!`});
  };

  return (
    <li className="collection-item">
      {firstName} {lastName}
      <a href="#!" className="secondary-content" onClick={onDelete}>
        <i className="material-icons grey-text">delete</i>
      </a>
    </li>
  );
};

TechnicianItem.propTypes = {
  technician: PropTypes.object.isRequired,
  deleteTechnician: PropTypes.func.isRequired,
};

export default connect(null, {deleteTechnician})(TechnicianItem);
