const React = require('react');
const screenings = require(__dirname + '/../data/screenings');
const exhibits = require(__dirname + '/../data/exhibits');
const featuredTalks = require(__dirname + '/../data/featured-talks');
const xAcademy = require(__dirname + '/../data/x-academy');

module.exports = React.createClass({

	render: function() {

			var screeningProgram = screenings.datas.map(function(data, index){
				var eventImage = document.createElement('img');
				eventImage.src = require(__dirname + data.eventImage);

				return(
				<div key={index}>
					<div>
						<div className='thirdCol inline'>
							<h3>{data.location}</h3>
						</div>
						<div  className='twoThirdCol inline time-align-right'>
							<h3>{data.time}</h3>
						</div>
					</div>

					<div className="flex-container">
						<div className='thirdCol inline display-block'>
							<img id='test' src={ eventImage.src }/>
						</div>
						<div className='twoThirdCol inline'>
							<h2>{data.eventHeader}</h2>
							<p>
								{data.eventDescription}
							</p>
							<button><a href={ data.url }>Buy ></a></button>
						</div>
					</div>
				</div>)
			});

		var exhibitsProgram = exhibits.datas.map(function(data, index){
			var eventImage = document.createElement('img');
			eventImage.src = require(__dirname + data.eventImage);

			return(
			<div key={index}>
				<div>
					<div className='thirdCol inline'>
						<h3>{data.location}</h3>
					</div>
					<div className='twoThirdCol inline time-align-right'>
						<h3>{data.time}</h3>
					</div>
				</div>

				<div className="flex-container">
					<div className='thirdCol inline display-block'>
						<img id='test' src={ eventImage.src }/>
					</div>
					<div className='twoThirdCol inline'>
						<h2>{data.eventHeader}</h2>
						<p>
							{data.eventDescription}
						</p>
						<button><a href={ data.url }>Buy ></a></button>
					</div>
				</div>
			</div>)
		});

		var featuredTalksProgram = featuredTalks.datas.map(function(data, index){
			var eventImage = document.createElement('img');
			eventImage.src = require(__dirname + data.eventImage);

			return(
			<div key={index}>
				<div>
					<div className='thirdCol inline?'>
						<h3>{data.location}</h3>
					</div>
					<div className='twoThirdCol inline time-align-right'>
						<h3>{data.time}</h3>
					</div>
				</div>

				<div className="flex-container">
					<div className='thirdCol inline display-block'>
						<img id='test' src={ eventImage.src }/>
					</div>
					<div className='twoThirdCol inline'>
						<h2>{data.eventHeader}</h2>
						<p>
							{data.eventDescription}
						</p>
						<button><a href={ data.url }>Buy ></a></button>
					</div>
				</div>
			</div>)
		});

		var xAcademyProgram = xAcademy.datas.map(function(data, index){
			var eventImage = document.createElement('img');
			eventImage.src = require(__dirname + data.eventImage);

			return(
			<div key={index}>
				<div>
					<div className='thirdCol inline'>
						<h3>{data.location}</h3>
					</div>
					<div className='twoThirdCol inline time-align-right'>
						<h3>{data.time}</h3>
					</div>
				</div>

				<div className="flex-container">
					<div className='thirdCol inline display-block'>
						<img id='test' src={ eventImage.src }/>
					</div>
					<div className='twoThirdCol inline'>
						<h2>{data.eventHeader}</h2>
						<p>
							{data.eventDescription}
						</p>
						<button><a href={ data.url }>Buy ></a></button>
					</div>
				</div>
			</div>)
		});



		return (
			<section>
				<h1>Program</h1>
				<section id='program-highlights'>
					<h2 className="event-type">Screenings</h2>
					{ screeningProgram }
					<h2 className="event-type">Exhibits</h2>
						<h2>X-Gallery & Nonny de la Peña Pavilion</h2>
						<p>June 3-4; 10-12 Passholders only/online sign up required; 12-7:30 Passholders & Individual tickets - 1.5 hours time slots / tickets required</p>
						<p>June 5: 10-12 Passholders only/online sign up required; 12-6 FREE - 1.5 hours time slots / online sign-up required</p>

						<h2>X-Hub</h2>
						<p>June 3 10-10 FREE: 1 hour time slots / online sign up required</p>
						<p>June 4: 10-7:30 FREE: 1 hour time slots / online sign up required</p>
						<p>June 5: 10-6 FREE: 1 hour time slots / online sign up required</p>
					{ exhibitsProgram }
					<h2 className="event-type">Featured Talks</h2>
					{ featuredTalksProgram }
					<h2 className="event-type">X Academy</h2>
					{ xAcademyProgram }

				<h2>The Locations</h2>
				<p>
					The Dome = Pacific Science Center Dome
					X-Hub = SIFF Film Center
					X-Gallery = Seattle Center Pavilion
					Nonny de la Peña Pavilion = Seattle Center Pavilion
					X-Makers Lab = Next 50 Pavilion
				</p>
				</section>
			</section>
		)
	}
})
