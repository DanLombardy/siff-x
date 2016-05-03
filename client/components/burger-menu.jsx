const React = require('react');
const Menu = require('react-burger-menu').slide;
const MediaQuery = require('react-responsive');

module.exports = React.createClass({

	render: function() {
		return (
			<MediaQuery query='(min-width: 900px)'>
				<Menu right id="hamburger" width={ 800 }>
					<a id="home" className="menu-item" href="/">HOME</a>
					<a id="about" className="menu-item" href="/artists">SIFF X ARTISTS</a>
					<a id="contact" className="menu-item" href="/about">ABOUT SIFF X</a>
					<a id="contact" className="menu-item" href="/sponsors">SPONSORS</a>
					<a id="contact" className="menu-item" href="/contact">CONTACT</a>
				</Menu>
			</MediaQuery>

			<MediaQuery query='(max-width: 900px)'>
				<Menu right id="hamburger" width={ 700 }>
					<a id="home" className="menu-item" href="/">HOME</a>
					<a id="about" className="menu-item" href="/artists">SIFF X ARTISTS</a>
					<a id="contact" className="menu-item" href="/about">ABOUT SIFF X</a>
					<a id="contact" className="menu-item" href="/sponsors">SPONSORS</a>
					<a id="contact" className="menu-item" href="/contact">CONTACT</a>

				</Menu>
			</MediaQuery>

			<MediaQuery query='(max-width: 750px)'>
				<Menu right id="hamburger" width={ 500 }>
					<a id="home" className="menu-item" href="/">HOME</a>
					<a id="about" className="menu-item" href="/artists">SIFF X ARTISTS</a>
					<a id="contact" className="menu-item" href="/about">ABOUT SIFF X</a>
					<a id="contact" className="menu-item" href="/sponsors">SPONSORS</a>
					<a id="contact" className="menu-item" href="/contact">CONTACT</a>

				</Menu>
			</MediaQuery>

			<MediaQuery query='(max-width: 575px)'>
				<Menu right id="hamburger" width={ 300 }>
					<a id="home" className="menu-item" href="/">HOME</a>
					<a id="about" className="menu-item" href="/artists">SIFF X ARTISTS</a>
					<a id="contact" className="menu-item" href="/about">ABOUT SIFF X</a>
					<a id="contact" className="menu-item" href="/sponsors">SPONSORS</a>
					<a id="contact" className="menu-item" href="/contact">CONTACT</a>

				</Menu>
			</MediaQuery>
		)
	}
})
