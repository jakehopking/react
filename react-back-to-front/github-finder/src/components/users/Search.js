import React, {useState} from "react";
import PropTypes from "prop-types";

const Search = ({searchUsers, showClear, clearUsers, setAlert}) => {
  const [text, setText] = useState("");
  const onTextChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter a search term!", "danger");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <input
        type="text"
        name="text"
        id="searchBar"
        placeholder="Search Users..."
        value={text}
        onChange={onTextChange}
      />
      <button className="btn btn-dark btn-block" type="submit" value="Search">
        Search
      </button>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </form>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
