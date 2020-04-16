import React, {useEffect} from "react";
import {connect} from "react-redux";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import PropTypes from "prop-types";
import {getLogs} from "../../actions/logActions";

const Logs = ({log: {logs, loading}, getLogs}) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Bug logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <li className="collection-item">No bugs :)</li>
        ) : (
          logs.map((log) => <LogItem key={log.id} log={log} />)
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  log: state.log,
  // OR and don't need to destructure above...
  // logs: state.log.logs,
  // loading: state.log.loading,
});

Logs.prototypes = {
  logs: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {getLogs})(Logs);
