import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, browserHistory } from 'react-router';

import  * as actions from 'app/actions/postsActions';

class PostsShow extends Component {

  constructor() {
    super();
   // this.renderPost = this.renderPost.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  componentDidMount() {
    this.props.startFetchPost(this.props.params.id);
  }

  renderPost(post) {
    
    if (!post || (post.id != this.props.params.id)) {
      return (
        <div>loading....</div>
      );
    } 

    return (
      <div>
        <h3>{post.title}</h3>   
        <p>{post.text}</p>
      </div>
    );
    
  }
  
  handleDeleteClick(){
    this.props.startDeletePost(this.props.params.id);
    browserHistory.push('/');  
  }
  
  render() {
    const { post } = this.props;
    return (
      <div>
        <Link to="/" className="btn btn-info">Back</Link>
        <button onClick={this.handleDeleteClick} className="btn btn-danger">Delete Post</button>
        {this.renderPost(post)}
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    startFetchPost: actions.startFetchPost,
    startDeletePost: actions.startDeletePost
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    post: state.posts.post
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);