import React from 'react';
import {IndexLink, Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as action from 'app/actions/authActions';

import AdminLinks from 'navbar/AdminLinks';

const Navbar =  (props) => {
  
  const isLogged = props.auth.uid ? true : false;
  
  const handleClickLogout = (e) => {
    e.preventDefault();
    console.log("Logout clicked!!!");
    props.startLogout();
  }
  
  const linkText = isLogged ? 'Logout' : 'Login';
  
  const renderLinks = () => {
    if (isLogged) {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li activeClassName="active"><Link to="posts">Posts</Link></li>
          <li activeClassName="active"><Link to="videos">Videos</Link></li>
          <AdminLinks />
          <li><a href="#" onClick={handleClickLogout}>{linkText}</a></li>
        </ul>
      )
    } else {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li activeClassName="active"><Link to="posts">Posts</Link></li>
          <li><a href="#" onClick={handleClickLogout}>{linkText}</a></li>
        </ul>
      )
    }
  }
  
  return (
    <div>
      <div className="navbar-header">
        <IndexLink className="navbar-brand" to="/" activeClassName="active">lukkasz</IndexLink>
      </div>
      <div className="collapse navbar-collapse">
        {renderLinks()}
      </div>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({startLogout: action.startLogout}, dispatch);
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Navbar);