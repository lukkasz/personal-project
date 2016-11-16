import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import {Link, browserHistory} from 'react-router';
import * as actions from 'app/actions/postsActions';

class PostsNew extends Component {
  
    constructor(props) {
      super(props);
      this.onFromSubmit = this.onFromSubmit.bind(this);
    }
    
    onFromSubmit(e) {
      e.preventDefault();
      
      const postTitle = this.refs.postTitle.value;
      const postText = this.refs.postText.value;
      
      if (postText.length > 0) {
        this.refs.postTitle.value = '';
        this.refs.postText.value = '';
        this.props.startAddPost(postTitle, postText);
        browserHistory.push('/');
      }
      
      
    }
    
    render() {
        return (
          <div className="todo-container__footer">
            <form onSubmit={this.onFromSubmit}>
              <div>
                <input className="form-control" type="text" ref="postTitle" placeholder="Post Title" />
              </div>
              <div>
                <input className="form-control" type="text" ref="postText" placeholder="PostText" />
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
  return bindActionCreators({startAddPost: actions.startAddPost}, dispatch);
}

export default connect(null, mapDispatchToProps)(PostsNew);