import _ from 'lodash';
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

    this.fetchVideos = this.fetchVideos.bind(this);

    this.fetchVideos();
  }

  fetchVideos(term = '') {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
    });
  }

  render() {
    const onVideoSearch = _.debounce(term => {this.fetchVideos(term)}, 300); 
    return (
      <div>
        <SearchBar
          onVideoSearch={onVideoSearch}
        />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo =>
            this.setState({
              selectedVideo: selectedVideo
            })
          }
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
