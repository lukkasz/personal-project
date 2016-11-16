import React from 'react';
import {IndexLink, Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as action from 'app/actions/authActions';

import Navbar from 'navbar/Navbar';

export default (props) => {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <Navbar />
        </div>
      </nav>      
    )
}


