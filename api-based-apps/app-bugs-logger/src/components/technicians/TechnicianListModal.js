import React, {useState, useEffect} from "react";
import Preloader from "../layout/Preloader";
import TechnicianItem from "./TechnicianItem";

const TechnicianListModal = () => {
  const [technicians, setTechnicians] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechnicians();
    // eslint-disable-next-line
  }, []);

  const getTechnicians = async () => {
    // setLoading(true);

    const res = await fetch("/technicians");
    const data = await res.json();

    setTechnicians(data);
    setLoading(false);
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <div id="technicians-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading && technicians.length === 0 ? (
            <li className="collection-item">No technicians :(</li>
          ) : (
            technicians.map((technician) => (
              <TechnicianItem key={technician.id} technician={technician} />
            ))
          )}
        </ul>
      </div>
      <div className="modal-footer"></div>
    </div>
  );
};

export default TechnicianListModal;
