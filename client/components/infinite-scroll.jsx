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

				<div className='quarterCol'></div>
				<div className='halfCol'>
					<Posts posts={this.state.posts}/>
				</div>
				<div className='quarterCol'></div>
			</section>
		)
	}
})
