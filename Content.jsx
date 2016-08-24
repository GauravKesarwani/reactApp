import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from './src/components/SearchBar.jsx';
import VideoList from './src/containers/VideoList.jsx';
import VideoDetail from './src/containers/VideoDetail.jsx';

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyC0tYcOTLMFfQu0yAU6SNgjVfvYnTbAlsM';



class Content extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [ ],
                   selectedVideo: null
                  };

    this.videoSearch('Deepika Padukone'); 
  }

  videoSearch(term) {
    console.log('Video Search is called', term);
    YTSearch({ key: API_KEY , term: term }, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0] 
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
       <div>
          <SearchBar onSearchTermChange={ term => videoSearch(term)} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
       </div>
    );
  }
}

export default Content;