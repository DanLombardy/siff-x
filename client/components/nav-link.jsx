const React = require('react');
const { Link } = require ('react-router');

module.exports = React.createClass({

	render: function() {
		window.test(this);
		return (
			<Link {...this.props} activeStyle={{ color: '#00F1AE' }}/>
		)
	}
})
