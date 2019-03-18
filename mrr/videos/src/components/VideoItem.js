import React from 'react';
import './VideoItem.scss';

const VideoList = ({ video, onVideoSelect }) => {
  return (
    <div 
      onClick={() => onVideoSelect(video)} 
      className="video-item item">
      <div className="ui small image">
        <img 
          src={video.snippet.thumbnails.medium.url} 
          alt={video.snippet.title} />
      </div>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
        {/* <div className="description">
          <p>{video.snippet.description}</p>
        </div> */}
      </div>
    </div>
  );
};

export default VideoList;