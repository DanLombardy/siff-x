const React = require('react');

const whatX = document.createElement('img');
whatX.src = require(__dirname + '/../imgs/what-is-siffx.jpg');

const howTo = document.createElement('img');
howTo.src = require(__dirname + '/../imgs/how-to-enjoy.jpg');

module.exports = React.createClass({

	render: function() {

		return (
		<section id="what-the-x">
			<div className="flex-container">
				<div className='halfCol inline float-left'>
					<img src={ whatX.src } />
				</div>
				<div id="off-white" className='halfCol inline'>
					<p>
						SIFFX is a brand-new four-day festival within the Seattle International Film
						Festival showcasing the most current and creative thinking in virtual reality/VR,
						augmented reality/AR and 360° immersion. Building on SIFF’s commitment to
						fostering cinematic arts and independent filmmaking, SIFFX will convene
						filmmakers, storytellers, activists, artists, creative technicians, and educators to
						explore contemporary forms of new media, exhibit new work, experiment with
						new tools, make connections and dig into the question: How can we shape the
						purpose, use, and language of an entirely new medium at this pivotal moment?
					</p>
				</div>
			</div>
			<div className="flex-container">
				<div id="mint" className='halfCol inline'>
					<p>
						For three days you can experience <em>SCREENINGS</em>, <em>FEATURED TALKS</em>,
						<em>EXHIBITIONS</em>, <em>VR/AR X-Periences</em>, <em>X-Academy</em> and <em>FLY STORY</em>.
					</p>
					<p>
					Come to one screening or to everything! Try virtual reality in a variety of forms:
					headsets, lay-back, walk, look all around and then learn about and discuss what
					all of this means for cinema, storytelling, auteur-smashing and the future of the
					medium. Join us!
					</p>
				</div>
				<div className='halfCol float-right inline'>
					<img src={ howTo.src } />
				</div>
			</div>
		</section>
		)
	}
})
