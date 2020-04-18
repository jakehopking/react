import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Preloader from "../layout/Preloader";
import TechnicianItem from "./TechnicianItem";
import {getTechnicians} from "../../actions/technicianActions";

const TechnicianListModal = ({getTechnicians, technician: {technicians, loading}}) => {
  useEffect(() => {
    getTechnicians();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div id="technicians-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading && technicians !== null && technicians.length === 0 && (
            <li className="collection-item">
              No technicians to display.
              <br />
              <br />
              <a
                href="#add-technician-modal"
                className="waves blue btn btn-block modal-trigger"
              >
                Add new technician
              </a>
            </li>
          )}
          {!loading &&
            technicians !== null &&
            technicians.map((technician) => (
              <TechnicianItem key={technician.id} technician={technician} />
            ))}
        </ul>
      </div>
      <div className="modal-footer"></div>
    </div>
  );
};

TechnicianListModal.propTypes = {
  technician: PropTypes.object.isRequired,
  getTechnicians: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  technician: state.technician,
});

export default connect(mapStateToProps, {getTechnicians})(TechnicianListModal);
