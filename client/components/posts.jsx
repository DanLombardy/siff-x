var React = require('react');

module.exports = React.createClass({

	render: function(){
		var postNodes = this.props.posts.map(function(post, i){
			return (
				<div key={i}>
					<h2>{post.title}</h2>
					<div dangerouslySetInnerHTML={{__html: post.content}}/>
				</div>
			)
		});

		return(
			<section>
				{postNodes};
			</section>
		)
	}
})
