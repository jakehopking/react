import React from "react";
// import PropTypes from "prop-types";

const RepoItem = ({repo}) => {
  return (
    <div className="card">
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        title={repo.description}
      >
        {repo.name}
      </a>
    </div>
  );
};

// RepoItem.propTypes = {
// RepoItem: PropTypes.object.isRequired,
// };

export default RepoItem;
