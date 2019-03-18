import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  // console.log(props);
  
  if(!song) {
    return <div>No song selected, please select one to play some tooons!</div>
  }

  return (
    <div>
      <h3>
        Song details:
      </h3>
      <p>
        Title: {song.title}
        <br/>
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
};


export default connect(mapStateToProps)(SongDetail);