import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getTechnicians} from "../../actions/technicianActions";

const TechnicianSelectOptions = ({
  getTechnicians,
  technician: {technicians, loading},
}) => {
  useEffect(() => {
    getTechnicians();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    technicians !== null &&
    technicians.map((t) => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

TechnicianSelectOptions.propTypes = {
  getTechnicians: PropTypes.func.isRequired,
  technician: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  technician: state.technician,
});

export default connect(mapStateToProps, {getTechnicians})(TechnicianSelectOptions);
