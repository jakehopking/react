import React, {useRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {searchLogs} from "../../actions/logActions";

const SearchBar = ({searchLogs}) => {
  const query = useRef("");

  const onSearch = (e) => {
    searchLogs(query.current.value);
  };

  const onClearSearch = () => {
    query.current.value = "";
    searchLogs("");
  };

  return (
    <nav style={{marginBottom: "30px"}} className="blue">
      <div className="nav-wrapper">
        <form onChange={onSearch}>
          <div className="input-field">
            <input
              id="search"
              type="search"
              ref={query}
              placeholder="Search logs..."
              required
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons" onClick={onClearSearch}>
              close
            </i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};

export default connect(null, {searchLogs})(SearchBar);
