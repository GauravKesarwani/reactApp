import React, { Component } from 'react';
import VideoListItem from '../components/VideoListItem.jsx';
import { connect } from 'react-redux';
import { selectVideo } from '../actions/index';
import { bindActionsCreators } from 'redux';

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.videoItems =  props.videos.map((video) => {
      return <VideoListItem 
        onVideoSelect = {props.onVideoSelect}
        key={video.etag} 
        video={video} />
    });
  }

  render() {
    return (
      <ul className="col-md-4 list-group">
        {this.videoItems}
      </ul>
    );
  };
};

// Argument is application state 

function mapStateToProps(state) {
  //Whatever is returned from here will show up as props inside of VideoList

  return {
    videos: state.videos
  };
}


//Whatever is returned from here will show up as props inside of VideoList(container)
// this.props.selectVideo
function mapDispatchToProps(dispatch) {
  // Whenever selectVideo is called, the result should be passed to all the reducers
  // The dispatch parameter is responsible for dispatching the action to all the reducers in application

  return bindActionsCreators({ selectVideo: selectVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);