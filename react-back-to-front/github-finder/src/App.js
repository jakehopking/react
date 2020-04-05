import React, {Component, Fragment} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import "./App.css";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

export class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };

  searchUsers = async text => {
    this.setState({loading: true});
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({users: res.data.items, loading: false});
  };

  getUser = async userName => {
    this.setState({loading: true});
    const res = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({user: res.data, loading: false});
  };

  getUserRepos = async userName => {
    this.setState({loading: true});
    const res = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({repos: res.data, loading: false});
  };

  clearUsers = e => {
    e.preventDefault();
    this.setState({users: [], loading: false});
  };

  setAlert = (message, type) => {
    this.setState({alert: {message: message, type: type}});

    setTimeout(() => {
      this.setState({alert: null});
    }, 4000);
  };

  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
  //   this.setState({loading: true});
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({users: res.data, loading: false});
  // }

  render() {
    const {users, user, repos, loading, alert} = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github" />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/users/:login"
                render={props => (
                  <User
                    {...props}
                    getUserRepos={this.getUserRepos}
                    getUser={this.getUser}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
