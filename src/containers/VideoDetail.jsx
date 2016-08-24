import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoDetail extends Component {

  constructor(video) {
    super(props);
    if (!video) {
      return <div>Loading...</div>;
    }
    this.video = video
  }
 
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  render() {
    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }
};

// map the application state to the props of the container
function mapStateToProps(state) {
  //Whatever is returned from here will show up as props inside of VideoList

  return {
    videos: state.activeVideo
  };
}

export default connect(mapStateToProps)(VideoDetail)