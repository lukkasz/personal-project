import firebase, {firebaseRef} from 'app/firebase';
import axios from 'axios';

import * as type from './actionTypes';

try {
  var config = {
    apiKey: process.env.API_KEY,
  }
    
} catch (e) {
    
}


export function loadVideosSuccess(videos) {
  return {
    type: type.LOAD_VIDEOS_SUCCESS,
    videos
  } 
  
}

export function loadVideos() {
  return(dispatch) => {
    firebaseRef.child('videos').once('value').then((snapshot) => {
      const videosRef = snapshot.val() || {};
      const videos = Object.keys(videosRef).map((key)=>{
				return {
					id: key,
					...videosRef[key]	
				};
			});
			
			dispatch(loadVideosSuccess(videos));
    });
  }
}

export function createVideoSuccess(video) {
  return {
    type: type.CREATE_VIDEO_SUCCESS,
    video
  }
}

export function createVideo(newVideo) {
  return (dispatch) => {
    
    const youtubeAPI = "https://www.googleapis.com/youtube/v3/videos";
    const url = `${youtubeAPI}?id=${newVideo.youtubeVideoId}&key=${config.apiKey}&part=snippet`;
    
    axios.get(url).then((response) => {
      //console.log("Axios response:", response)
      const videoImgUrl = response.data.items[0].snippet.thumbnails.high.url;
      var video = {
        ...newVideo,
        imageUrl: videoImgUrl
      }
      console.log("Video to add:", video);
      
      let videoRef = firebaseRef.child('videos').push(video);
      
      return videoRef.then(() => {
        dispatch(createVideoSuccess({
          ...video,
          id: videoRef.key
        }));
      })
      
      
    });
    
    
    
  }
}
