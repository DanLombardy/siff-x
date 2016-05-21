const React = require('react');

const logo = document.createElement('img');
logo.src = require(__dirname + '/../imgs/siff-x.png')

var tierTop = [
	"/tier-top/vulcan-tech-logo.png"
];

var tier2 = [
	"/tier-02/cupcake-logo.png",
	"/tier-02/emblamatic-files-logo.png",
	"/tier-02/first-sight-logo.png",
	"/tier-02/goodship-lockup-logo.png",
	"/tier-02/goodship-wordmark-logo.png",
	"/tier-02/happens-rev-logo.png",
	"/tier-02/pyramid-logo.png",
	"/tier-02/ryot-logo.png",
	"/tier-02/The_New_York_Times.png",
	"/tier-02/Valve-01.png",
	"/tier-02/vrse-logo.png",
	"/tier-02/wevr-logo.png"
]

var tier1 = [
	"/tier-01/civilization-logo.png",
	"/tier-01/omni-optima-logo.png",
	"/tier-01/omnispace-logo.png",
	"/tier-01/pacific-sci-logo.jpeg",
	"/tier-01/panogs-logo.png",
	"/tier-01/unesco-logo-01.jpg",
	"/tier-01/waflimwrks-logo.png",
	"/tier-01/welens-logo.png"
];

var tier3 = [
	"/tier-03/circle-vr-logo.png",
	"/tier-03/civil-bw.png",
	"/tier-03/cloud-room-logo.png",
	"/tier-03/stiff-logo.jpeg",
	"/tier-03/vws-logo.png"
];

module.exports = React.createClass({

	render: function() {

	var tierTopBuilder = tierTop.map(function(imgLink, index){
		const logo = document.createElement('img');
		logo.src = require( __dirname + imgLink )

		return(
<div key={index} className='full-size'>
	<img src={logo.src} />
</div>
		)

	})

	var tier1Builder = tier1.map(function(imgLink, index){
		const logo = document.createElement('img');
		logo.src = require( __dirname + imgLink )

		return(
<div key={index} className='full-size'>
	<img src={logo.src} />
</div>
		)

	})

	var tier2Builder = tier2.map(function(imgLink, index){
		const logo = document.createElement('img');
		logo.src = require( __dirname + imgLink )

		return(
<div key={index} className='full-size'>
	<img src={logo.src} />
</div>		)

	})

	var tier3Builder = tier3.map(function(imgLink, index){
		const logo = document.createElement('img');
		logo.src = require( __dirname + imgLink )

		return(
			<div key={index} className='full-size'>
				<img src={logo.src} />
			</div>
		)

	})

		return (
		<section id="sponsors">
				<div className='quarterCol tablet-tenth-col inline'></div>
				<div className='halfCol tablet-eighty-col inline'>

					<div>
						<h1>
							Sponsors
						</h1>
					</div>
					<div id="sponsor-images">
						{ tierTopBuilder }
						{ tier1Builder }
						{ tier2Builder }
						{ tier3Builder }

					</div>
				</div>
				<div className='quarterCol tablet-tenth-col inline'></div>
		</section>
		)
	}
})
