import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router';

import * as actions from 'app/actions/videosActions';


class Videos extends Component {
  
  constructor() {
    super();
    this.renderVideos = this.renderVideos.bind(this);
  }

  renderVideos() {
    if (!this.props.videos.all) {
      return (
        <div>loading...</div>
      )
    }
    
    return this.props.videos.all.map((video)=>{
      return (
        <div className="col-xs-6 col-md-3" key={video.id} >
          <div className="thumbnail">
            <Link to={`/videos/${video.id}`}>
              <img src={video.imageUrl} alt={video.title} className="img-responsive"/>
            </Link>
            <div className="caption">
              <h3>Thumbnail label</h3>
            </div>
          </div>
        </div>
      )
    })
  }
  
 
	render() {
	  
	  //console.log("Props from PostsIndex:", this.props.posts);
	  
  	return (
  	  <div className="row">
    	 {this.renderVideos()}
  	 </div>
  	)
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadVideos: actions.loadVideos}, dispatch);
}

function mapStateToProps(state) {
  return {videos: state.videos}
}

export default connect(mapStateToProps, mapDispatchToProps)(Videos);