import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import {Link, browserHistory} from 'react-router';
import * as actions from 'app/actions/videosActions';

class CreateVideo extends Component {
  
    constructor(props) {
      super(props);
      this.onFromSubmit = this.onFromSubmit.bind(this);
      this.parseYoutubeLink = this.parseYoutubeLink.bind(this);
    }
    
    parseYoutubeLink(link) {
      const queryParam = "?v=";
      const sliceStart = link.indexOf(queryParam) + queryParam.length;
      const sliceEnd = link.indexOf("&") !== -1 ? link.indexOf("&") :  undefined;

      return  link.slice(sliceStart, sliceEnd);
      
    }
    
    onFromSubmit(e) {
      e.preventDefault();
      
      const videoTitle = this.refs.videoTitle.value;
      const videoDescription = this.refs.videoDescription.value;
      const videoYoutubeLink = this.refs.videoYoutubeLink.value;
      
      const youtubeVideoId = this.parseYoutubeLink(videoYoutubeLink);
      
      if (videoTitle.length != 0 && videoDescription.length != 0 && youtubeVideoId.length != 0) {
        this.refs.videoTitle.value = '';
        this.refs.videoDescription.value = '';
        this.refs.videoYoutubeLink.value = '';
        
        const newVideo = {
          title: videoTitle,
          description: videoDescription,
          youtubeVideoId: youtubeVideoId
        }
        
        this.props.createVideo(newVideo);
      }
    }
    
    render() {
        return (
          <div className="">
            <form onSubmit={this.onFromSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input className="form-control" type="text" id="title" ref="videoTitle" placeholder="Title" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea id="description" ref="videoDescription" className="form-control" rows="3"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="youtubeLink">Youtube Link</label>
                <input className="form-control" type="text" id="youtubeLink" ref="videoYoutubeLink" placeholder="Youtube Link" />
              </div>
              <div>
                <button className="btn btn-success" type="submit">Save</button>
              </div>
            </form>
               <Link to="/" className="btn btn-danger">Cancel</Link>  
          </div>
      )
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createVideo: actions.createVideo
  }, dispatch)
}


export default connect(null, mapDispatchToProps)(CreateVideo);