const React = require('react');

//program images
const xAcademyImg = document.createElement('img');
xAcademyImg.src = require(__dirname + '/../imgs/x-academy-web.jpg');

const openNightImg = document.createElement('img');
openNightImg.src = require(__dirname + '/../imgs/opening-night-laser-dome.jpg');

const wonderlandImg = document.createElement('img');
wonderlandImg.src = require(__dirname + '/../imgs/fabulous-wonderland.jpg');

const hungerImg = document.createElement('img');
hungerImg.src = require(__dirname + '/../imgs/hunger-in-los-angeles.jpg');

const plutoImg = document.createElement('img');
plutoImg.src = require(__dirname + '/../imgs/seeking-plutos-heart.jpg');
module.exports = React.createClass({

	render: function() {

		return (
			<section id="program-highlights">

				<div className='quarterCol tablet-tenth-col inline'></div>
				<div className='halfCol tablet-eighty-col inline'>
					<h1>PROGRAM HIGHLIGHTS</h1>

					<div>
						<img src={ openNightImg.src }/>
						<h2>
								Opening Night Screening at Pacific Science Center
								Laser Dome (Thursday, June 2)
						</h2>
						<p>
							Experience eye-popping 360º films created by RYOT, the LA-based
							content studio recently acquired by The Huffington Post, which specializes
							in documentary-style Virtual Reality films. Among the videos premiering for
							the first time in 360º projection is The Crossing, Susan Sarandon’s
							immersive video diary about the Syrian refugee rescue effort in Lesbos.
							Films will be shown consecutively on cardboard headsets and on the majestic
							expanse of the Pacific Science Center Laser Dome. RYOT co-founder and Academy
							Award®-nominee Bryn Mooser will be in attendance.
						</p>

					</div>

					<div>
						<img src={ plutoImg.src }/>
						<h2>
							Pluto in the Dome (Friday, June 3)
						</h2>
						<p>
							Built as the Spacearium for the 1962 World’s Fair, Pacific Science Center’s
							Laser Dome was originally a futuristic semi-sphere where Fair visitors could
							watch wide-angle movies about space. The historic structure returns to its
							roots on Friday night, with 360° screenings including Seeking Pluto’s Frigid
							Heart, a stereoscopic virtual reality experience that brings viewers to Pluto
							(The New York Times).
						</p>
					</div>

					<div>
						<img src={ hungerImg.src }/>
						<h2>
							Keynote Speaker: Nonny de la Peña (Saturday, June 4)
						</h2>
						<p>
							Hear journalist and “Godmother of Virtual Reality” Nonny de la Peña speak on
							the astronomical potential of VR for immersive journalism and its power as an
							empathy device for conveying the sights, sounds, and visceral feelings of the
							news. In the X Gallery, view the first retrospective of De la Peña’s work,
							including her first piece, Hunger in Los Angeles, for which her young intern,
							Palmer Luckey, created the prototype headset that later became the Oculus Rift.
						</p>
					</div>

					<div>
						<img src={ xAcademyImg.src }/>
						<h2>
							X Academy (June 3-5)
						</h2>
						<p>
							Engage with members of the local and national Virtual Reality vanguard as they
							explore current questions surrounding the advent of accessible VR technology,
							including VR 101, what VR means for the future of cinema and linear storytelling,
							whether VR can make us “more human,” and other contemporary issues ranging from
							the aesthetic to the ethical. Learn 360º workflow (cinematography, stitching,
							and projection) with examples presented in 360º projection at the Pacific
							Science Center Laser Dome. Review the timeline of VR and immersive storytelling
							through the lens of previous historic collaborations between the tech and art worlds.
						</p>
					</div>

					<div>
						<img src={ wonderlandImg.src }/>
							<h2>
								X Gallery (June 3-5)
							</h2>
							<p>
								Explore local, national, and international VR / AR projects that showcase a range
								of new technologies and illustrate how artists are bending the tech to tell their
								own stories. Featured projects with attending artists include: fabulous wonder.land,
								a 4D VR take on Alice in Wonderland, created by Toby Coffey of the National
								Theatre of Great Britain; The Visitor, a VR house of mirrors created by filmmakers James Kaelen and
								Eve M. Cohen; and Giant, a VR memoir of sorts in which director Milica Zec captures
								the experience of growing up in a war zone.
							</p>
					</div>
					<a href='http://myaccount.siff.net/shop/passes.aspx?PID=1464'>BUY YOUR PASS HERE </a>
				</div>
				<div className='quarterCol tablet-tenth-col inline'></div>

			</section>
		)
	}
})
