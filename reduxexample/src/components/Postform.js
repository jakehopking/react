import React, {Component} from "react";

class Postform extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
          <label htmlFor="formTitle">Title: </label>
          <br />
          <input id="formTitle" name="formTitle" type="text" />
          <hr />
          <label htmlFor="formBody">Body: </label>
          <br />
          <input id="formBody" name="formBody" type="text" />
          <br />
          <button type="submit">Add new post</button>
        </form>
      </div>
    );
  }
}

export default Postform;
