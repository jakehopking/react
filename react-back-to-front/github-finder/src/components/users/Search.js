import React, {useState, useContext} from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const {clearUsers} = githubContext;
  const {setAlert} = alertContext;

  const [text, setText] = useState("");
  const onTextChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter a search term!", "danger");
    } else {
      githubContext.searchUsers(text);
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
      {githubContext.users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </form>
  );
};

export default Search;
