import React, {useEffect, Fragment, useContext} from "react";
import GithubContext from "../../context/github/githubContext";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";
import Repos from "../repos/Repos";

const User = ({match}) => {
  const githubContext = useContext(GithubContext);

  const {getUser, user, loading, getUserRepos, repos} = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    html_url,
    following,
    followers,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to results
      </Link>
      <br />
      <br />
      <p>
        Hireable:&nbsp;
        {hireable ? (
          <i className="fas fa-check text-success"></i>
        ) : (
          <i className="fas fa-times-circle text-danger"></i>
        )}
      </p>
      <div className="card grid-2">
        <div className="all-center">
          <img src={avatar_url} className="round-img" style={{width: "150px"}} alt="" />
          <h3>{name}</h3>
          <p>{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
              <a
                className="btn btn-dark"
                target="_blank"
                rel="noopener noreferrer"
                href={html_url}
              >
                Go to Github Profile
              </a>
              <ul>
                <li>
                  {login && (
                    <Fragment>
                      <strong>Username: </strong> {login}
                    </Fragment>
                  )}
                </li>
                <li>
                  {company && (
                    <Fragment>
                      <strong>Company: </strong> {company}
                    </Fragment>
                  )}
                </li>
                <li>
                  {blog && (
                    <Fragment>
                      <strong>Website: </strong>{" "}
                      <a
                        href={`http://${blog}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {blog}
                      </a>
                    </Fragment>
                  )}
                </li>
              </ul>
            </Fragment>
          )}
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-dark">Public repos: {public_repos}</div>
        <div className="badge badge-warning">Public gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
