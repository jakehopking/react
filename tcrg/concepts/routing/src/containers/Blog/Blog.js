import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "../../axios";
import Posts from "./Posts/Posts";
import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/new-post">New Post</a>
            </li>
          </ul>
        </header>
        <Route path="/" exact render={() => <Posts />} />

        {/* <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
            <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;
