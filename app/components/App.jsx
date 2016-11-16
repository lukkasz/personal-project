import React from 'react';
import {connect} from 'react-redux';
import Header from 'common/Header';

export default (props) => {

	return (
		<div>
			<Header />
			<div className="container">
	    	{props.children}
			</div>
		</div>
	);
}




