import React, {Component} from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: "",
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };
  onTextChange = e => this.setState({[e.target.name]: e.target.value});
  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter a search term!", "danger");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({text: ""});
    }
  };
  render() {
    const {showClear, clearUsers} = this.props;
    return (
      <form onSubmit={this.onSubmit} className="form">
        <input
          type="text"
          name="text"
          id="searchBar"
          placeholder="Search Users..."
          value={this.state.text}
          onChange={this.onTextChange}
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
  }
}

export default Search;
