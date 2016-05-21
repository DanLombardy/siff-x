const React = require('react');
const { render } = require('react-dom');
const { Router, Route, browserHistory, IndexRoute } = require('react-router');

const App = require(__dirname + '/components/app');
const Contact = require(__dirname + '/components/contact');
const InfiniteScroll = require(__dirname + '/components/infinite-scroll');
const XProgram = require(__dirname + '/components/x-program');
const Schedule = require(__dirname + '/components/schedule');
const WhatTheX = require(__dirname + '/components/what-the-x');
const Sponsors = require(__dirname + '/components/sponsors');




require('normalize-css');
require(__dirname + "/sass/entry.scss");

render((
  <Router history={browserHistory}>
    <Route path="/" component={ App }>
			<IndexRoute component={ InfiniteScroll }/>
			<Route path="/x-program" component={ XProgram }/>
			<Route path="/what-the-x" component={ WhatTheX }/>
			<Route path="/sponsors" component={ Sponsors }/>
			<Route path="/contact"  component={ Contact }/>

		</Route>
  </Router>
), document.getElementById('root'))
