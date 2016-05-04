const React = require('react');
const Posts = require(__dirname + '/posts');
const request = require('superagent');



module.exports = React.createClass({
	getInitialState: function() {
		return {posts: []};
	},
		componentDidMount: function() {
		request
			.get('/api/posts')
			.end(function(err, res){
			console.log("returned stuf")
			var data = JSON.parse(res.text);
			this.setState({posts: data.posts});
   }.bind(this));
	},

	render: function() {

		return (
			<section id="infinite-scroll">

				<div className='quarterCol tablet-tenth-col'></div>
				<div className='halfCol tablet-eighty-col'>
					<Posts posts={this.state.posts}/>
				</div>
				<div className='quarterCol tablet-tenth-col'></div>
			</section>
		)
	}
})
