const React = require('react');
const ReactDOM = require('react-dom');
const request = require('superagent');
const Posts = require(__dirname + '/components/posts');
const Menu = require('react-burger-menu').slide;
const MediaQuery = require('react-responsive');

require('font-awesome/css/font-awesome.css')
require('normalize-css');

require(__dirname + "/sass/main.scss");

var logo = document.createElement('img');
logo.src = require(__dirname + "/imgs/siff-x-logo.png");

var hero = document.createElement('img');
hero.src = require(__dirname + "/imgs/siff-hero.png")



if (typeof window !== 'undefined') {
  window.React = React;
}

var Application = React.createClass({
	getInitialState: function() {
		return {posts: []};
	},
	componentDidMount: function() {
	// 	request
	// 		.get('/api/posts')
	// 		.end(function(err, res){
	// 		console.log("returned stuf")
	// 		var data = JSON.parse(res.text);
	// 		this.setState({posts: data.posts})
  //  }.bind(this));

	 var hero = document.getElementById('hero'),
      nav = document.getElementById("nav-container"),
      viewportHeight = Math.max(window.innerHeight || 0),
      navOffsetTop = nav.offsetTop;

      hero.style.height = viewportHeight + 'px';

      var hasScrolled = function() {
        var fromTop = document.body.scrollTop || document.documentElement.scrollTop || 0;

        if (navOffsetTop < fromTop) {
            nav.classList.add('fixed-position');
        } else {
            nav.classList.remove('fixed-position');
        }
      }

      window.addEventListener('scroll', hasScrolled);
	},

	render: function () {
		return (
			<section className="app">
			<header>
				<img src={logo.src} />
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


			</header>
			<main>
				<section  id='hero'>
					<img src={hero.src} />

					<section id='nav-container'>
						<nav id="fixed-nav">
							<ul>
								<li><a href="/#home">home</a></li>
								<li><p className="dash"></p></li>
								<li><a href="/#artists">artists</a></li>
								<li><p className="dash"></p></li>
								<li><a href="/contact">about</a></li>
								<li><p className="dash"></p></li>
								<li><a href="/sponsors">sponsors</a></li>
								<li><p className="dash"></p></li>
								<li><a href="/contacts">contacts</a></li>

							</ul>
						</nav>

					</section>
				</section>


				<iframe width="100%" allowFullScreen frameborder="0" src="//storage.googleapis.com/vrview/index.html?image=//photovrse.com/examples/coral.jpg&is_stereo=true"></iframe>

				<h2> SOME TEST TITLE!</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quidem, Cato, hanc totam
					copiam iam Lucullo nostro notam esse oportebit <a href="/artistName">more</a>
				</p>


				<iframe width="560" height="315" src="https://www.youtube.com/embed/_Uv64c4HdTg" frameborder="0"  allowFullScreen ></iframe>
				<h2> SOME TEST TITLE2</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quidem, Cato, hanc totam
					copiam iam Lucullo nostro notam esse oportebit <a href="/artistName">more</a>
				</p>

			</main>

			</section>
		)

	}
})

window.application = ReactDOM.render(<Application />, document.getElementById('root'));
