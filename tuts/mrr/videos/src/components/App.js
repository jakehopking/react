import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {
  state = { 
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.onFormSubmit('Wolves');
  }

  onFormSubmit = async (term) => {
    // console.log(term);
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    // console.log(response);
    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0] });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
    
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
        {/* I have {this.state.videos.length} */}
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="six wide column">
              <VideoList 
                onVideoSelect={this.onVideoSelect} 
                videos={this.state.videos} 
                />
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}


export default App;
