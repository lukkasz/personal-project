import React from 'react';
import {IndexLink, Link} from 'react-router';

export default class AdminLinks extends React.Component {
  render() {
    return (
      <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
        <ul className="dropdown-menu">
          <li><Link to="admin/posts/new">New post</Link></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li role="separator" className="divider"></li>
          <li><a href="#">Separated link</a></li>
          <li role="separator" className="divider"></li>
          <li><a href="#">One more separated link</a></li>
        </ul>
      </li>
    )
  }
}