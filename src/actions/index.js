//Action Creator - returns an action

export function selectVideo(video) {
  console.log('Within Action Creator:', video.title);
  return {
    type: 'VIDEO_SELECTED',
    payload: video
  };
}