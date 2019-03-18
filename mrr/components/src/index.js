// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
 
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to drive that distance every day?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          avatar={faker.image.avatar()} 
          author="Jake" 
          timeAgo="Today, 18:22"
          comment="Nice!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          avatar={faker.image.avatar()} 
          author="Mami" 
          timeAgo="Yesterday, 11:21" 
          comment="Nice post man!" 
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);