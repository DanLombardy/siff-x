const wordpress = require('wordpress');

const client = wordpress.createClient({
	url: process.env.WORDPRESS_URL,
	username: process.env.WORDPRESS_USER,
	password: process.env.WORDPRESS_PASSWORD
});

module.exports = exports = function(callback) {
	client.getPosts(function( error, posts ) {
		callback(posts);
	});
};
