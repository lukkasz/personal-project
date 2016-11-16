import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';

import * as action from 'app/actions/authActions';

class Login extends Component {
  
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e){
    e.preventDefault();
    //console.log(this.refs);
    
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    
    this.props.startLogin(email, password);
  }
  
  render() {
    return(
      <div>
        <h1 className="page-title">Login</h1>
        
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="emailInput">Email</label>
                <input type="email" className="form-control" id="emailInput" placeholder="Email" ref="email" />
              </div>
              <div className="form-group">
                <label htmlFor="passwordInput">Password</label>
                <input type="password" className="form-control" id="passwordInput" ref="password" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-default">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({startLogin: action.startLogin}, dispatch);
}

export default connect(null, mapDispatchToProps)(Login);