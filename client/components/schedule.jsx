const React = require('react');
const { render } = require('react-dom');
const { Router, Route, browserHistory, IndexRoute } = require('react-router');

const NavLink = require(__dirname + '/nav-link');
const { IndexLink, Link } = require ('react-router');

const ScheduleThurs = require(__dirname + '/schedule-thurs');
const ScheduleFri = require(__dirname + '/schedule-fri');
const ScheduleSat = require(__dirname + '/schedule-sat');
const ScheduleSun = require(__dirname + '/schedule-sun');

module.exports = React.createClass({

	render: function() {

		return (
		<section id='schedule-container'>
			<h1>Schedule</h1>
			<nav>
				<button className='schedule-button'>
					<IndexLink activeStyle={{ color: '#00F1AE' }} to='/schedule-thursday'>Thursday</IndexLink>
				</button>
				<button className='schedule-button'>
					<NavLink to='/schedule-friday'>Friday</NavLink>
				</button>
				<button className='schedule-button'>
					<NavLink to='/schedule-saturday'>Saturday</NavLink>
				</button>
				<button className='schedule-button'>
					<NavLink  to='/schedule-sunday'>Sunday</NavLink>
				</button>
			</nav>
				{this.props.children}
		</section>
		)
	}
})
