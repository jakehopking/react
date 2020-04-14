import React, { Component, Fragment } from "react";
import { Link, Route } from 'react-router-dom';
import axios from "../../../axios";
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import "./Posts.css";

class Posts extends Component {
  state = {
    posts: []
    // selectedPostId: null,
    // error: false
  };
  postSelectedHandler = id => {
    this.setState({ selectedPostId: id });
    this.props.history.push({
      pathname: "/posts/" + id
    })
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Max"
          };
        });
        this.setState({ posts: updatedPosts });
        // console.log( response );
      })
      .catch(error => {
        console.log(error);
        // this.setState({error: true});
      });
  }

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {      
      posts = this.state.posts.map(post => {
        // console.log('Testing', this.props);
        return (
          // <Link 
          //   key={post.id}
          //   to={"/posts/" + post.id}>
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              clicked={() => this.postSelectedHandler(post.id)}
            />
          // </Link>
        );
      });
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;
