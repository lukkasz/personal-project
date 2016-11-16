import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router';

import * as actions from 'app/actions/postsActions';


class PostsIndex extends Component {
  
  constructor() {
    super();
    this.renderPosts = this.renderPosts.bind(this);
  }

  renderPosts() {
   
    if (!this.props.posts.all) {
      return (
        <div>loading...</div>
      )
    }
    
    return this.props.posts.all.map((post)=>{
      return (
        <Link to={`/posts/${post.id}`} key={post.id}>
        <li className="list-group-item" >
          {post.title}
        </li>  
        </Link>
      )
    })
  }
  
 
	render() {
	  
	  //console.log("Props from PostsIndex:", this.props.posts);
	  
  	return (
  	  <div className="row">
    	 <div className="col-md-4">
    	 <h2>List of Blog posts</h2>
    	 <ul>
    	  {this.renderPosts()}
    	 </ul>
    	</div>
    	<div className="col-md-8">
    	  <h1>test</h1>
    	</div>
  	 </div>
  	)
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({startFetchPosts: actions.startFetchPosts}, dispatch);
}

function mapStateToProps(state) {
  return {posts: state.posts}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);