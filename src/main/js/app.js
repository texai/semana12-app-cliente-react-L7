const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

const PageHome = require('./pages/home');


ReactDOM.render(
	<PageHome />,
	document.getElementById('react')
)