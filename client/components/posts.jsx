const React = require('react');
const LazyLoad = require('react-lazy-load');

module.exports = React.createClass({

	render: function(){
		var postNodes = this.props.posts.map(function(post, i){
			return (
			<LazyLoad offsetVertical={1000} key={i}>
				<div >
					<div dangerouslySetInnerHTML={{__html: post.content}}/>
				</div>
			</LazyLoad>

			)
		});

		return(
			<section>
				{postNodes}
			</section>
		)
	}
})
