'use strict';

const express = require('express');
const jsonParser = require('body-parser');
const handleError = require(__dirname + '/../server-lib/handle-error');
const wordPressPosts = require(__dirname + "/../server-lib/wordpress-posts.js")

const dataRouter = module.exports = exports = express.Router();

dataRouter.get('/posts', (req, res) => {
	console.log("i got hit");
	wordPressPosts((posts) => {
		console.log("here are the posts");
		console.log(posts);
	let array = posts.map(function(post){
		let obj = {
			content: post.content,
			title: post.title
		}
		return obj;
	})
	let data = {posts: array };

	res.status(200).json(data);
	})
})
