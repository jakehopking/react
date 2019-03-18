import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Telegraph Road', duration: '12:33' },
    { title: 'Boom Like That', duration: '3:21' },
    { title: 'Californication', duration: '4:11' },
    { title: 'True Colours', duration: '4:04' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});