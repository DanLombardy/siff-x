const React = require('react');
const NavLink = require(__dirname + '/nav-link');
const { IndexLink, Link } = require ('react-router');
const Menu = require('react-burger-menu').slide;
const MediaQuery = require('react-responsive');

module.exports = React.createClass({

	render: function() {
		return (
			<section>
				<MediaQuery query='(min-width: 900px)'>
					<Menu right id="hamburger" width={ 800 }>
						<IndexLink className="menu-item" activeStyle={{ color: '#00F1AE' }} to="/">VRog</IndexLink>
						<NavLink className="menu-item" to="/x-program">X Program</NavLink>
						<NavLink className="menu-item" to="/what-the-x">What The X?</NavLink>
						<NavLink className="menu-item" to="/sponsors">Sponsors</NavLink>
						<NavLink className="menu-item" to="/contact">Contact</NavLink>
						<a href="http://myaccount.siff.net/shop/passes.aspx?PID=1464">
							BUY TICKETS
						</a>
					</Menu>
				</MediaQuery>

				<MediaQuery query='(max-width: 900px)'>
					<Menu right id="hamburger" width={ 700 }>
						<IndexLink className="menu-item" activeStyle={{ color: '#00F1AE' }} to="/">VRog</IndexLink>
						<NavLink className="menu-item" to="/x-program">X Program</NavLink>
						<NavLink className="menu-item" to="/what-the-x">What The X?</NavLink>
						<NavLink className="menu-item" to="/sponsors">Sponsors</NavLink>
						<NavLink className="menu-item" to="/contact">Contact</NavLink>
						<a href="http://myaccount.siff.net/shop/passes.aspx?PID=1464">
							BUY TICKETS
						</a>
					</Menu>
				</MediaQuery>

				<MediaQuery query='(max-width: 750px)'>
					<Menu right id="hamburger" width={ 500 }>
						<IndexLink className="menu-item" activeStyle={{ color: '#00F1AE' }} to="/">VRog</IndexLink>
						<NavLink className="menu-item" to="/x-program">X Program</NavLink>
						<NavLink className="menu-item" to="/what-the-x">What The X?</NavLink>
						<NavLink className="menu-item" to="/sponsors">Sponsors</NavLink>
						<NavLink className="menu-item" to="/contact">Contact</NavLink>
						<a href="http://myaccount.siff.net/shop/passes.aspx?PID=1464">
							BUY TICKETS
						</a>
					</Menu>
				</MediaQuery>

				<MediaQuery query='(max-width: 575px)'>
					<Menu right id="hamburger" width={ 300 }>
						<IndexLink className="menu-item" activeStyle={{ color: '#00F1AE' }} to="/">VRog</IndexLink>
						<NavLink className="menu-item" to="/x-program">X Program</NavLink>
						<NavLink className="menu-item" to="/what-the-x">What The X?</NavLink>
						<NavLink className="menu-item" to="/sponsors">Sponsors</NavLink>
						<NavLink className="menu-item" to="/contact">Contact</NavLink>
						<a href="http://myaccount.siff.net/shop/passes.aspx?PID=1464">
							BUY TICKETS
						</a>
					</Menu>
				</MediaQuery>
			</section>
		)
	}
})
