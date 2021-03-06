import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
// import axios from "../../axios";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
// import FullPost from "./FullPost/FullPost";

import "./Blog.css";

class Blog extends Component {
  
  render() {
    console.log(this.props);
    return (
      <div className="Blog">
        <header>
          <ul>
            <li>
              <NavLink 
                to="/posts"
                activeClassName="active--home" 
                activeStyle={{
                  textDecoration: 'line-through'
                }}
                exact>
                  Posts</NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname: '/new-post', // by default absolute
                // pathname: this.props.match.url + '/new-post', // builds relative
                hash: '#someanchor',
              }}>New Post</NavLink>
            </li>
          </ul>
        </header>
        {/* <Route path="/" exact render={() => <Posts />} /> */}
        <Switch>
          <Route path="/new-post" exact component={NewPost} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
