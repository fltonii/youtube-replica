import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyC9Im6bfTGWk5GTvowqjYdY5IzpCmael04';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null };

    YTSearch({ key: API_KEY, term: 'c#' }, videos => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          videos={this.state.videos} 
          onVideoSelect={ selectedVideo => this.setState({ 
            selectedVideo: selectedVideo
          })}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
