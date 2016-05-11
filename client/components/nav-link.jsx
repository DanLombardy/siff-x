const React = require('react');
const { Link } = require ('react-router');

module.exports = React.createClass({

	render: function() {
		function scrollToLink(el){
			var newScrollHeight = document.body.scrollHeight;
			if(el.props.children=="program highlights"){
					window.scrollTo(0, newScrollHeight);
			} else if(el.props.children=="vrlog") {
					window.scrollTo(0,document.body.scrollHeight);

			} else if(el.props.children=="contact") {
					window.scrollTo(0,document.body.scrollHeight);
			} 
		}
		scrollToLink(this);
		return (
			<Link {...this.props} activeStyle={{ color: '#00F1AE' }}/>
		)
	}
})
